import { observer } from "mobx-react";
import "./auth.scss";
import Button from "../../common/Button";
import {ReactComponent as Close} from "../../../img/icons/ci_close-big.svg"; 
import AuthModel, { setState } from "../../../stores/AuthModel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Login from "../Login";
import Register from "../Register";
import Social from "../../common/Social";
import UserModel from "../../../stores/UserModel";
import { runInAction } from "mobx";
const Auth = observer(()=>{

    const [currentTab, setTab] = useState(0);
    const [classname, setClass] = useState(
        !currentTab? "account-tabs--active-tab0": "account-tabs--active-tab1"
    );

    const authTabs = [
        {
            title:"Log in",
            link:"/log"
        },
        {
             title: "Registration",
             link:"/reg"
         }
    ]

    useEffect(()=>{
        setClass((
            !currentTab? 
        "account-tabs--active-tab0": "account-tabs--active-tab1"))
    },[currentTab])

    useEffect(()=>{
        if(AuthModel.isAuthOpen){
            (document.querySelector("#root")as Element).classList.add("menu-open")
        }
        else  (document.querySelector("#root")as Element).classList.remove("menu-open")
       
    },[AuthModel.isAuthOpen])

    return (
    <div className="auth-modal" onClick={()=>setState()}>
        <div className="auth-modal__content" onClick={(e)=>e.stopPropagation()}>
            <div className="auth-modal__top">
                <div className={classNames("account-tabs", classname)}>
           {
               authTabs.map((tab, ind)=>(
                <Link 
                to={"#"}
                className="account-tabs__item" 
                key={ind} 
                onClick={()=>{
                    setClass(`account-tabs--active-tab${ind}`)
                    setTab(ind)
                    runInAction(()=>{
                        UserModel.message=""
                    })
                }}>
                    {tab.title}
                </Link>
               ))
           }
        </div>
                <Button classname="button--close" click={()=>setState()} content={<Close className="svg-close"/>} disabled={false}/>
            </div>
           { UserModel.message.length?<div className="auth-modal__model-error">{UserModel.message}</div>:<></>}
            <div className="auth-modal__tab">
                {
                    !currentTab? <Login/>: <Register/>
                }
            </div>
            <div className="auth-modal__bottom">
                    <p className="auth-modal__text">Wanna be closer to us?</p>
                    <div className="auth-modal__social">
                        <Social/>
                    </div>
                </div>
        </div>
    </div>)
})

export default Auth

