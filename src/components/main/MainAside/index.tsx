import { observer } from "mobx-react";
import Search from "../../common/Search";
import "./main-aside.scss";
import SportEventModel,{getSportEvents} from "../../../stores/SportEventModel";
import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useLocation } from "react-router";
import MatchModel, { getMatches } from "../../../stores/MatchModel";
import MenuModel from "../../../stores/MenuModel";

const MainAside = observer(() => {
    const {sportEvents} = SportEventModel
    const {matches} = MatchModel
    const {pathname} = useLocation();
    useEffect(()=>{
        getMatches(null);
        getSportEvents("Cricket");
    },[])

    const eventTitle = matches?.find(m=>m.id.toString()===pathname.split("/").pop())?.section;

    const getCount = (title: string)=>{
        let count = 0;
        if(matches){
           count =  matches.filter(m=>m.section===title).length;
        }
        return count;
    }


    return(
            <aside className="main-aside">
                <Search/>
                <div className={classNames("main-aside__content", MenuModel.isOpen && "main-aside__content--open")}>
                               <h2 className="main-aside__title">{sportEvents?.title}</h2>
                               <div className="main-aside__list">
                                   {
                                       sportEvents?.list.map((item, index)=>(
                                           
                                            <div className={classNames("main-aside__item",
                                            eventTitle && eventTitle===item.title && "main-aside__item--active")} key={index}>
                                                <span className="main-aside__item-title">{item.title}</span>
                                                <span className="main-aside__item-count">{getCount(item.title)}</span>
                                            </div>
                                       ))
                                   }
                               </div>
                </div>
            </aside>
    )
})

export default MainAside;
