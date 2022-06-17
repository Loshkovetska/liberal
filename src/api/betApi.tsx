import { placeBet } from "../stores/BetModel"
import { Bet } from "../types"
import mocks from "./mocks"

const betApi = {
    async placeBet(bet: any){
        // const status = "addbet"
        // const fd = new FormData();
        //fd.append("bet",bet);
        // fd.append("status",status);

        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'POST',
        //     body: fd
        //   })
        //   return await responseRaw.json();

        return new Promise<{bets: Bet[]}>((resolve, reject)=>{
            resolve({
                bets: mocks.bets
            })
        })
    },
    async getBets (param: any){
        // const status = "bets"
        // const fd = new FormData();
        //fd.append("dt",param);
        // fd.append("status",status);

        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'POST',
        //     body: fd
        //   })
        //   return await responseRaw.json();

        return new Promise<{bets: Bet[]}>((resolve, reject)=>{
            let res:any = [];
            if(param && param.time){
                switch(param.time){
                    case "all-time": res=mocks.bets;break;
                    case "today": 
                    mocks.bets.forEach((b)=>{
                        if(new Date(new Date(b.match.dateTime).toDateString()).getTime()=== new Date(new Date().toDateString()).getTime()){
                            res.push(b)
                        }
                    })
                    break;
                    case "week": 
                    mocks.bets.forEach((b)=>{
                        if(new Date(new Date(b.match.dateTime).toDateString()).getTime() >= new Date(new Date(param.date.min).toDateString()).getTime() && 
                        new Date(new Date(b.match.dateTime).toDateString()).getTime() <= new Date(new Date(param.date.max).toDateString()).getTime()){
                            res.push(b)
                        }
                    })
                    break;
                    case "month": 
                    mocks.bets.forEach((b)=>{
                        if(new Date(b.match.dateTime).getMonth() === new Date().getMonth() && 
                        new Date(b.match.dateTime).getFullYear() === new Date().getFullYear()){
                            res.push(b)
                        }
                    })
                    break;

                    case "year": 
                    mocks.bets.forEach((b)=>{
                        if(new Date(b.match.dateTime).getFullYear() === new Date().getFullYear()){
                            res.push(b)
                        }
                    })
                    break;
                }
            }
            else res = mocks.bets
            
            resolve({
                bets: res
            })
        })
    },
    async getBetByParams (bet: any){
        // const status = "getbet"
        // const fd = new FormData();
        //fd.append("bet",bet);
        // fd.append("status",status);

        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'GET',
        //     body: fd
        //   })
        //   return await responseRaw.json();

        return new Promise<Bet>((resolve, reject)=>{
            resolve(
               mocks.bets[0]
            )
        })
    },
    async deleteBet (id: number){
        // const status = "delbet"
        // const fd = new FormData();
        //fd.append("id",id);
        // fd.append("status",status);

        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'POST',
        //     body: fd
        //   })
        //   return await responseRaw.json();

        return new Promise<{bets: Bet[]}>((resolve, reject)=>{
            resolve(
               {
                   bets: mocks.bets
               }
            )
        })
    }
}


export default betApi