import "./eventTable.scss";
import { observer } from "mobx-react";
import { Match } from "../../../types";
import classNames from "classnames";
import { EventRate } from "../EventContent";
import { Fragment } from "react";
const EventTable  = observer(({match, suspended,get, rate}:{match: Match, suspended: boolean, get: (value: EventRate)=>void, rate: any})=>{

    return (
        <div className="event-content__table event-content-table">
        <div className="event-content-table__thead">
            <div className="event-content-table__main">
                <span className="event-content-table__th">
                    Match
                </span>
            </div>
            <div className="event-content-table__rates">
                <span className="event-content-table__th">
                    {"Back {L}"}
                </span>
                <span className="event-content-table__th">
                    {"Lack {K}"}
                </span>
            </div>
        </div>
        <div className="event-content-table__body">
            {
                match.players.map((row, index)=>(
                    <div className="event-content-table__row" key={index}>
                        <div className="event-content-table__main">
                            <span className="event-content-table__row-title">{row.title}</span>
                            <span className="event-content-table__row-score">{row.score}</span>
                        </div>
                        <div className={classNames("event-content-table__rates", suspended && "event-content-table__rates--suspend")}>
                        {
                            row.rates.map((rat, ind)=>(
                                <Fragment key={ind}>
                                    {
                                        !suspended? <div className={classNames("event-content-table__rate", 
                                        (rate?.rat.id===rat.id && row.id===rate.idPlayer)  && "event-content-table__rate--active")} key={ind} onClick={
                                            ()=>get({
                                                idMatch: match.id,
                                                idPlayer: row.id,
                                                rat: rat
                                            })
                                        }>
                                            <span className="event-content-table__rate-size">{rat.count}</span>
                                            <span className="event-content-table__rate-amount">£{rat.amount}</span>
                                        </div>:
                                        <div className="event-content-table__rate">
                                            <span className="event-content-table__rate-size">{rat.count}</span>
                                            <span className="event-content-table__rate-amount">£{rat.amount}</span>
                                        </div>
                                    }
                                </Fragment>
                            ))
                        }
                      { suspended && <span className="event-content-table__alert">Suspended</span>}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    )
})

export default EventTable