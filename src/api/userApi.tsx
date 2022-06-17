import { User } from "../types"
import mocks from "./mocks"

const userApi = {
    async newPass(email: string){
        // const fd = new FormData();
        // const status = "newpass";
        // fd.append("email", email)
        // fd.append("status", status)
        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'GET',
        //     body: fd
        //   })
        //   return await responseRaw.json();
        return new Promise<User>((resolve, reject)=>{
            resolve(mocks.users[0])
        })
    },
    async login(params: any){
        // const fd = new FormData();
        // const status = "login";
        // fd.append("login", params.login)
        // fd.append("password", params.password)
        // fd.append("status", status)
        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'GET',
        //     body: fd
        //   })
        //   return await responseRaw.json();


        return new Promise<{user: User|undefined, message: string}>((resolve, reject)=>{
            const user = mocks.users.find(u=>u.userName==params.username && u.password===params.password);
            resolve({
                user: user,
                message: !user? "error": ""
            })
        })
    },
    async register(params: any){
        // const fd = new FormData();
        // const status = "register";
        // fd.append("login", params.login)
        // fd.append("password", params.password)
        // fd.append("status", status)
        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'GET',
        //     body: fd
        //   })
        //   return await responseRaw.json();


        return new Promise<User>((resolve, reject)=>{
            resolve(mocks.users[0])
        })
    },
    async updateUser(id: number, dt: any){
        // const fd = new FormData();
        // const status = "updateuser";
         // fd.append("id", id)
        // fd.append("dt", dt)
        // fd.append("status", status)
        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'POST',
        //     body: fd
        //   })
        //   return await responseRaw.json();


        return new Promise<User>((resolve, reject)=>{
            resolve(mocks.users[0])
        })
    },

    async updateUserByParams(id: number, dt: any){
        // const fd = new FormData();
        // const status = "updateuser";
         // fd.append("id", id)
        // fd.append("dt", dt)
        // fd.append("status", status)
        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'POST',
        //     body: fd
        //   })
        //   return await responseRaw.json();


        return new Promise<{users: User[]}>((resolve, reject)=>{
            resolve({
                users: mocks.users
            })
        })
    },
    async addUser(dt: any){
        // const fd = new FormData();
        // const status = "adduser";
        // fd.append("dt", dt)
        // fd.append("status", status)
        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'POST',
        //     body: fd
        //   })
        //   return await responseRaw.json();


        return new Promise<{users: User[]}>((resolve, reject)=>{
            resolve({
                users: mocks.users
            })
        })
    },
    async getUsers(){
        // const fd = new FormData();
        // const status = "users";
        // fd.append("status", status)
        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'POST',
        //     body: fd
        //   })
        //   return await responseRaw.json();


        return new Promise<{users: User[]}>((resolve, reject)=>{
            resolve({
                users: mocks.users.filter(u=>u.role!== "admin")
            })
        })
    },

    async deleteUser(id: number){
        // const fd = new FormData();
        // const status = "deluser";
         // fd.append("id", id)
        // fd.append("status", status)
        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'POST',
        //     body: fd
        //   })
        //   return await responseRaw.json();

        return new Promise<{users: User[]}>((resolve, reject)=>{
            resolve({
                users: mocks.users.filter(u=>u.role!== "admin")
            })
        })
    }
}

export default userApi