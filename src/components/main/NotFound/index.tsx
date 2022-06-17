import { useEffect } from "react";
import { useNavigate } from "react-router"
import Button from "../../common/Button"
import Header from "../../common/Header"
import Main from "../../common/Main"
import "./not-found.scss";

const NotFound = ()=>{
    const history = useNavigate();
    return <>
    <Header/>
    <Main>
        <div className="not-found">
            <div className="not-found__content">
                <h1 className="not-found__error">404</h1>
                <span className="not-found__sub-title">Page not found</span>
                <p className="not-found__text">The page you are looking for does not seem to exist</p>
                <Button classname="button--log button--w180" click={()=>history("/")} content={"Go to the mainpage"} disabled={false}/>
            </div>
        </div>
    </Main>
    </>
}

export default NotFound