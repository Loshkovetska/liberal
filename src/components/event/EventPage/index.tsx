import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Main from "../../common/Main";
import MainAside from "../../main/MainAside";
import EventContent from "../EventContent";
import "./eventPage.scss";


const EventPage = ()=>{
    return (
        <>
        <Header/>
       <Main>
       <section className="event-page">
            <MainAside/>
            <EventContent/>
        </section>
       </Main>
       <Footer/>
        </>
    )
}

export default EventPage