import { observer } from "mobx-react";
import { useEffect } from "react";
import GameModel from "../../../stores/GameModel";
import "./main-aside-games.scss";
import { getGames } from "../../../stores/GameModel";
import { Game } from "../../../types";

const MainAsideGames = observer(()=>{
    const {games}:any = GameModel;

    useEffect(()=>{
        getGames();
    },[])
    return (
        <aside className="main-aside-games">
            <h2 className="main-aside-games__title">Live casino games</h2>
            <div className="main-aside-games__list">
                {
                    games && games.map((l:Game, ind:number)=>(
                        <a href={l.link} className="main-aside-games__item" key={ind}>
                            <img src={l.src} alt="" className="main-aside-games__item-img"/>
                           <div className="main-aside-games__item-info">
                               <span className="main-aside-games__item-title">{l.title}</span>
                                <a  href={l.link}  className="main-aside-games__item-play">Play Now</a>
                           </div>
                        </a>
                    ))
                }
            </div>
        </aside>
    )
})

export default MainAsideGames