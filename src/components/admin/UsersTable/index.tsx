import { observer } from "mobx-react"
import { useState , useEffect} from "react";
import UserModel, { deleteUser } from "../../../stores/UserModel"
import classNames from "classnames";
import {ReactComponent as Vector}  from "../../../img/icons/Vector.svg";
import {ReactComponent as Trash}  from "../../../img/icons/dashicons_trash.svg";
import {ReactComponent as Edit}  from "../../../img/icons/ci_edit.svg";
import { User } from "../../../types";
import { sortByName, sortByNumber, tableEngDate } from "../../hooks/main";
import UserModal from "../UserModal";

const UsersTable = observer(()=>{
    const {users} = UserModel;
    const [data, setData] = useState<any>(JSON.parse(JSON.stringify(users)))
    const theads = [
        {
            title: "User",
            action: (state: boolean)=>{
                if(data){
                    const res = data.sort((a:User,b:User)=>sortByName(a.name!, b.name!))
                    if(!state){
                        res.reverse();
                    }

                    setData([...res])
                }
            }
        },
        {
            title: "Login",
            action: (state: boolean)=>{
                if(data){
                    const res = data.sort((a:User,b:User)=>sortByName(a.userName!, b.userName!))
                    if(!state){
                        res.reverse();
                    }

                    setData([...res])
                }
            }
        },
        {
            title: "E-mail",
            action: (state: boolean)=>{
                if(data){
                    const res = data.sort((a:User,b:User)=>sortByName(a.email!, b.email!))
                    if(!state){
                        res.reverse();
                    }

                    setData([...res])
                }
            }
        },
        {
            title: "Birthday date",
            action: (state: boolean)=>{
                if(data){
                    const res:any = data.sort((a:User,b:User)=>sortByNumber(new Date(a.birthDate!).getTime(), new Date(b.birthDate!).getTime(), state));
                    setData([...res])
                }
            }
        },
        {
            title: "User balance",
            action: (state: boolean)=>{
                if(data){
                    const res:any = data.sort((a:User,b:User)=>sortByNumber(a.totalBalance!, b.totalBalance!, state));
                    setData([...res])
                }
            }
        },
    ]

    useEffect(()=>{
        setData(users)
    }, [users])

    return <div className="users-table">
            <div className="users-table__thead">
                {
                    theads.map((th, ind)=>(
                        <UserTh key={ind} title={th.title} action={(val:boolean)=>th.action(val)}/>
                    ))
                }
                <div className="users-table__th">
                    
                </div>
            </div>
            {data || data && !data.length ?( <>
           {
               data.map((u:User, ind:number)=>(
                    <UserRow u={u} key={ind}/>
               ))
           }
           </>):<div className="users-table__row">No data</div>}
    </div>
})

export default UsersTable

const UserTh = ({ action, title}: {action: (val:boolean)=>void, title: string})=>{
    const [sortState, setState]=  useState(false);

    return (
            <div className="users-table__th" >
                             {title}
                            <span className="users-table__th-sort" onClick={()=>{
                                setState(!sortState)
                                action(sortState)
                            }}>
                                <Vector className={classNames("users-table__vector", 
                                !sortState && "users-table__vector--reverse")}/>
                                <Vector className={classNames("users-table__vector", 
                                sortState && "users-table__vector--reverse")}/>
                            </span>
            </div>
    )
}

const UserRow = ({u}:{u: User})=>{
    const [show, setShow] = useState(false);

    useEffect(()=>{
        if(show){
            (document.querySelector("#root")as Element).classList.add("menu-open")
        }
        else  (document.querySelector("#root")as Element).classList.remove("menu-open")
       
    },[show])

    return ( <div className="users-table__row">
    <div className="users-table__td users-table__td--main">
        {`${u.name} ${u.surname}`}
    </div>
    <div className="users-table__td">{u.userName}</div>
    <div className="users-table__td">{u.email}</div>
    <div className="users-table__td">{tableEngDate(u.birthDate!)}</div>
    <div className="users-table__td">£{u.totalBalance?.toFixed(2)}</div>
    <div className="users-table__td">
        <Edit className="svg-edit" onClick={()=>setShow(true)}/>
        <Trash className="svg-del" onClick={()=>deleteUser(u.id)}/>
    </div>

    {show && <UserModal setShow={setShow} mode="edit" dt={u}/>}
</div>)
}