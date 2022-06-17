import { useState, useRef, useEffect, useCallback } from "react";
import {ReactComponent as Timer} from "../../../img/icons/fluent_timer-12-regular.svg";

type TimerType ={
    days: number|string,
    hours: number|string,
    minutes: number|string,
    seconds: number|string
} 


const DateTimer = ({date}: {date: string})=>{
    const [timer, setTime] = useState<TimerType>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const [isTimer, toggleState] = useState(true)

    let timerInterval = useRef<any>(null);

    const countTime = useCallback(()=>{
        const dateTime:any = new Date(date);
        const now = new Date().getTime();
        const distance = dateTime - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60))
        const minutes = Math.floor(distance % (1000 * 60 * 60)/(1000  * 60))
        const seconds = Math.floor(distance % (1000 * 60) / 1000)

        if(distance <= 0){
            toggleState(false);
        }
        else setTime({
            days, hours, minutes, seconds
        })
    },[date])

    useEffect(()=>{
        if(!isTimer){
            clearInterval(timerInterval.current)
        }

        return  ()=>clearInterval(timerInterval.current)
    },[isTimer,timerInterval])

    const interval = useCallback(()=>{
        timerInterval.current=setInterval(countTime,1000)
    },[countTime])

    useEffect(()=>{
        interval();
    },[interval])


    const getTime = (time: any)=>{
        return `${time.days>=10? time.days:"0"+time.days}d : ${time.hours>=10? time.hours:"0"+time.hours}h : ${time.minutes>=10? time.minutes:"0"+time.minutes}m : ${time.seconds>=10? time.seconds:"0"+time.seconds}s`
    }

    return <span className="event-content__func-item"><Timer/> {getTime(timer)}</span>

}

export default DateTimer;