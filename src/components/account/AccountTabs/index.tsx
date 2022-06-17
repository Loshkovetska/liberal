import classNames from "classnames";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./accountTabs.scss";

const AccountTabs = ({role}: {role: string})=>{
    const {pathname} = useLocation();
    const [classname, setClass] = useState(
        (pathname.split("/").pop()==="profile"||pathname.split("/").pop()==="users" 
        ||pathname.split("/").pop()==="log")? "account-tabs--active-tab0": "account-tabs--active-tab1"
    );
    const tabs = [
       {
           title:"My account",
           link:"/account/profile"
       },
       {
            title: "Bet history",
            link:"/account/bet-history"
        }
    ]

    const adminTabs = [
        {
            title:"Users List",
            link:"/users"
        },
        {
             title: "Bets",
             link:"/bets"
         }
     ]

    const getTabs = ()=>{
        if(role==="user"){
            return tabs;
        }
        else return adminTabs
    }

    useEffect(()=>{
        setClass((
            pathname.split("/").pop()==="profile" ||
            pathname.split("/").pop()==="users" ||
            pathname.split("/").pop()==="log")? 
        "account-tabs--active-tab0": "account-tabs--active-tab1")
    },[pathname])

    return (
        <div className={classNames("account-tabs", classname)}>
           {
               getTabs().map((tab, ind)=>(
                <Link 
                to={tab.link}
                className="account-tabs__item" 
                key={ind} 
                onClick={()=>setClass(`account-tabs--active-tab${ind}`)}>
                    {tab.title}
                </Link>
               ))
           }
        </div>
    )
}

export default AccountTabs