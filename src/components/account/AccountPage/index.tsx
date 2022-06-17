import Button from "../../common/Button"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Main from "../../common/Main"
import AccountTabs from "../AccountTabs"
import {ReactComponent as LogOut} from "../../../img/icons/fe_logout.svg";
import { logOut } from "../../../stores/UserModel"
import "./accountPage.scss";
import AccountContent from "../AccountProfile"
import AccountAside from "../AccountAside"
import { useLocation } from "react-router"
import AccountBetsHistory from "../AccountBetsHistory"
import { useNavigate } from "react-router-dom"

const AccountPage = ()=>{
const {pathname} = useLocation();
const history = useNavigate();
    return (
        <>
        <Header/>
        <Main>
            <section className="account-page">
                <div className="account-page__top">
                    <AccountTabs role="user"/>
                    <Button disabled={false} classname="button--logout" content={<><LogOut/> <span className="btn-text">Logout</span></>} click={()=>{
                        history("/")
                        logOut()

                    }}/>
                </div>
                {
                    pathname.split("/").pop()==="profile"
                    ? <div className="account-page__main-profile">
                        <AccountContent/>
                        <AccountAside/>
                    </div>
                    :<div className="account-page__main-bets">
                        <AccountBetsHistory/>
                    </div>
                }
            </section>
        </Main>
        <Footer/>
        </>
    )
}

export default AccountPage;
