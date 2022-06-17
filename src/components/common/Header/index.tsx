import { login } from "../../../stores/UserModel";
import Button from "../Button";
import Logo from "../Logo";
import "./header.scss";
import UserModel from "../../../stores/UserModel";
import { observer } from "mobx-react";
import {ReactComponent as Arrow}  from "../../../img/icons/arrow-down.svg";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Menu from "../Menu"; 
import { useLocation, useNavigate } from "react-router";
import {ReactComponent as UserSvg} from "../../../img/icons/User.svg";
import { Link } from "react-router-dom";
import { setState } from "../../../stores/AuthModel";


const Header = observer(()=>{
    const {pathname} = useLocation();
    return(
        <header className="header">
            <div className="header__left">
              {(!pathname.includes("account") && !pathname.includes("users")
              && !pathname.includes("bets") && !pathname.includes("404") && !pathname.includes("policy"))&& <Menu/>}
                <Logo/>
            </div>
            {
                !UserModel.user
                ?<Button disabled={false} classname="button--log" content="Login"
                click={()=>setState()}/>
                :<UserHeader/>
            }
            
        </header>
    )
})


const UserHeader = ()=>{
    const {user} = UserModel;
    const [show, setShow] = useState(false);

    const userMenuItems = [
        {
            title: "Profile",
            link: "/account/profile"
        },
        {
            title: "Bets history",
            link: "/account/bet-history"
        }
    ]

    const adminMenuItems = [
        {
            title: "Users list",
            link: "/users"
        },
        {
            title: "Bets",
            link: "/bets"
        }
    ]

    useEffect(() => {
        const checkIfClickedOutside = (e:MouseEvent) => {
          if (show && document.querySelector(".user-menu") && 
          !((document.querySelector(".user-menu")as Element).contains(e.target as Node))
          && !((document.querySelector(".header__user-info-top")as Element).contains(e.target as Node))) {
            setShow(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [show])

      const getList = ()=>{
          if(user?.role==="admin"){
              return adminMenuItems;
          }
          else return userMenuItems;
      }
    return <div className="header__user">
        {
            user?.role==="user" && <div className="header__user-avatar">
                {
                    user?.avatar? 
                    <img src={user?.avatar} alt="" className="image"/>
                    :<UserSvg/>
                }
            </div>
        }
        <div className="header__user-info">
            <div className="header__user-info-top" onClick={()=>setShow(!show)}> 
             <span className="header__user-name">{user?.role==="user"? `${user?.name} ${user?.surname}`: `${user?.userName}`}</span>
             <Arrow className={classNames(show && "arrow-rotate")}/>
            </div>
           { show && <div className="header__user-menu user-menu">
                {
                    getList().map((it, idx)=>(
                        <Link 
                        to={it.link}
                        className="user-menu__item" key={idx} onClick={()=>setShow(false)}>{it.title}</Link>
                    ))
                }
               
               </div>}
        </div>
    </div>
}

export default Header;
