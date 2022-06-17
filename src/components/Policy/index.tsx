import classNames from "classnames";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Main from "../common/Main";
import "./policy.scss";

const Policy = ()=>{
const {pathname} = useLocation();
const text = [
    `SATSport247 collects information from our Internet clients at several different points on our Web site. 
    We use this information to improve and maintain our Web site, 
    and to provide our clients with the highest level of service available.`,
    `Your privacy is of the utmost importance to SATSport247 . We feel that you have a right to know what information we collect, and how we use it. This statement discloses: `,
    `What information we gather from our Web site SATSport247 collects two types of information when you visit our Web site: `,
    `Tracking, or aggregate, data that does not identify you personally, and is automatically collected from every visitor; this includes:`,
    `The time and date of your visit The specific pages which you visit `,
    `The make and version of the Web browser you are using `,
    `The brand and version of your computer's operating system`, 
    `The "Referrer" (the Web site and page from which you clicked to get to the SATSport247 site)`,
    `The IP address of the computer you are using Information that identifies you personally, and is collected only if you register as a client of SATSport247 ;this includes:`,
    `Your name `,
    `Your age `,
    `Your postal address`,
    `Your email address `,
    `How we use the information`,
    `We use the tracking data to gather general demographic information, measure usage patterns, and gauge user trends. This allows us to better understand our visitors needs and tailor our content accordingly. `,
    `SATSport247 uses IP addresses and page requests to track user movements and analyze user preferences. `,
    `This gives us a broad view of where our visitors come from and what they are looking for on our Web site. `,
    `IP addresses are not linked to personally identifiable information and are kept separate from individual clients' records. `,
    `The information about your browser and operating system is used to verify that SATSport247 's Web server software is compatible with your computer's configuration. `,
    `When a visitor registers as a client of SATSport247 : `,
    `We require a postal address so that we can send payments by courier or standard mail. When making payments by bank transfer or credit card charge-back, we provide to the bank or credit card company the information necessary to send payment.`,
    `We require an email address to send our clients their unique username and password. `,
    `We also use email to notify our clients of changes in service and, with the client's approval, to send promotional information. `,
    `We request the age of our clients in order to ensure that they are of age to legally place bets in our jurisdiction. `,
    `Who else has access to this information SATSport247 treats all of our clients' personal information as confidential, and will not disclose it or use it except as explained in this statement or as required by law. `,
    `SATSport247 is the sole owner of the personal information we collect from our clients; we do not share it with any third party. We will not give, trade or sell this information to any organization or business, or to any individual not employed by SATSport247 . If a client provides personal information during an interaction with our customer service areas (for example, an email address or telephone number), we will use it only for the purpose of customer service. We will not sell a client's phone number to telemarketers or anyone else. What kind of security measures do we use to protect your personal information? The SATSport247 Web site takes every precaution to protect our client's information. `,
    `When clients submit sensitive information via the site, their information is protected both online and off-line. When our registration form asks clients to enter sensitive information (such as credit card numbers), such information is encoded using SSL, the most powerful system available for Internet security and encryption. For information about SSL, visit this Web site: ------------------------------------------------ `,
    `In addition to using SSL encryption to protect sensitive online transactions, we also do everything possible to protect our client's information off-line. All of our clients' personal information, not just the sensitive information mentioned above, is restricted in our offices. Only those employees who need it to perform a specific job (for example, our customer service representatives) are granted access to personally identifiable information. Finally, all computers on which we store personally identifiable information are kept in a secure environment. SATSport247 uses the best available hardware and software technologies to block any unauthorized entry into our systems. What choices are available to you regarding the use and distribution of your information We provide certain options to allow our clients to customize their interface, including choice of language, betting format, and specific browser. How you can change or correct your information Clients of SATSport247 have access to the data maintained about them. This includes a complete listing of recent bets: each wager placed; the wager amount; the day and time it was placed, and the outcome of the wager. Old records are periodically destroyed. Clients may request that certain data be erased or amended. This may include changing personal details or settings; it does not include changing wagers. SATSport247 will comply with all appropriate requests within a reasonable time. A client may notify SATSport247 of a change in mailing address, or to terminate their account. The personal data associated with accounts that have been terminated are deactivated. Non-personal data may be converted into summary or aggregate statistics in which the personal identifiers are removed. How and why we use cookies Many Web users are concerned and possibly confused about the use of "cookies" on the Internet. A cookie is a small text file that is transferred from a web site to the hard drive of your computer. We use cookies to store a coded ID number, which identifies your browser to our server and allows us to track your activities while you visit SATSport247 's Web site. Since cookies are only text files, they cannot "run" on your computer and have no ability to search your computer for other information, or actively transmit data to anyone else. Since our cookie file is in a coded form, only SATSport247 's Web server can read the cookie that it places on your hard drive. A cookie can't read data off your hard disk or read cookie files created by other sites. SATSport247 's Web site uses cookies and URL tracking codes to measure the effectiveness of our advertising and our Web site, not to monitor the activities of individual customers. SATSport247 does not disclose to advertisers any information about individual customers. You can set your browser to automatically refuse all cookies or else to notify you any time a cookie is sent, so you can accept or reject it as you prefer. If you reject the cookie from SATSport247 's Web site you can still use the site, but you may be limited in accessing or using certain areas. For more information about cookies, go to these web sites: `
]

    return <>
        <Header/>
        <Main>
            <div className="policy">
                <PolicyAside/>
                <div className="policy__content">
                    {
                        pathname.includes("privacy")? <PrivacyPolicy text={text}/>:
                        pathname.includes("rules")?<RulesPolicy text={text}/>
                        :<TermsPolicy text={text}/>
                    }
                </div>
            </div>
        </Main>
    </>
}

