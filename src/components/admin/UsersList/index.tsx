import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import UserModel, { getUsers } from "../../../stores/UserModel";
import Button from "../../common/Button";
import UserModal from "../UserModal";
import UsersTable from "../UsersTable";
import "./usersList.scss";

const UsersList = observer(()=>{
    const [show, setShow] = useState(false);
    const {users}:any = UserModel;

    useEffect(()=>{
        getUsers()
     },[])


    useEffect(()=>{
        if(show){
            (document.querySelector("#root")as Element).classList.add("menu-open")
        }
        else  (document.querySelector("#root")as Element).classList.remove("menu-open")
       
    },[show])

    if(!users){
        return <></>
    }

    return <div className="users">
        <div className="users__top">
            <div className="users__top-col">
                <span className="users__title">Users</span>
                <span className="users__count">Total: {users.length}</span>
            </div>
            <Button disabled={false} classname="button--orange button--w112" content={"Add user"} click={()=>setShow(true)}/>
        </div>
        <UsersTable/>
        {show && <UserModal setShow={setShow} mode="add"/>}
    </div>
})

export default UsersList;