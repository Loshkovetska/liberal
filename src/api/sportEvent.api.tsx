import mocks from "./mocks"
const sportEventApi = {
    async getsportsEvent(title: string){
        // const status = "sportevents"
        // const fd = new FormData();
        // fd.append("status",status);

        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'GET',
        //     body: fd
        //   })
        //   return await responseRaw.json();

        return new Promise((resolve, reject)=>{
            resolve(mocks.sportEvents.find(s=>s.title=title))
        })
    },
    async getSportEventByParams(params: any){
        // const status = "sportevent"
        // const fd = new FormData();
        // fd.append("status",status);
         // fd.append("dt",params);

        // const responseRaw = await fetch("https://iwanttodig.romura.space/backend/tests/bd/areas/", {
        //     method: 'GET',
        //     body: fd
        //   })
        //   return await responseRaw.json();

        return new Promise((resolve, reject)=>{
            resolve(mocks.sportEvents[0].list.find(s=>s.id===+params.id))
        })
    }
}

export default sportEventApi