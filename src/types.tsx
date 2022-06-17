export type SportEvent ={
    id: number,
    title: string, 
    list: Array<SportEventItem>
}

export type SportEventItem ={
    id: number,
    title: string
}

export type Player = {
    id: number, 
    title: string,
    rates: Array<Rate>
    score: number
}

export type Market = {
    id: number, 
    title: string,
    count: number
}

export type Match = {
    id: number, 
    title: string,
    sportKind: string,
    section: string,
    inPlay: boolean,
    markets: Array<Market>
    ratio: Array<any>,
    strokeLimit: {
        min: number,
        max: number
    },
    maxProfit: number,
    dateTime: string,
    players: Array<Player>
}

export type Rate = {
    id: number,
    //title: string, 
    count: number, 
    amount:number
}

export type Bet = {
    id: number,
    //userId: number,
    user: User,
    match: Match
    //idMatch: number,
    //idPlayer: number
    player: Player,
    stake: number,
    rate: number,
    result: "Won"| "Lost"| "",
    profit: number,
    stakingPlan: string,
    odds: Array<number>
}

export type User = {
    id: number,
    email: string,
    password: string,
    avatar?: string, 
    name?: string, 
    surname?: string,
    userName?: string, 
    birthDate?: string,
    dayLimit?: number, 
    monthLimit?: number, 
    yearLimit?: number,
    totalBalance?: number,
    role: "user"|"admin"
}

export type Game = {
    id: number,
    title: string, 
    src: any,
    link: string
}