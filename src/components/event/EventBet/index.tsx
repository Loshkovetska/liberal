import { useEffect, useState } from "react";
import Button from "../../common/Button";
import {ReactComponent as Add} from "../../../img/icons/ic_outline-add-box.svg";
import {ReactComponent as Minus} from "../../../img/icons/ic_outline-minus-box.svg";
import {ReactComponent as Close} from "../../../img/icons/ci_close-big.svg"
import classNames from "classnames";
import "./eventBet.scss";
import { placeBet } from "../../../stores/BetModel";
import { observer } from "mobx-react";
import UserModel from "../../../stores/UserModel";

const EventBet = observer((props:any)=>{
    const [bets, setBets] = useState({
        rate: 0,
        stake: 0
    })

    const rates = [
        500,
        1000,
        5000,
        10000,
        50000,
        100000
    ]

    useEffect(()=>{
        if(props.rate){
            setBets({
                ...bets, rate: props.rate.rat.count 
            })
        }

    },[props.rate])

    const addBet = ()=>{
        if(UserModel.user){
            placeBet({
                userId: UserModel.user?.id,
                idPlayer: props.rate.idPlayer,
                idMatch: props.rate.idMatch,
                stake: bets.stake,
                rate: bets.rate
            })
        }
        else alert("You need to login")
    }


    const getAmount = (num: number)=>{
        return num>1000? `+${Math.round(num/1000)}k`:`+${num}`;
    }
    
    return (    
            <div className="event-content-bet">
                <div className="event-content-bet__form">
                <div className="event-content-bet__num">
                            <input type="number" className="input" placeholder="Rate"
                            value={bets.rate? bets.rate:""}
                            onChange={
                                (e)=>setBets({
                                    ...bets, rate: +e.target.value
                                })
                            }/>
                            <div className="event-content-bet__btns">
                            <Button classname="button--num" content={<Add/>} click={
                                ()=>setBets({
                                    ...bets, rate: bets.rate+1
                                })
                            } disabled={false}/>
                            <Button classname="button--num" content={<Minus/>}
                             click={
                                ()=>{
                                    if(bets.rate>0){
                                        setBets({
                                            ...bets, rate: bets.rate-1
                                        })
                                    }
                                }
                            } disabled={false}/>
                            </div>
                        </div>
                        <div className="event-content-bet__num">
                            <input type="number" className="input" placeholder="Stake"
                            value={
                                bets.stake
                                ? bets.stake: ""}
                            min={props.match.strokeLimit.min}
                            max={props.match.strokeLimit.max}
                            onChange={
                                (e)=> setBets({
                                    ...bets, stake: +e.target.value
                                })
                            }/>
                             <div className="event-content-bet__btns">
                                <Button classname="button--num" content={<Add/>} click={
                                    ()=>setBets({
                                        ...bets, stake: bets.stake+1
                                    })
                                } disabled={false}/>
                                <Button classname="button--num" content={<Minus/>}
                                click={
                                    ()=>{
                                        if(bets.stake>0){
                                            setBets({
                                                ...bets, stake: bets.stake-1
                                            })
                                        }
                                    }
                                } disabled={false}/>
                            </div>
                        </div>
                        <div className="event-content-bet__amount">
                           {
                               rates.map((r, ind)=>(
                                <div className={classNames("event-content-bet__amount-item")} key={ind}
                                onClick={()=>{
                                    let stake = bets.stake;
                                    stake += r;
                                    if(stake>=props.match.strokeLimit.min && stake<=props.match.strokeLimit.max){
                                        setBets({
                                            ...bets, stake
                                        })
                                       }
                                }}>
                                    {getAmount(r)}
                                </div>
                               ))
                           }
                           <Button classname="button--clear" click={()=>{
                               setBets({
                                   ...bets, stake:0
                               })

                           }} content={<><Close/> Clear all</>}disabled={false}/>
                        </div>
                </div>
                    <div className="event-content-bet__bottom">
                    <Button classname="button--orange-border" click={()=>{
                               setBets({
                                   rate: 0, stake:0
                               })
                               props.cancel()
                           }} content={"Cancel"}disabled={false}/>
                    <Button classname="button--bet" click={addBet} content={"Place bet"}disabled={false}/>
                    </div>
            </div>
    )
})

export default EventBet;


