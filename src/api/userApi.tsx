import { User } from "../stores/types";
import mocks from "./mocks";

const userApi = {
  async newPass(email: string) {
    return new Promise<User>((resolve, reject) => {
      resolve(mocks.users[0]);
    });
  },
  async login(params: any) {
    return new Promise<{ user?: User; message: string }>((resolve, reject) => {
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
    return new Promise<User>((resolve, reject) => {
      resolve(mocks.users[0]);
    });
  },
  async updateUser(id: number, dt: any) {
    return new Promise<User>((resolve, reject) => {
      resolve(mocks.users[0]);
    });
  },

  async updateUserByParams(id: number, dt: any) {
    return new Promise<{ users: User[] }>((resolve, reject) => {
      resolve({
        users: mocks.users,
      });
    });
  },
  async addUser(dt: any) {
    return new Promise<{ users: User[] }>((resolve, reject) => {
      resolve({
        users: mocks.users,
      });
    });
  },
  async getUsers() {
    return new Promise<{ users: User[] }>((resolve, reject) => {
      resolve({
        users: mocks.users.filter((u) => u.role !== "admin"),
      });
    });
  },

  async deleteUser(id: number) {
    return new Promise<{ users: User[] }>((resolve, reject) => {
      resolve({
        users: mocks.users.filter((u) => u.role !== "admin"),
      });
    });
  },
};

export default userApi;
