import { Game } from "../types";
import mocks from "./mocks";


const gameApi = {
    async getGames(): Promise<{games: Game[]|null}>{
        // const status = "games";
        // const fd = new FormData();
        // fd.append("status", status);
        //         const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'GET',
        //     body: fd
        //   })
        //   return await responseRaw.json();
        return new Promise((resolve, reject)=>{
            resolve({
                games: mocks.games
            })
        })
    }
}

export default gameApi;