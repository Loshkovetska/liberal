import MainAside from "../MainAside";
import "./main-page.scss";
import img from "../../../img/back-banner.png";
import MainAsideGames from "../MainAsideGames";
import MainTab from "../MainTab";
import Header from "../../common/Header";
import Main from "../../common/Main";
import Footer from "../../common/Footer";


const MainPage = ()=>{
    return (
        <>
        <Header/>
        <Main>
        <section className="main-page">
            <MainAside/>
            <div className="main-page__content">
                <div className="main-page__banner">
                    <img src={img} alt="" className="main-page__banner-img"/>
                    <h1 className="main-page__title">Your best sport banner ever</h1>
                </div>
                <MainTab/>
            </div>
           <MainAsideGames/>
        </section>
        </Main>
        <Footer/>
        </>
    )
}

export default MainPage;