export default Policy;

const PolicyAside = ()=>{
    const {pathname} = useLocation();

    const menu = [
        {
            title:"Privacy Policy",
            to:"/policy/privacy"
        },
        {
            title:"Rules & Regulations",
            to:"/policy/rules"
        },
        {
            title:"Terms & Conditions",
            to:"/policy/terms"
        }
    ]
    return <div className="policy-aside">
        {
                menu.map((m, ind)=>(
                    <Link to={m.to} key={ind} className={classNames("policy-aside__item",
                    pathname===m.to && "policy-aside__item--active" )}>{m.title}</Link>
                ))
        }
    </div>
}

const PrivacyPolicy = ({text}: {text: Array<string>})=>{
    return <>
            <h1 className="policy__title">Privacy Policy</h1>
            {
                text.map((t, ind)=>(
                    <p className="policy__text" key={ind}>{t}</p>
                ))
            }
            <p className="policy__text"> <a href="http://wp.netscape.com/legal_notices/cookies.html" className="policy__link">http://wp.netscape.com/legal_notices/cookies.html</a>
            <a href="http://www.microsoft.com/info/cookies.mspx" className="policy__link">http://www.microsoft.com/info/cookies.mspx</a>
        </p>
        <p className="policy__text">Our use of links to other sites The SATSport247 Web site may contain links to other sites; we are not responsible for the practices of such other sites. This privacy statement applies solely to information collected by SATSport247 's Web site. We encourage our clients and visitors to be alert when they leave our site and to read the privacy statement of any Web site that collects personally identifiable information. Storage of data The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area ("EEA"). It may also be processed by staff operating outside the EEA, who work for us. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy. Notification of Changes If SATSport247 decides to change any parts of this privacy policy, we will post those changes on our Web site at least four weeks in advance of their taking effect. Our clients will always be made aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. Should any of our clients not agree to the changes, they will always have the option to close their account and to tell SATSport247 to delete their personal information.</p>
        </>
}

const RulesPolicy = ({text}: {text: Array<string>})=>{
    return <>
        <h1 className="policy__title">{"Rules & Regulations"}</h1>
        {
                text.map((t, ind)=>(
                    <p className="policy__text" key={ind}>{t}</p>
                ))
            }
            <p className="policy__text"> <a href="http://wp.netscape.com/legal_notices/cookies.html" className="policy__link">http://wp.netscape.com/legal_notices/cookies.html</a>
            <a href="http://www.microsoft.com/info/cookies.mspx" className="policy__link">http://www.microsoft.com/info/cookies.mspx</a>
        </p>
        <p className="policy__text">Our use of links to other sites The SATSport247 Web site may contain links to other sites; we are not responsible for the practices of such other sites. This privacy statement applies solely to information collected by SATSport247 's Web site. We encourage our clients and visitors to be alert when they leave our site and to read the privacy statement of any Web site that collects personally identifiable information. Storage of data The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area ("EEA"). It may also be processed by staff operating outside the EEA, who work for us. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy. Notification of Changes If SATSport247 decides to change any parts of this privacy policy, we will post those changes on our Web site at least four weeks in advance of their taking effect. Our clients will always be made aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. Should any of our clients not agree to the changes, they will always have the option to close their account and to tell SATSport247 to delete their personal information.</p>
        </>
}

const TermsPolicy = ({text}: {text: Array<string>})=>{
    return <>
        <h1 className="policy__title">{"Terms & Conditions"}</h1>
        {
                text.map((t, ind)=>(
                    <p className="policy__text" key={ind}>{t}</p>
                ))
            }
            <p className="policy__text"> <a href="http://wp.netscape.com/legal_notices/cookies.html" className="policy__link">http://wp.netscape.com/legal_notices/cookies.html</a>
            <a href="http://www.microsoft.com/info/cookies.mspx" className="policy__link">http://www.microsoft.com/info/cookies.mspx</a>
        </p>
        <p className="policy__text">Our use of links to other sites The SATSport247 Web site may contain links to other sites; we are not responsible for the practices of such other sites. This privacy statement applies solely to information collected by SATSport247 's Web site. We encourage our clients and visitors to be alert when they leave our site and to read the privacy statement of any Web site that collects personally identifiable information. Storage of data The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area ("EEA"). It may also be processed by staff operating outside the EEA, who work for us. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy. Notification of Changes If SATSport247 decides to change any parts of this privacy policy, we will post those changes on our Web site at least four weeks in advance of their taking effect. Our clients will always be made aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. Should any of our clients not agree to the changes, they will always have the option to close their account and to tell SATSport247 to delete their personal information.</p>
        </>
}