import "./accountBetsHistory.scss";
import {ReactComponent as Arrow}  from "../../../img/icons/arrow-down.svg";
import {ReactComponent as Vector}  from "../../../img/icons/Vector.svg";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { getDate, sortByName, sortByNumber, tableDate } from "../../hooks/main";
import { observer } from "mobx-react";

import UserModel from "../../../stores/UserModel";
import BetModel, { getBets } from "../../../stores/BetModel";
import Select from "../../common/Select/Select";
import { Bet } from "../../../types";

const AccountBetsHistory = observer(()=>{
    const [activeTime, setTime] = useState("all-time");
    const [activeDate, setDate] = useState([
        new Date().toDateString(),
        new Date(new Date().setDate(new Date().getDate() + 7)).toDateString(),
    ])
    const {bets}= BetModel;
    const [data, setData] = useState<any>(JSON.parse(JSON.stringify(bets)));

    const timeSort = [
        {
            title:"All time",
            value: "all-time",
        },
        {
            title:"Today",
            value: "today",
        },
        {
            title:"Week",
            value: "week",
        },
        {
            title:"Month",
            value: "month",
        },
        {
            title:"Year",
            value: "year",
        }
    ]

    const theads = [
        {
            title: "Bet for",
            action: (state: boolean)=>{
                if(data){
                    const res = data.sort((a:Bet,b:Bet)=>sortByName(a.player.title, b.player.title))
                    if(!state){
                        res.reverse();
                    }

                    setData([...res])
                }
            }
        },
        {
            title: "Event date",
            action: (state: boolean)=>{
                if(data){
                    const res = data.sort((a:Bet,b:Bet)=>sortByNumber(new Date(a.match.dateTime).getTime(), new Date(b.match.dateTime).getTime(), state))
                    setData([...res])
                }
            }
        },
        {
            title: "Staking plan",
            action: (state: boolean)=>{
                if(data){
                    const res = data.sort((a:Bet,b:Bet)=>sortByName(a.stakingPlan, b.stakingPlan))
                    if(!state){
                        res.reverse();
                    }

                    setData([...res])
                }
            }
        },
        {
            title: "Odds",
            action: (state: boolean)=>{
                if(data){
                    const res = data.sort((a:Bet,b:Bet)=>sortByNumber(a.odds.length===1? a.odds[0]:getAverage(a.odds), 
                    b.odds.length===1? b.odds[0]:getAverage(b.odds), state))
                    setData([...res])
                }
            }
        },
        {
            title: "Stake",
            action: (state: boolean)=>{
                if(data){
                    const res = data.sort((a:Bet,b:Bet)=>sortByNumber(a.stake, b.stake, state))
                    setData([...res])
                }
            }
        },
        {
            title: "Profit",
            action: (state: boolean)=>{
                if(data){
                    const res = data.sort((a:Bet,b:Bet)=>sortByNumber(a.profit, 
                    b.profit, state))
                    setData([...res])
                }
            }
        },
        {
            title: "Result",
            action: (state: boolean)=>{
                if(data){
                    const res = data.sort((a:Bet,b:Bet)=>sortByName(a.result, b.result))
                    if(!state){
                        res.reverse();
                    }

                    setData([...res])
                }
            }
        }
    ]

    useEffect(()=>{
        const response:any = {
            userId: UserModel.user!.id,
            time:activeTime
        };

        if(activeTime==="week"){
            response.date = {
                min: activeDate[0],
                max: activeDate[1]
            }
        }
        getBets({...response});
    },[activeTime,activeDate])

    useEffect(()=>{
        setData(bets)
    }, [bets])

    const getAverage = (arr: Array<number>)=>{
        let average = 0;
        arr.forEach(it=>average+=it)

        return average
    }

    const goBack = ()=>{
        const dat = new Date(activeDate[0]);
        const dt =  new Date(dat.setDate(dat.getDate() - 7));
        const newDate = [dat.toDateString(),activeDate[0]]
        setDate([...newDate])
    }

    const goNext = ()=>{
        const dat = new Date(activeDate[1]);
        const dt =  new Date(dat.setDate(dat.getDate() + 7));
        const newDate = [activeDate[1],dt.toDateString()]

        setDate([...newDate])
    }

    return <div className="account-bets">
        <div className="account-bets__top">
            <div className="account-bets__time-sort account-bets-time">
               {
                   timeSort.map((t, ind)=>(
                        <div className={classNames("account-bets-time__item", 
                            activeTime===t.value && "account-bets-time__item--active" )}
                            key={ind}
                            onClick={()=>setTime(t.value)}>
                                {t.title}
                        </div>
                   ))
               }

            <Select data={timeSort} change={(value)=>setTime(value)} defaultValue={timeSort[0].title}/>
            </div>
            <div className="account-bets__date-sort account-bets-date">
               <Arrow className="account-bets-date__arrow-left" onClick={goBack}/> 
               <span className="account-bets-date__value">{`${tableDate(activeDate[0])} - ${tableDate(activeDate[1])}`}</span>
               <Arrow className="account-bets-date__arrow-right" onClick={goNext}/>
            </div>
        </div>
        <div className="account-bets__table account-bets-table">
            <div className="account-bets-table__thead">
                {
                    theads.map((th, ind)=>(
                        <BetHistoryTh key={ind} title={th.title} action={(val:boolean)=>th.action(val)}
                        classname="account-bets-table"/>
                    ))
                }
            </div>
           {data || data && !data.length ?( <>
           {
               data.map((bt:Bet, ind:number)=>(
                <div className="account-bets-table__row" key={ind}>
                    <div className="account-bets-table__td account-bets-table__td--main">
                        <span className="account-bets-table__td-title">{bt.player.title}</span>
                        <span className="account-bets-table__td-val">{bt.match.title}</span>
                    </div>
                    <div className="account-bets-table__td">{getDate(bt.match.dateTime.toString())}</div>
                    <div className="account-bets-table__td">{bt.stakingPlan}</div>
                    <div className="account-bets-table__td">{bt.odds.length===1? bt.odds[0].toFixed(2): getAverage(bt.odds).toFixed(2)}</div>
                    <div className="account-bets-table__td">£{bt.stake.toFixed(2)}</div>
                    <div className="account-bets-table__td account-bets-table__td--profit">
                        <span className={classNames("account-bets-table__td-val", bt.result==="Won" && "account-bets-table__td-val--won" )}>
                        {bt.result==="Won"? `£${bt.profit.toFixed(2)}`: `- £${(bt.profit* -1).toFixed(2)}`}</span>
                    </div>
                    <div className="account-bets-table__td">{bt.result}</div>
                </div>
               ))
           }
           </>):<div className="account-bets-table__row">No data</div>}
        </div>
    </div>
})

export default AccountBetsHistory;

export const BetHistoryTh = ({ action, title, classname}: {
    action: (val:boolean)=>void, 
    title: string,
    classname: string
})=>{
    const [sortState, setState]=  useState(false);

    return (
            <div className={`${classname}__th`} >
                             {title}
                            <span className={`${classname}__th-sort`} onClick={()=>{
                                setState(!sortState)
                                action(sortState)
                            }}>
                                <Vector className={classNames(`${classname}__vector`, 
                                !sortState && `${classname}__vector--reverse`)}/>
                                <Vector className={classNames(`${classname}__vector`, 
                                sortState && `${classname}__vector--reverse`)}/>
                            </span>
            </div>
    )
}