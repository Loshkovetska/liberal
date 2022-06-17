import classNames from "classnames";
import { useLocation } from "react-router";
import "./main.scss"


const Main = (props:any)=>{
    const {pathname} = useLocation();
    return(<main className={classNames("main", pathname.includes("404") && "main--not-found")}>
        {props.children}
    </main>)
}

export default Main;