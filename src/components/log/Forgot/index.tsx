import { observer } from "mobx-react";
import AuthModel, { setForgotState, setState } from "../../../stores/AuthModel";
import "./forgot.scss";
import {ReactComponent as Close} from "../../../img/icons/ci_close-big.svg"; 
import {ReactComponent as Back} from "../../../img/icons/bx_bx-arrow-back.svg"; 
import Button from "../../common/Button";
import { useEffect, useState } from "react";
import { emailValidate } from "../../hooks/main";
import { newPass } from "../../../stores/UserModel";

const Forgot  = observer(()=>{
    const [email, setEmail] = useState({
        text: "",
        error: ""
    })

    const getPass = ()=>{
        let err = "";
        if(!email.text.length){
            err = "*Fill field";
        }

        if(!emailValidate(email.text) && email.text.length){
            err = "*Invalid email";
        }

        if(!err.length){
           newPass(email.text)
           setEmail({ error: err, text: ""});
        }
        setEmail({...email, error: err});
    }


    return (<div className="auth-modal" onClick={()=>setForgotState()}>
                <div className="auth-modal__content forgot" onClick={e=>e.stopPropagation()}>
                    <div className="forgot__top">
                        <Button classname="button--close" click={()=>{
                            setForgotState()
                            setState()
                        }} content={<Back className="svg-back"/>} disabled={false}/>
                        <h1 className="forgot__title">Forgot password?</h1>
                        <Button classname="button--close" click={()=>setForgotState()} content={<Close className="svg-close"/>} disabled={false}/>
                    </div>
                    <div className="auth-modal__form">
                        <div className="auth-modal__input">
                            <label htmlFor="name" className="auth-modal__label">E-mail</label>
                            <input className="input" id="name" value={email.text}
                            type="email"
                            onChange={(e)=>setEmail({
                                ...email, text: e.target.value
                            })}
                            
                            />
                            <span className="auth-modal__error">{email.error}</span>
                        </div>
                        <Button classname="button--log button--w180" click={getPass} content="Send new password" disabled={false}/>
                    </div>
                </div>

            </div>)
})

export default Forgot