import { sortByName, sortByNumber } from "@/lib/utils";
import { GetUsersParams, User } from "../stores/types";
import mocks from "./mocks";

const userApi = {
  async newPass(email: string) {
    return new Promise<User>((resolve) => {
      resolve(mocks.users[0]);
    });
  },
  async login(params: any) {
    return new Promise<{ user?: User; message: string }>((resolve) => {
      const user = mocks.users.find(
        (u) => u.userName == params.username && u.password === params.password,
      );
      resolve({
        user: user,
        message: !user ? "error" : "",
      });
    });
  },
  async register(params: any) {
    return new Promise<User>((resolve) => {
      resolve(mocks.users[0]);
    });
  },
  async updateUser(id: number, dt: any) {
    return new Promise<User>((resolve) => {
      resolve(mocks.users[0]);
    });
  },

  async updateUserByParams(id: number, dt: any) {
    return new Promise<{ users: User[] }>((resolve) => {
      resolve({
        users: mocks.users,
      });
    });
  },
  async addUser(dt: any) {
    return new Promise<{ users: User[] }>((resolve) => {
      resolve({
        users: mocks.users,
      });
    });
  },
  async getUsers(params: GetUsersParams) {
    return new Promise<{ users: User[] }>((resolve) => {
      let res = mocks.users.filter((u) => u.role !== "admin");
      if (params.sortBy) {
        switch (params.sortBy) {
          case "user":
            res = res.sort((a: User, b: User) => sortByName(a.name!, b.name!));
            if (!params.sortAsc) {
              res.reverse();
            }
            break;
          case "login":
            res = res.sort((a: User, b: User) =>
              sortByName(a.userName!, b.userName!),
            );
            if (!params.sortAsc) {
              res.reverse();
            }
            break;
          case "email":
            res = res.sort((a: User, b: User) =>
              sortByName(a.email!, b.email!),
            );
            if (!params.sortAsc) {
              res.reverse();
            }
            break;
          case "bdate":
            res = res.sort((a: User, b: User) =>
              sortByNumber(
                new Date(a.birthDate!).getTime(),
                new Date(b.birthDate!).getTime(),
                params.sortAsc,
              ),
            );
            break;
          case "balance":
            res = res.sort((a: User, b: User) =>
              sortByNumber(a.totalBalance, b.totalBalance, params.sortAsc),
            );
            break;
          default:
            break;
        }
      }
      resolve({
        users: res,
      });
    });
  },

  async deleteUser(id: number) {
    return new Promise<{ users: User[] }>((resolve) => {
      resolve({
        users: mocks.users.filter((u) => u.role !== "admin"),
      });
    });
  },
};

export default userApi;
