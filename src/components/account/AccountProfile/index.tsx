import { observer } from "mobx-react";
import UserModel, { updateUser } from "../../../stores/UserModel";
import {ReactComponent as Edit} from "../../../img/icons/ci_edit.svg"
import {ReactComponent as Google} from "../../../img/icons/flat-color-icons_google.svg"
import { useEffect, useState } from "react";
import "./accountProfile.scss";
import Button from "../../common/Button";
import { emailValidate, getFormatDate, isEmpty } from "../../hooks/main";
import {ReactComponent as UserSvg} from "../../../img/icons/User.svg";
import { observable, runInAction } from "mobx";
import classNames from "classnames";

export const AccountInfo = observable({
    dayLimit:UserModel.user?.dayLimit||0,
    monthLimit:UserModel.user?.monthLimit||0,
    yearLimit: UserModel.user?.yearLimit||0,
})

const AccountProfile = observer(()=>{
    const [userData, setData] = useState({
        avatar:  UserModel.user?.avatar||"",
        name: UserModel.user?.name||"",
        surname: UserModel.user?.surname||"",
        userName: UserModel.user?.userName||"",
        email: UserModel.user?.email||"",
        password: UserModel.user?.password||"",
        birthDate: UserModel.user?.birthDate||"",
        googleAccount: ""
    })

    const [errors, setError] = useState({
        name: "",
        surname: "",
        userName: "",
        email: "",
        password: "",
        birthDate: "",
    })

    const [passRead, setRead] = useState(true);

    const connectGoogle  = ()=>{

    }


    const updateData = ()=>{

        const inputErrors = {
            name: !isEmpty(userData.name)?"*Fill field": "",
            surname: !isEmpty(userData.surname)?"*Fill field": "",
            userName: !isEmpty(userData.userName)?"*Fill field": "",
            email: !isEmpty(userData.email)?"*Fill field": !emailValidate(userData.email)?"*Wrong email":"",
            password: !isEmpty(userData.password)?"*Fill field": "",
            birthDate: !isEmpty(userData.name)?"*Fill field": "",
        }

        if(!inputErrors.name.length && !inputErrors.surname.length && 
            !inputErrors.userName.length  && !inputErrors.email.length  && 
            !inputErrors.password.length  && !inputErrors.birthDate.length ){
            updateUser(UserModel.user!.id, {
                ...userData,
                dayLimit: AccountInfo.dayLimit, 
                monthLimit: AccountInfo.monthLimit,
                yearLimit:  AccountInfo.yearLimit
            })
            setError({
                ...inputErrors
            })
        }
        else {
            setError({
                ...inputErrors
            })
        }
    }

    const fileHandler = (list: FileList|null)=>{
        var reader = new FileReader();
        if(list){
            var url = reader.readAsDataURL(list[0])
            reader.onloadend = function () {
                setData({
                    ...userData,avatar: reader.result!.toString()
                })
            }
        }
    }

    return (<div className="account-profile">
        <div className="account-profile__top">
            <div className="account-profile__avatar">
                <div className="account-profile__image">
                   {userData.avatar? <img src={userData.avatar} alt="" className="image"/>
                   :<UserSvg/>}
                </div>
                <label className="account-profile__edit" htmlFor="avatar">
                    <Edit/>
                    <input className="file-input" type="file" id="avatar"
                    onChange={(e)=>fileHandler(e.target.files)}/>
                </label>
            </div>
            <div className="account-profile__form">
                <div className="account-profile__input">
                    <label htmlFor="name" className="account-profile__label">Name</label>
                    <input className="input" id="name" value={userData.name}
                    onChange={(e)=>setData({
                        ...userData, name: e.target.value
                    })}
                    
                    />
                    <span className="account-profile__error">{errors.name}</span>
                </div>
                <div className="account-profile__input">
                    <label htmlFor="surname" className="account-profile__label">Surname</label>
                    <input className="input" id="surname" value={userData.surname}
                    onChange={(e)=>setData({
                        ...userData, surname: e.target.value
                    })}/>
                     <span className="account-profile__error">{errors.surname}</span>
                </div>
            </div>
        </div>
        <div className="account-profile__main">
        <div className="account-profile__form">
                <div className="account-profile__input">
                    <label htmlFor="username" className="account-profile__label">Username</label>
                    <input className="input" id="username" value={userData.userName}
                    onChange={(e)=>setData({
                        ...userData, userName: e.target.value
                    })}/>
                     <span className="account-profile__error">{errors.userName}</span>
                </div>
                <div className="account-profile__input">
                    <label htmlFor="email" className="account-profile__label">E-mail address</label>
                    <input className="input" id="email" type="email" value={userData.email}
                    onChange={(e)=>setData({
                        ...userData, email: e.target.value
                    })}/>
                     <span className="account-profile__error">{errors.email}</span>
                </div>
                <div className="account-profile__input">
                    <label htmlFor="birthDate" className="account-profile__label">Birthday date</label>
                    <input className={classNames("input",userData.birthDate.length && "input--date" )} type="date" id="birthDate" value={getFormatDate(userData.birthDate)}
                    onChange={(e)=>setData({
                        ...userData, birthDate: new Date(e.target.value).toString()
                    })}/>
                    <span className="account-profile__error">{errors.birthDate}</span>
                </div>
            </div>
            <div className="account-profile__form-pass">
                <div className="account-profile__form-content">
                    <div className="account-profile__form-input">
                        <label htmlFor="password" 
                        className="account-profile__label">Password 
                        <span className="label-svg" onClick={()=>setRead(!passRead)}><Edit/>{passRead?"Edit": "Save"}</span></label>
                        <input className="input" id="password" type="password" value={userData.password}
                        readOnly={passRead}
                        onChange={(e)=>setData({
                            ...userData, password: e.target.value
                        })}/>
                    </div>
                    <span className="account-profile__form-edit"
                    onClick={()=>setRead(!passRead)}><Edit/> {passRead?"Edit": "Save"} password</span>
                </div>
                <span className="account-profile__error">{errors.password}</span>
            </div>
        </div>
        <div className="account-profile__linked">
            <div className="account-profile__col">
                <span className="account-profile__label">Linked accounts</span>
                <div className="account-profile__google">
                    <Google/> Sign in with google
                </div>
            </div>

            <Button disabled={false} classname="button--orange-border button--w108" content={"Connect"} click={connectGoogle}/>
        </div>
        <div className="account-profile__bottom">
            <Button disabled={false} classname="button--orange button--w140" content={"Save changes"} click={updateData}/>
        </div>
    </div>)
})



export default AccountProfile;