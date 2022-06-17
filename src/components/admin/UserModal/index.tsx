import { useState } from "react";
import Button from "../../common/Button";
import { emailValidate, getFormatDate, isEmpty } from "../../hooks/main";
import {ReactComponent as Close} from "../../../img/icons/ci_close-big.svg"; 

import "./userModal.scss";
import classNames from "classnames";
import { addUser, updateUser, updateUserByParams } from "../../../stores/UserModel";
import { User } from "../../../types";

const UserModal = ({setShow, mode, dt}: {
    setShow: (val: boolean)=>void, 
    mode: "add"|"edit",
    dt?: User
})=>{

    const [userData, setData] = useState({
        name:dt? dt.name: "", 
        surname:dt? dt.surname: "",
        username: dt? dt.userName: "",
        email: dt? dt.email: "",
        bday: dt? dt.birthDate: "",
        pass: dt? dt.password: "",
    });

    const [errors, setErrors] = useState({
        name:"", 
        surname:"",
        username: "",
        email: "",
        bday: "",
        pass: ""
    });

    const receiveData = ()=>{
        const {name,surname,username,email,bday,pass} = userData;

        const errs = {
            name:!isEmpty(name!)? "*Fill field": "", 
            surname:!isEmpty(surname!)? "*Fill field": "", 
            username: !isEmpty(username!)? "*Fill field": "",
            email: !isEmpty(email)? 
            "*Fill field": 
            (!emailValidate(email) && isEmpty(email))?"Invalid email":"",
            bday: !isEmpty(bday!)? "*Fill field": "",
            pass: !isEmpty(pass)? "*Fill field": ""
        }

        if(!errs.name.length && !errs.surname.length &&
            !errs.username.length && !errs.email.length &&
            !errs.bday.length && !errs.pass.length){
                if(mode === "add"){
                    addUser({
                        name, 
                        surname,
                        username,
                        email,
                        bday,
                        password: pass
                    })
                }
                else updateUserByParams(dt!.id,{
                    name, 
                    surname,
                    username,
                    email,
                    bday,
                    password: pass
                } )

                setShow(false)
        }
        setErrors({...errs})
    }
    
    return <div className="user-modal">
       <div className="user-modal__content">
        <div className="user-modal__top">
             <h1 className="user-modal__title">{mode==="add"? "Create": "Edit"} user</h1>
            <Button classname="button--close" click={()=>setShow(false)} content={<Close className="svg-close"/>} disabled={false}/>
        </div>
    <div className="user-modal__input">
        <label className="user-modal__label" htmlFor="name">Name</label>
        <input className="input" id="name" 
        value={userData.name}
        onChange={(e)=>setData({...userData, name: e.target.value})}/>
        <span className="user-modal__error">{errors.name}</span>
    </div>
    <div className="user-modal__input">
        <label className="user-modal__label" htmlFor="sname">Surname</label>
        <input className="input" id="sname"        
        value={userData.surname}
        onChange={(e)=>setData({...userData, surname: e.target.value})}/>
        <span className="user-modal__error">{errors.surname}</span>
    </div>
    <div className="user-modal__input">
        <label className="user-modal__label" htmlFor="uname">Username</label>
        <input className="input" id="uname"
        value={userData.username}
        onChange={(e)=>setData({...userData, username: e.target.value})}/>
        <span className="user-modal__error">{errors.username}</span>
    </div>
    <div className="user-modal__input">
        <label className="user-modal__label" htmlFor="email">E-mail address</label>
        <input className="input" id="email" type="email"
        placeholder="Enter valid address"
        value={userData.email}
        onChange={(e)=>setData({...userData, email: e.target.value})}/>
        <span className="user-modal__error">{errors.email}</span>
    </div>
    <div className="user-modal__input">
        <label className="user-modal__label" htmlFor="bday">Birthday date</label>
        <input className={classNames("input",userData.bday!.length && "input--date")} id="bday" type="date"
            value={getFormatDate(userData.bday!)}
            onChange={(e)=>setData({...userData, bday:  new Date(e.target.value).toString()})}/>
            <span className="user-modal__error">{errors.bday}</span>
    </div>
    <div className="user-modal__input">
        <label className="user-modal__label" htmlFor="pass">Password</label>
        <input className="input" id="pass"
        type="password"
        value={userData.pass}
        onChange={(e)=>setData({...userData, pass: e.target.value})}/>
        <span className="user-modal__error">{errors.pass}</span>
    </div>
    <Button classname="button--log button--w140" content={mode==="add"? "Create user":"Save changes"} click={receiveData} disabled={false}/>
       </div>
    </div>
}

export default UserModal;