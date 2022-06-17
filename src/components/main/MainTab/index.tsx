import classNames from "classnames";
import { useEffect, useState } from "react";
import MatchModel, { getMatches } from "../../../stores/MatchModel";
import "./mainTab.scss";
import { observer } from "mobx-react";
import { Match } from "../../../types";
import { getDate } from "../../hooks/main";
import { Link } from "react-router-dom";
const MainTab = observer(()=>{
    const list= [
        {
            title:"All matches"
        },
        {
            title:"In-play"
        },
        {
            title:"Today",
        },
        {
            title:"Tomorrow",
        }
    ]
    const [activeTab, setTab] = useState(list[0].title);


    return <div className="main-page-matches">
           <div className="main-page-matches__tabs">
               {
                   list.map((l, ind)=>(
                       <div className={classNames("main-page-matches__tab", l.title === activeTab && "main-page-matches__tab--active" )}
                            key={ind}
                            onClick={()=>setTab(l.title)}>
                           {l.title}
                       </div>
                   ))
               }
            </div>
            <MainTabContent content={activeTab}/>
    </div>
})


const MainTabContent = observer(({content}:{content: any})=>{
    const [data, setData] = useState<Match[]|null>(Array<Match>());
    const {matches} = MatchModel;

    const markets = [
        "L",
        "MO",
        "F",
        "BM",
        "M",
        "CM",
        "O"
    ]

    useEffect(()=>{
        getMatches(content)
    },[content])

    useEffect(()=>{
        if(matches && matches.length) setData(matches);
    },[matches])

    const getRate = (r:any, d: any)=>{
        let count = 0;
        d.markets.forEach((rate:any)=>{
            if(rate.title===r){
                count = rate.count;
                return;
            }
        })

        return count;
    }

    return (<div className="matches-content">
        <div className="matches-content__row">
            <div className="matches-content__row-info"></div>
            <div className="matches-content__row-ths">
                <span className="matches-content__row-th">1</span>
                <span className="matches-content__row-th">X</span>
                <span className="matches-content__row-th">2</span>
            </div>
        </div>
        {
            data?.length? data.map((d, ind)=>(
                <Link className="matches-content__row" key={ind} to={`/event/${d.id}`}>
                    <div className="matches-content__row-main">
                        <div className="matches-content__row-info">
                            <span className="matches-content__row-title">{d.title}</span>
                            <span className={classNames("matches-content__row-status", d.inPlay && "matches-content__row-status--inplay")}>
                                {d.inPlay? "in-Play": getDate(d.dateTime)}
                            </span>
                        </div>
                        <div className="matches-content__row-rates">
                            {
                                markets && markets.map((r, index)=>(
                                    <div className={classNames("matches-content__row-rate",
                                    getRate(r, d) && "matches-content__row-rate--active")} key={index}>
                                        {r}
                                        <span className="matches-content__row-rate-count">
                                        {getRate(r, d)}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="matches-content__row-ratios">
                            {
                                d.ratio.map((rat, ind)=>(
                                    <div className={classNames("matches-content__row-ratio", !d.inPlay && "matches-content__row-ratio--inplay")} key={ind}>
                                       {d.inPlay && <span className="matches-content__row-ratio-title">{
                                            !ind || ind===1? "1": ind===2 || ind===3? "X":"2"
                                        }</span>}
                                        {d.inPlay?
                                            rat:
                                           ( !d.inPlay && ind===2 || !d.inPlay && ind===3)? "...": "" }
                                    </div>
                                ))
                            }
                        </div>
                </Link>
            )):<div className="matches-content__error">No data</div>
            
        }
    </div>)
})

export default MainTab;