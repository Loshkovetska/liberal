import Button from "../../common/Button"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Main from "../../common/Main"
import AccountTabs from "../../account/AccountTabs"
import {ReactComponent as LogOut} from "../../../img/icons/fe_logout.svg";
import { logOut } from "../../../stores/UserModel"
import "./adminPage.scss";
import { useLocation } from "react-router"
import { useNavigate } from "react-router-dom"
import UsersList from "../UsersList"
import Bets from "../Bets"

const AdminPage = ()=>{
    const {pathname} = useLocation();
    const history = useNavigate();
        return (
            <>
            <Header/>
            <Main>
                <section className="admin-page">
                    <div className="admin-page__top">
                        <AccountTabs role="admin"/>
                        <Button disabled={false} classname="button--logout" content={<><LogOut/> <span className="btn-text">Logout</span></>} click={()=>{
                            history("/")
                            logOut()
    
                        }}/>
                    </div>
                    {
                        pathname.split("/").pop()==="users"
                        ? <UsersList/>
                        :<Bets/>
                    }
                </section>
            </Main>
            <Footer/>
            </>
        )
}

export default AdminPage