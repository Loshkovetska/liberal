import { observable, runInAction } from "mobx";
import api from "../api";
import { Game } from "../types";

type GameTypeModel = {
    games: null | Game[]
}

const GameModel: GameTypeModel = observable({
    games: null
})


export const getGames = async()=>{
    try{
        const {games}:any = await api.game.getGames();

        runInAction(()=>{
            GameModel.games = games;
        })
    }catch(e){

    }
}

export default GameModel