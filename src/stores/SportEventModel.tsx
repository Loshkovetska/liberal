import { runInAction, observable } from "mobx";
import api from "../api";
import { SportEvent } from "../types";

type SportEventTypeModel ={
    sportEvents: SportEvent| null,
    sportEvent: SportEvent| null,
}

const SportEventModel: SportEventTypeModel = observable({
    sportEvents: null,
    sportEvent: null
})

export const getSportEvents = async(title: string)=>{
    try{
        const sportEvents:any = await api.sportEvent.getsportsEvent(title);
        runInAction(()=>{
            SportEventModel.sportEvents = sportEvents;
        })
    }
    catch(e){

    }
}

export const getSportEventByParams = async(params: any)=>{
    try{
        const sportEvent:any = await api.sportEvent.getSportEventByParams(params);
        runInAction(()=>{
            SportEventModel.sportEvent = sportEvent;
        })
    }
    catch(e){

    }
}

export default SportEventModel