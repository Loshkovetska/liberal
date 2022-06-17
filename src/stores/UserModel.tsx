import { observable, runInAction } from "mobx";
import api from "../api";
import {User} from "../types"
import { setForgotState, setState } from "./AuthModel";

type UserType = {
    user: null|User,
    users: null| User[],
    message: string
}

const UserModel:UserType = observable({
    user: null,
    users: null,
    message: ""
})

if(sessionStorage.user){
    runInAction(()=>{
        UserModel.user = JSON.parse(sessionStorage.user)
    })
}

export const login = async (params: any)=>{
    try{
        const {user} = await api.user.login(params);
        if(user){
            sessionStorage.setItem("user", JSON.stringify(user))
            setState()
            
            runInAction(()=>{
                UserModel.user = user
            })
        }


    }catch(e:any){
        runInAction(()=>{
            UserModel.message = e.message;
        })
    }
}

export const register = async (params: any)=>{
    try{
        const user = await api.user.register(params);
        if(user){
            sessionStorage.setItem("user", JSON.stringify(user))
            setState()
            runInAction(()=>{
                UserModel.user = user
            })
        }


    }catch(e:any){
        runInAction(()=>{
            UserModel.message = e.message;
        })
    }
}

export const newPass = async (email: string)=>{
    try{
        await api.user.newPass(email);
        setForgotState();
        setState()
    }catch(e:any){
        runInAction(()=>{
            UserModel.message = e.message;
        })
    }
}

export const logOut = ()=>{
    sessionStorage.clear();
    runInAction(()=>{
        UserModel.user = null;
    })
}

export const updateUser = async(id:number, dt: any)=>{
    try{
        const user = await api.user.updateUser(id, dt);
        if(user){
            sessionStorage.setItem("user", JSON.stringify(user))
            runInAction(()=>{
                UserModel.user = user
            })
        }
    }
    catch(e){

    }
}

export const updateUserByParams = async(id:number, dt: any)=>{
    try{
        const {users} = await api.user.updateUserByParams(id, dt);
        runInAction(()=>{
            UserModel.users = users
        })
    }
    catch(e){

    } 
}

export const addUser = async (dt:any)=>{
    try{
        const {users} = await api.user.addUser(dt);
        runInAction(()=>{
            UserModel.users = users
        })
    }
    catch(e){

    } 
}

export const deleteUser = async(id:number)=>{
    try{
        const {users} =  await api.user.deleteUser(id);
        if(users){
            runInAction(()=>{
                UserModel.users = users
            })
        }
    }
    catch(e){

    }
}

export const getUsers = async()=>{
    try{
        const {users} = await api.user.getUsers();
        runInAction(()=>{
            UserModel.users = users
        })
    }
    catch(e){

    }

}

export default UserModel