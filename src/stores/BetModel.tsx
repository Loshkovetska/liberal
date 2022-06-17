import { runInAction, observable } from "mobx";
import api from "../api";
import {Bet} from "../types"

type BetType = {
    bets: null | Bet[],
    bet: null | Bet
}

const BetModel: BetType = observable({
    bets: null,
    bet: null
})


export const placeBet = async(bet: any)=>{
    try{
        const {bets} = await api.bet.placeBet(bet);
        runInAction(()=>{
            BetModel.bets = bets 
        })
    }
    catch(e){

    }
}

export const getBets = async(param: any)=>{
    try{
        const {bets} = await api.bet.getBets(param);
        runInAction(()=>{
            BetModel.bets = bets 
        })
    }
    catch(e){

    }
}


export const getBet = async(bet: any)=>{
    try{
        const betItem = await api.bet.getBetByParams(bet);
        runInAction(()=>{
            BetModel.bet = betItem 
        })
    }
    catch(e){

    }
}

export const deleteBet = async(id: any)=>{
    try{
        const {bets} = await api.bet.deleteBet(id);
        runInAction(()=>{
            BetModel.bets = bets 
        })
    }
    catch(e){

    }
}

export default BetModel;