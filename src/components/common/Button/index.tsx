import classNames from "classnames";
import "./button.scss"

const Button = ({classname, content, click, disabled}:{classname: string, content: any, click: any, disabled: boolean|undefined})=>{
    return <button 
    className={`button ${classname}`}
    disabled={disabled}
    onClick={click}>{content}</button>
}

export default Button;