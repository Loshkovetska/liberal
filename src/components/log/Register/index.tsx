import { useState } from "react"
import { register } from "../../../stores/UserModel"
import {ReactComponent as Eye} from "../../../img/icons/akar-icons_eye.svg"; 
import Button from "../../common/Button";
import { observer } from "mobx-react-lite";

const Register = observer(()=>{
    const [userData, setData] = useState({
        username: "",
        password: "",
        repeatPass: ""
    })
    const [errors, setErrors] = useState({
        username: "",
        password: "",
        repeatPass: ""
    })

    const [passState, setPassState] = useState(false);
    const [repPassState, setRepPassState] = useState(false);
    const userReg = ()=>{
        const errs = {
            username: "",
            password: "",
            repeatPass: ""
        }
        const {username, password,repeatPass} = userData;
        if(!username.length){
            errs.username = "*Fill field";
        }

        if(!password.length){
            errs.password = "*Fill field"
        }

        if(!repeatPass.length){
            errs.repeatPass = "*Fill field"
        }

        if(repeatPass !== password && repeatPass.length){
            errs.repeatPass = "*Password mismatch"
        }

        setErrors({
            ...errs
        })

        if(!errs.username.length && !errs.password.length && !errs.repeatPass.length){
            register({
                username,
                password
            })
        }
    }

    return (
    <>
    <div className="auth-modal__form">
            <div className="auth-modal__input">
                    <label htmlFor="name" className="auth-modal__label">Username</label>
                    <input className="input" id="name" value={userData.username}
                    onChange={(e)=>setData({
                        ...userData, username: e.target.value
                    })}
                    
                    />
                    <span className="auth-modal__error">{errors.username}</span>
                </div>
                <div className="auth-modal__input">
                    <label htmlFor="password" className="auth-modal__label">Password</label>
                    <div className="auth-modal__pass">
                        <input className="input" id="password" type={!passState?"password": "text"} value={userData.password}
                        onChange={(e)=>setData({
                            ...userData, password: e.target.value
                        })}/>
                        <Eye onClick={()=>setPassState(!passState)}/>
                    </div>
                     <span className="auth-modal__error">{errors.password}</span>
                </div>
                <div className="auth-modal__input">
                    <label htmlFor="reppassword" className="auth-modal__label">Re-enter password</label>
                    <div className="auth-modal__pass">
                        <input className="input" id="reppassword" type={!repPassState?"password": "text"} value={userData.repeatPass}
                        onChange={(e)=>setData({
                            ...userData, repeatPass: e.target.value
                        })}/>
                        <Eye onClick={()=>setRepPassState(!repPassState)}/>
                    </div>
                     <span className="auth-modal__error">{errors.repeatPass}</span>
                </div>
                <Button classname="button--log button--w140" click={userReg} content="Create account" disabled={false}/>
            </div>
    </>)
})

export default Register