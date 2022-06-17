import { runInAction } from "mobx";
import { observer } from "mobx-react"
import { useState } from "react"
import {ReactComponent as Edit} from "../../../img/icons/ci_edit.svg"
import UserModel, { updateUser } from "../../../stores/UserModel";
import { AccountInfo } from "../AccountProfile";
import "./accountAside.scss";

const AccountAside = observer(()=>{
    const [edit, setEdit] = useState(false);
    const [data, setData] = useState({
        dayLimit:UserModel.user?.dayLimit||0,
        monthLimit:UserModel.user?.monthLimit||0,
        yearLimit: UserModel.user?.yearLimit||0
    })

    const list = [
        "Day limit",
        "Month limit",
        "Year limit"
    ]

    const updateData = ()=>{
        if(edit){
            runInAction(()=>{
                AccountInfo.dayLimit = data.dayLimit;
                AccountInfo.monthLimit = data.monthLimit;
                AccountInfo.yearLimit = data.yearLimit;
            })

            console.log(AccountInfo)
            setEdit(false)
        }else setEdit(true)
    }

    const getVal = (t: string):number=>{
        switch(t){
            case "Day limit": return data.dayLimit
            case "Month limit": return data.monthLimit
            case "Year limit": return data.yearLimit
        }

        return 0;
    }

    const changeHandler=(value: string,t: string)=>{
        switch(t){
            case "Day limit": 
                setData({
                    ...data, dayLimit: +value
                })
            break;
            case "Month limit": 
                setData({
                    ...data, monthLimit: +value
                })
            break;
            case "Year limit": 
                setData({
                    ...data, yearLimit: +value
                })
            break;
        }
    }

    return (<div className="account-aside">
    { UserModel.user &&  
        <>
            <div className="account-aside__top">
           
                <span className="account-aside__label">Total balance</span>
                <div className="account-aside__amount">£
                {UserModel.user.totalBalance?.toLocaleString().split(",").join(".") + `${Number.isInteger(UserModel.user.totalBalance)?".00":""}`}</div>
            </div>
            <div className="account-aside__list">
                <span className="account-aside__edit"
                onClick={updateData}><Edit/> {!edit?"Edit":"Save"}</span>
                {
                    list.map((it, ind)=>(
                        !edit
                        ?<div className="account-aside__item" key={ind}>
                            <span className="account-aside__label">{it} </span>
                            <div className="account-aside__amount">£{
                            (getVal(it).toLocaleString()+`${Number.isInteger(getVal(it))?".00":""}`)}</div>
                        </div>
                        :<div className="account-aside__item" key={ind}>
                            <label htmlFor={it} className="account-aside__label">{it}</label>
                            <input className="input" type="number" name={it} 
                            value={getVal(it)}
                            onChange={(e)=>changeHandler(e.target.value, it)}/>
                        </div>
                    ))
                }
            </div>
        </>
    }
    </div>)
})

export default AccountAside