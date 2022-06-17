import classNames from "classnames";
import { useEffect, useState } from "react";
import Button from "../../common/Button";
import CheckBox from "../../common/CheckBox";
import "./eventAside.scss";
import {ReactComponent as Edit} from "../../../img/icons/ci_edit.svg"
import { observer } from "mobx-react";
import { Match } from "../../../types";
import BetModel, { getBet } from "../../../stores/BetModel";

const EventAside = observer(({match}:{match: Match})=>{
    const [isChecked, setChecked] = useState(false);
    const [isAccepted, setAccept] = useState(false);
    const [edit, setEditMode]= useState(false);
    const [average, setAverage] = useState(false);
    const [activeValue, setActive] = useState(-1);
    const {bet} = BetModel;
    const [values, setValues] = useState({
        num1: 20,
        num2:50,
        num3:100
    });

    const [inputs, setInputs] = useState({
        num1: 20,
        num2:50,
        num3:100
    });

    useEffect(()=>{
        getBet({
            
        })
    },[])

    return <aside className="event-aside">
        <div className="event-aside__row">
            <div className="event-aside__row-sub">
                <div className="event-aside__row-sub-col">
                    <CheckBox 
                        labelClass="event-aside__label event-aside__label--switch" 
                        isSwitch
                        func={(value)=>setChecked(value)} 
                        isChecked={isChecked}
                        labelText="1 click betting"
                    />
                </div>
                <div className="event-aside__row-sub-col">
                    <CheckBox 
                        labelClass="event-aside__label" 
                        isSwitch={false} 
                        func={(value)=>setAccept(value)} 
                        isChecked={isAccepted}
                        labelText="Accept all odds"
                    />
                </div>
            </div>
            {
                isChecked&& <div className="event-aside__row-func event-aside-func">
                    <div className="event-aside-func__items">
                        {!edit?
                        <>
                            <div className={classNames("event-aside-func__item", activeValue=== values.num1 && "event-aside-func__item--active")}
                            onClick={()=>setActive(values.num1)}>{values.num1}</div>
                            <div className={classNames("event-aside-func__item", activeValue=== values.num2 && "event-aside-func__item--active")}
                            onClick={()=>setActive(values.num2)}>{values.num2}</div>
                            <div className={classNames("event-aside-func__item", activeValue=== values.num3 && "event-aside-func__item--active")}
                            onClick={()=>setActive(values.num3)}>{values.num3}</div>
                        </>:
                        <>
                        <input className="input" value={inputs.num1} type="number"
                        max={999999} min={0}
                        onChange={(e)=>setInputs({
                            ...inputs,
                            num1: +e.target.value
                        })}/>
                        <input className="input" value={inputs.num2} type="number"
                         max={999999} min={0}
                        onChange={(e)=>setInputs({
                            ...inputs,
                            num2: +e.target.value
                        })}/>
                        <input className="input" value={inputs.num3} type="number"
                         max={999999} min={0}
                        onChange={(e)=>setInputs({
                            ...inputs,
                            num3: +e.target.value
                        })}/>
                        </>}
                    </div>
                    <div className="event-aside-func__btns">
                        <Button classname="button--edit" click={()=>{
                            if(edit){
                                setValues({
                                    ...inputs
                                })    
                            }
                            setEditMode(!edit)
                          
                        }} content={!edit?<><Edit/> Edit</>:"Save"}disabled={false}/>
                        {edit&& <Button classname="button--edit" click={()=>{
                            setEditMode(!edit)
                        }} content={"Cancel"}disabled={false}/>}
                    </div>
                 </div>
            }
        </div>
        <div className="event-aside__row">
            <div className="event-aside__bets event-aside-bets">
                <div className="event-aside-bets__top">
                    <span className="event-content__sub-title">Matched bets</span>
                    <div className="event-aside__row-sub-col">
                        <CheckBox 
                            labelClass="event-aside__label" 
                            isSwitch={false}
                            func={(value)=>setAverage(value)} 
                            isChecked={average}
                            labelText="Average odds"
                        />
                    </div>
                </div>
                <div className="event-aside-bets__table">
                   {
                       match.players.map((pl, index)=>(
                        <div className="event-aside-bets__table-row" key={index}>
                            <div className="event-aside-bets__table-thead">
                                <div className="event-aside-bets__table-th">Bet for</div>
                                <div className="event-aside-bets__table-th">Odds</div>
                                <div className="event-aside-bets__table-th">Stake</div>
                                <div className="event-aside-bets__table-th">Profit</div>
                            </div>
                            <div className="event-aside-bets__table-tr">
                                <div className="event-aside-bets__table-td">{pl.title}</div>
                                <div className="event-aside-bets__table-td">£5.00</div>
                                <div className="event-aside-bets__table-td">
                                    <span className="event-aside-bets__table-td-val">£5.00</span>
                                    <span className="event-aside-bets__table-td-val">£5.00</span>
                                </div>
                                <div className="event-aside-bets__table-td">£19.00</div>
                            </div>
                        </div>
                       ))
                   }
                </div>
            </div>
        </div>
        <div className="event-aside-unbets">
            <div className="event-aside-unbets__top">
                   <span className="event-content__sub-title">Unmatched bets</span>
            </div>
        </div>
    </aside>
})

export default EventAside

