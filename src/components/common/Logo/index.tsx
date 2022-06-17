import "./logo.scss"
import logo from "../../../img/logo.png";
import { Link } from "react-router-dom";

const Logo  = ()=>{
    return (
       <Link className="logo" to="/">
           <img src={logo} alt="" className="logo-img"/>
       </Link>
    )
}

export default Logo;