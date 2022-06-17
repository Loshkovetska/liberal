import { observable, runInAction } from "mobx";
import { Match } from "../types";
import api from "../api"
type MatchTypeModel = {
    matches: null| Match[],
    match: null| Match,
}

const MatchModel:MatchTypeModel = observable({
    matches: null,
    match: null
})

export const getMatches = async(param: any)=>{
    try{
        const {matches} = await api.match.getMatches(param);

        runInAction(()=>{
            MatchModel.matches = matches
        })
    }
    catch(e){

    }

}

export const getMatchByParams = async(params: any)=>{
    try{
        const match:any = await api.match.getMatchByParams(params);

        runInAction(()=>{
            MatchModel.match = match
        })
    }
    catch(e){

    }

}

export default MatchModel