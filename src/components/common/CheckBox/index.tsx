import "./checkbox.scss"
import classNames from "classnames"
const CheckBox = (
    {isSwitch, func, isChecked, labelClass,labelText}:{
        isSwitch: boolean, 
        func: (value: boolean)=>void,
        isChecked: boolean,
        labelClass: string,
        labelText: string
    })=>{
    
        return  <label className="label">
            <input type="checkbox" checked={isChecked}
        onChange={()=>func(!isChecked)}
        className={classNames("checkbox", isSwitch && "checkbox--switch")}/>
            <span className={"label-text "+ labelClass}>{labelText}</span>
        </label>
}

export default CheckBox