
export const getDate = (date: string)=>{
    return new Date(date).toLocaleDateString("ru", {hour: "2-digit",minute: "2-digit" }).split(", ").join(" ")
}

export const getEngDate = (date: string)=>{
    return new Date(date).toLocaleDateString("en", {day: "2-digit",month: "short",hour: "numeric", minute:"2-digit"}).slice(0,-3)
}

export const emailValidate = (email:string)=>{
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}

export const isEmpty = (str: string)=>{
    return !str.length? false: true
}

export const getFormatDate = (date: string)=>{
    const dt = new Date(date).toLocaleDateString().split(".");
    return `${dt[2]}-${dt[1]}-${dt[0]}`
}

export const tableDate = (date: string)=>{
   const month =  new Date(date).toLocaleDateString("en", { month: "short"}).toLocaleLowerCase();
   const day = new Date(date).toLocaleDateString("en", { day: "2-digit"});
   const year = new Date(date).toLocaleDateString("en", { year: "numeric"});

   return `${day} ${month} ${year}`;
}

export const tableEngDate = (date: string)=>{
    const month =  new Date(date).toLocaleDateString("en", { month: "short"});
    const day = new Date(date).toLocaleDateString("en", { day: "2-digit"});
    const year = new Date(date).toLocaleDateString("en", { year: "numeric"});
 
    return `${day} ${month}, ${year}`;
 }


export const sortByName = (a: string, b: string)=>{
    return a.localeCompare(b);
}

export const sortByNumber= (a: number, b: number, state: boolean)=>{
    return state? a-b: b-a;
}

export const getAverage = (arr: Array<number>)=>{
    let average = 0;
    arr.forEach(it=>average+=it)

    return average
}