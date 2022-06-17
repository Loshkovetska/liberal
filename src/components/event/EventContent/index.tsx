import "./eventContent.scss";
import {  useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";
import { useLocation } from "react-router";
import {ReactComponent as Close} from "../../../img/icons/ci_close-big.svg"; 
import { getEngDate } from "../../hooks/main";
import EventBet from "../EventBet";
import MatchModel, { getMatchByParams } from "../../../stores/MatchModel";
import { Rate } from "../../../types";
import Button from "../../common/Button";
import EventAside from "../EventAside";
import EventTable from "../EventTable";
import DateTimer from "../DateTimer";

export type EventRate = {
    rat: Rate|undefined, 
    idMatch: number|undefined,
    idPlayer: number|undefined
}


const EventContent = observer(()=>{
    const {match} = MatchModel;
    const {pathname} = useLocation();
    const [show, setShow] = useState(true)
    const [rate, setRate] = useState<EventRate|null>();

    useEffect(()=>{
        getMatchByParams({
            id: pathname.split("/").pop()
        })
    },[])

    if(!match){
        return <div className="matches-content__error">Something goes wrong</div>
    }

    return (<div className="event-content">
        <div className="event-content__top">
            <span className="event-content__title">{match.title}</span>
            <div className="event-content__func">
                <span className="event-content__func-item">{getEngDate(match.dateTime)}</span>
                <DateTimer date={match.dateTime}/>
            </div>
        </div>
        <div className="event-content__main">
            <div className="event-content__col">
                <div className="event-content__row">
                    <div className="event-content__row-top">
                        <span className="event-content__sub-title">Match odds</span>
                        <div className="event-content__row-info event-content-info">
                            <span className="event-content-info__col">
                                <span className="event-content-info__col-title">Stake limit:</span>
                                {`${(match.strokeLimit.min).toLocaleString()} - ${(match.strokeLimit.max).toLocaleString()}`}
                            </span>
                            <span className="event-content-info__col">
                                <span className="event-content-info__col-title">Max profit:</span>
                                {(match.maxProfit).toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <EventTable match={match} suspended={false} get={(value:EventRate)=>setRate({
                                    ...value
                                })} rate={rate}/>
                    <EventBet rate={rate} cancel={()=>setRate(null)} match={match}/>
                </div>
              {  show && <div className="event-content__row">
                <div className="event-content__row-top">
                    <span className="event-content__sub-title">BOOKMAKER 0 SEC NO COMM</span>
                    <Button classname="button--close" click={()=>setShow(false)} content={<Close/>} disabled={false}/>
                    </div>
                    <EventTable match={match} suspended rate={rate} get={(value:EventRate)=>setRate({...value})}/>
                </div>}
            </div>
            <EventAside match={match}/>
        </div>
    </div>)
})

export default EventContent;
