import { observable, runInAction } from "mobx";

const AuthModel = observable({
    isAuthOpen: false,
    isForgotOpen: false
})

export const setState = ()=>{
    runInAction(()=>{
        AuthModel.isAuthOpen=!AuthModel.isAuthOpen;
    })
}

export const setForgotState = ()=>{
    runInAction(()=>{
        AuthModel.isForgotOpen=!AuthModel.isForgotOpen;
    })
}

export default AuthModel