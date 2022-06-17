import classNames from "classnames";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import BetModel, { deleteBet } from "../../../stores/BetModel";
import { Bet } from "../../../types";
import { BetHistoryTh } from "../../account/AccountBetsHistory";
import "./betsTable.scss";
import {ReactComponent as Trash}  from "../../../img/icons/dashicons_trash.svg";
import { getAverage,getDate, sortByName, sortByNumber } from "../../hooks/main";


const BetsTable = observer(({bets}:{bets:any[]})=>{
    const [data, setData] = useState<any>(bets? JSON.parse(JSON.stringify(bets)):[]);

    useEffect(()=>{
        setData(bets)
    }, [bets])
    
    const theads = [
        {
            title: "User",
            action: (state: boolean)=>{
                if(data){
                    const res = data.sort((a:Bet,b:Bet)=>sortByName(a.user.name!, b.user.name!))
                    if(!state){
                        res.reverse();
                    }

                    setData([...res])
                }
            }
        },
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

    const delBet = (id: number)=>{
        deleteBet(id)
    }

    return <div className="bets-table">
            <div className="bets-table__thead">
                {
                    theads.map((th: any, ind:number)=>(
                        <BetHistoryTh key={ind} title={th.title} action={(val:boolean)=>th.action(val)}
                        classname="bets-table"/>
                    ))
                }
                <div className="bets-table__th"></div>
            </div>
           {data || data && !data.length ?( <>
           {
               data.map((bt:Bet, ind:number)=>(
                <div className="bets-table__row" key={ind}>
                    <div className="bets-table__td">
                        {`${bt.user.name} ${bt.user.surname}`}
                    </div>
                    <div className="bets-table__td bets-table__td--main">
                        <span className="bets-table__td-title">{bt.player.title}</span>
                        <span className="bets-table__td-val">{bt.match.title}</span>
                    </div>
                    <div className="bets-table__td">{getDate(bt.match.dateTime.toString())}</div>
                    <div className="bets-table__td">{bt.stakingPlan}</div>
                    <div className="bets-table__td">{bt.odds.length===1? bt.odds[0].toFixed(2): getAverage(bt.odds).toFixed(2)}</div>
                    <div className="bets-table__td">£{bt.stake.toFixed(2)}</div>
                    <div className="bets-table__td bets-table__td--profit">
                        <span className={classNames("bets-table__td-val", bt.result==="Won" && "bets-table__td-val--won" )}>
                        {bt.result==="Won"? `£${bt.profit.toFixed(2)}`: `- £${(bt.profit* -1).toFixed(2)}`}</span>
                    </div>
                    <div className="bets-table__td">{bt.result}</div>
                    <div className="bets-table__td">
                        <Trash className="svg-del" onClick={()=>delBet(bt.id)}/>
                    </div>
                </div>
               ))
           }
           </>):<div className="bets-table__row">No data</div>}
    </div>
})

export default BetsTable
