import {ReactComponent as Insta} from "../../../img/icons/akar-icons_instagram-fill.svg";
import {ReactComponent as Telegram} from "../../../img/icons/akar-icons_telegram-fill.svg";
import {ReactComponent as Twitter} from "../../../img/icons/akar-icons_twitter-fill.svg";
import {ReactComponent as WhatsApp} from "../../../img/icons/akar-icons_whatsapp-fill.svg";
import {ReactComponent as Youtube} from "../../../img/icons/akar-icons_youtube-fill.svg";
import {ReactComponent as Fb} from "../../../img/icons/brandico_facebook-rect.svg";
import {ReactComponent as Gmail} from "../../../img/icons/simple-icons_gmail.svg";

const Social  = ()=>{

    const social = [
        {
            icon: <Insta/>,
            href: "#"
        },
        {
            icon: <Fb/>,
            href: "#"
        },{
            icon: <Gmail/>,
            href: "#"
        },{
            icon: <Twitter/>,
            href: "#"
        },{
            icon: <WhatsApp/>,
            href: "#"
        },{
            icon: <Youtube/>,
            href: "#"
        },{
            icon: <Telegram/>,
            href: "#"
        }
    ]
    return (
        <>
            {
                social.map((s, ind)=>(
                        <a href={s.href} className="footer__link" key={ind}>{s.icon}</a>
                ))
            }
        </>
    )
}

export default Social