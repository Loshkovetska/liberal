import { observer } from "mobx-react";
import Button from "../Button";
import { useEffect } from "react";
import MenuModel,{setState} from "../../../stores/MenuModel";
import {ReactComponent as MenuSvg}  from "../../../img/icons/List.svg";
import {ReactComponent as Close}  from "../../../img/icons/Plus.svg";

const Menu = observer(()=>{
    const {isOpen}  = MenuModel;

    useEffect(()=>{
        if(isOpen){
            (document.querySelector("#root")as Element).classList.add("menu-open")
        }
        else  (document.querySelector("#root")as Element).classList.remove("menu-open")
       
    },[isOpen])

    useEffect(() => {
        const checkIfClickedOutside = (e:MouseEvent) => {
          if (isOpen && document.querySelector(".main-aside__content") && 
          !((document.querySelector(".main-aside__content")as Element).contains(e.target as Node))) {
            setState()
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isOpen])


    return <Button disabled={false} content={!isOpen? <MenuSvg/>:<Close className="svg-close"/>} classname="header__menu" click={()=>setState()}/>

})

export default Menu;