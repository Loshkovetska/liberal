import "./footer.scss";

import img from "../../../img/Group28.png";
import img1 from "../../../img/Group29.png";
import img2 from "../../../img/Group30.png";
import Social from "../Social";
import { Link } from "react-router-dom";

const Footer = ()=>{

    return <footer className="footer">
        <div className="footer__row">
            <div className="footer__social">
                <Social/>
            </div>
            <div className="footer__info">
                <div className="footer__info-item">
                   <img src={img} alt="" className="footer__info-img"/> 
                </div>
                <div className="footer__info-item">
                <img src={img1} alt="" className="footer__info-img"/>
                </div>
                <div className="footer__info-item">
                   <img src={img2} alt="" className="footer__info-img"/> 
                </div>
            </div>
        </div>
        <div className="footer__row">
            <p className="footer__text">©  Liberalplay. 2021</p>
            <Link to="/policy/privacy" className="footer__link footer__link--policy">Privacy Policy</Link>
        </div>
    </footer>
}

export default Footer;