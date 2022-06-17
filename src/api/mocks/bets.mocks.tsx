import { Bet } from "../../types";
import avatar from "../../img/avatar.png";


const bets: Bet[] = [
    {
        id: 1,
        user: {
            id: 1, 
            email: "d@gm.com",
            password:"1111",
            avatar: avatar,
            name: "Richard",
            surname: "Lovely",
            userName: "Richardy777",
            birthDate: new Date().toString(),
            dayLimit: 168.079, 
            monthLimit: 32.00, 
            yearLimit: 120.00,
            totalBalance: 4620.00,
            role: "user"
        },
        match: {
            id: 1,
            title: "Australia v England",
            sportKind: "cricket",
            section: "Test matches", inPlay: true,
            markets:[ {
                id: 1, 
                title: "O",
                count: 1
            },
            ],
                            ratio:[1.29, 1.3,4.9,5,34,36],
    strokeLimit:{
                        min: 20,
                        max: 500000
                    },
                    maxProfit: 100000,
                    dateTime: new Date().toString(),
                    players: [
                        {
                            id: 1,
                            title: "Dambulla giants",
                            score: 0,
                            rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]},
                        {
                            id: 2,
                            title: "Jaffna kings",
                            score: 0,
                        rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]
                    }],
        
        },
        player: {
            id: 1,
            title: "Jaffna kings giants",
            score: 0,
            rates: [
            {
                id: 1,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 2,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 3,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 4,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 5,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 6,
                count:2.8 ,
                amount: 37.946
            }
        ]},
        //idMatch: 1,
        stakingPlan: "Back {L}",
        odds: [3.8],
        stake: 10,
        rate: 0,
        result: "Won",
        profit: 19
    },
    {
        id: 2,
        user: {
            id: 1, 
            email: "d@gm.com",
            password:"1111",
            avatar: avatar,
            name: "Richard",
            surname: "Lovely",
            userName: "Richardy777",
            birthDate: new Date().toString(),
            dayLimit: 168.079, 
            monthLimit: 32.00, 
            yearLimit: 120.00,
            totalBalance: 4620.00,
            role: "user"
        },
        match: {
            id: 1,
            title: "Australia v England",
            sportKind: "cricket",
            section: "Test matches", inPlay: true,
            markets:[ {
                id: 1, 
                title: "O",
                count: 1
            },
            ],
                            ratio:[1.29, 1.3,4.9,5,34,36],
    strokeLimit:{
                        min: 20,
                        max: 500000
                    },
                    maxProfit: 100000,
                    dateTime: new Date().toString(),
                    players: [
                        {
                            id: 1,
                            title: "Dambulla giants",
                            score: 0,
                            rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]},
                        {
                            id: 2,
                            title: "Jaffna kings",
                            score: 0,
                        rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]
                    }],
        
        },
        player: {
            id: 1,
            title: "Dambulla giants",
            score: 0,
            rates: [
            {
                id: 1,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 2,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 3,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 4,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 5,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 6,
                count:2.8 ,
                amount: 37.946
            }
        ]},
        //idMatch: 1,
        stakingPlan: "Back {L}",
        odds: [1.8],
        stake: 0,
        rate: 0,
        result: "Won",
        profit: 19
    },
    {
        id: 3,
        user: {
            id: 1, 
            email: "d@gm.com",
            password:"1111",
            avatar: avatar,
            name: "Richard",
            surname: "Lovely",
            userName: "Richardy777",
            birthDate: new Date().toString(),
            dayLimit: 168.079, 
            monthLimit: 32.00, 
            yearLimit: 120.00,
            totalBalance: 4620.00,
            role: "user"
        },
        match: {
            id: 1,
            title: "Australia v England",
            sportKind: "cricket",
            section: "Test matches", inPlay: true,
            markets:[ {
                id: 1, 
                title: "O",
                count: 1
            },
            ],
                            ratio:[1.29, 1.3,4.9,5,34,36],
    strokeLimit:{
                        min: 20,
                        max: 500000
                    },
                    maxProfit: 100000,
                    dateTime: new Date(new Date().setDate(new Date().getDate() + 1)).toString(),
                    players: [
                        {
                            id: 1,
                            title: "Dambulla giants",
                            score: 0,
                            rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]},
                        {
                            id: 2,
                            title: "Jaffna kings",
                            score: 0,
                        rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]
                    }],
        
        },
        player: {
            id: 1,
            title: "Dambulla giants",
            score: 0,
            rates: [
            {
                id: 1,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 2,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 3,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 4,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 5,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 6,
                count:2.8 ,
                amount: 37.946
            }
        ]},
        //idMatch: 1,
        stakingPlan: "Lack {K}",
        odds: [4.8],
        stake: 30,
        rate: 0,
        result: "Lost",
        profit: -19
    },
    {
        id: 4,
        user: {
            id: 1, 
            email: "d@gm.com",
            password:"1111",
            avatar: avatar,
            name: "Richard",
            surname: "Lovely",
            userName: "Richardy777",
            birthDate: new Date().toString(),
            dayLimit: 168.079, 
            monthLimit: 32.00, 
            yearLimit: 120.00,
            totalBalance: 4620.00,
            role: "user"
        },
        match: {
            id: 1,
            title: "Australia v England",
            sportKind: "cricket",
            section: "Test matches", inPlay: true,
            markets:[ {
                id: 1, 
                title: "O",
                count: 1
            },
            ],
                            ratio:[1.29, 1.3,4.9,5,34,36],
    strokeLimit:{
                        min: 20,
                        max: 500000
                    },
                    maxProfit: 100000,
                    dateTime: new Date("11-12-2022").toString(),
                    players: [
                        {
                            id: 1,
                            title: "Dambulla giants",
                            score: 0,
                            rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]},
                        {
                            id: 2,
                            title: "Jaffna kings",
                            score: 0,
                        rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]
                    }],
        
        },
        player: {
            id: 1,
            title: "Jaffna kings giants",
            score: 0,
            rates: [
            {
                id: 1,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 2,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 3,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 4,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 5,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 6,
                count:2.8 ,
                amount: 37.946
            }
        ]},
        //idMatch: 1,
        stakingPlan: "Back {L}",
        odds: [4.8],
        stake: 0.5,
        rate: 0,
        result: "Won",
        profit: 19
    },
    {
        id: 5,
        user: {
            id: 1, 
            email: "d@gm.com",
            password:"1111",
            avatar: avatar,
            name: "Richard",
            surname: "Lovely",
            userName: "Richardy777",
            birthDate: new Date().toString(),
            dayLimit: 168.079, 
            monthLimit: 32.00, 
            yearLimit: 120.00,
            totalBalance: 4620.00,
            role: "user"
        },
        match: {
            id: 5,
            title: "Australia v England",
            sportKind: "cricket",
            section: "Test matches", inPlay: true,
            markets:[ {
                id: 1, 
                title: "O",
                count: 1
            },
            ],
                            ratio:[1.29, 1.3,4.9,5,34,36],
    strokeLimit:{
                        min: 20,
                        max: 500000
                    },
                    maxProfit: 100000,
                    dateTime: new Date("11-11-2021").toString(),
                    players: [
                        {
                            id: 1,
                            title: "Dambulla giants",
                            score: 0,
                            rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]},
                        {
                            id: 2,
                            title: "Jaffna kings",
                            score: 0,
                        rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]
                    }],
        
        },
        player: {
            id: 1,
            title: "Jaffna kings giants",
            score: 0,
            rates: [
            {
                id: 1,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 2,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 3,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 4,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 5,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 6,
                count:2.8 ,
                amount: 37.946
            }
        ]},
        //idMatch: 1,
        stakingPlan: "Back {L}",
        odds: [5.8],
        stake: 0.7,
        rate: 0,
        result: "Won",
        profit: 19
    },
    {
        id: 6,
        user: {
            id: 1, 
            email: "d@gm.com",
            password:"1111",
            avatar: avatar,
            name: "Richard",
            surname: "Lovely",
            userName: "Richardy777",
            birthDate: new Date().toString(),
            dayLimit: 168.079, 
            monthLimit: 32.00, 
            yearLimit: 120.00,
            totalBalance: 4620.00,
            role: "user"
        },
        match: {
            id: 1,
            title: "Australia v England",
            sportKind: "cricket",
            section: "Test matches", inPlay: true,
            markets:[ {
                id: 1, 
                title: "O",
                count: 1
            },
            ],
                            ratio:[1.29, 1.3,4.9,5,34,36],
    strokeLimit:{
                        min: 20,
                        max: 500000
                    },
                    maxProfit: 100000,
                    dateTime: new Date().toString(),
                    players: [
                        {
                            id: 1,
                            title: "Dambulla giants",
                            score: 0,
                            rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]},
                        {
                            id: 2,
                            title: "Jaffna kings",
                            score: 0,
                        rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]
                    }],
        
        },
        player: {
            id: 1,
            title: "Jaffna kings giants",
            score: 0,
            rates: [
            {
                id: 1,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 2,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 3,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 4,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 5,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 6,
                count:2.8 ,
                amount: 37.946
            }
        ]},
        //idMatch: 1,
        stakingPlan: "Back {L}",
        odds: [3.8],
        stake: 10,
        rate: 0,
        result: "Won",
        profit: 19
    },
    {
        id: 7,
        user: {
            id: 1, 
            email: "d@gm.com",
            password:"1111",
            avatar: avatar,
            name: "Richard",
            surname: "Lovely",
            userName: "Richardy777",
            birthDate: new Date().toString(),
            dayLimit: 168.079, 
            monthLimit: 32.00, 
            yearLimit: 120.00,
            totalBalance: 4620.00,
            role: "user"
        },
        match: {
            id: 1,
            title: "Australia v England",
            sportKind: "cricket",
            section: "Test matches", inPlay: true,
            markets:[ {
                id: 1, 
                title: "O",
                count: 1
            },
            ],
                            ratio:[1.29, 1.3,4.9,5,34,36],
    strokeLimit:{
                        min: 20,
                        max: 500000
                    },
                    maxProfit: 100000,
                    dateTime: new Date().toString(),
                    players: [
                        {
                            id: 1,
                            title: "Dambulla giants",
                            score: 0,
                            rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]},
                        {
                            id: 2,
                            title: "Jaffna kings",
                            score: 0,
                        rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]
                    }],
        
        },
        player: {
            id: 1,
            title: "Dambulla giants",
            score: 0,
            rates: [
            {
                id: 1,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 2,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 3,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 4,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 5,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 6,
                count:2.8 ,
                amount: 37.946
            }
        ]},
        //idMatch: 1,
        stakingPlan: "Back {L}",
        odds: [1.8],
        stake: 0,
        rate: 0,
        result: "Won",
        profit: 19
    },
    {
        id: 8,
        user: {
            id: 1, 
            email: "d@gm.com",
            password:"1111",
            avatar: avatar,
            name: "Richard",
            surname: "Lovely",
            userName: "Richardy777",
            birthDate: new Date().toString(),
            dayLimit: 168.079, 
            monthLimit: 32.00, 
            yearLimit: 120.00,
            totalBalance: 4620.00,
            role: "user"
        },
        match: {
            id: 1,
            title: "Australia v England",
            sportKind: "cricket",
            section: "Test matches", inPlay: true,
            markets:[ {
                id: 1, 
                title: "O",
                count: 1
            },
            ],
                            ratio:[1.29, 1.3,4.9,5,34,36],
    strokeLimit:{
                        min: 20,
                        max: 500000
                    },
                    maxProfit: 100000,
                    dateTime: new Date(new Date().setDate(new Date().getDate() + 1)).toString(),
                    players: [
                        {
                            id: 1,
                            title: "Dambulla giants",
                            score: 0,
                            rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]},
                        {
                            id: 2,
                            title: "Jaffna kings",
                            score: 0,
                        rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]
                    }],
        
        },
        player: {
            id: 1,
            title: "Dambulla giants",
            score: 0,
            rates: [
            {
                id: 1,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 2,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 3,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 4,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 5,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 6,
                count:2.8 ,
                amount: 37.946
            }
        ]},
        //idMatch: 1,
        stakingPlan: "Lack {K}",
        odds: [4.8],
        stake: 30,
        rate: 0,
        result: "Lost",
        profit: -19
    },
    {
        id: 9,
        user: {
            id: 1, 
            email: "d@gm.com",
            password:"1111",
            avatar: avatar,
            name: "Richard",
            surname: "Lovely",
            userName: "Richardy777",
            birthDate: new Date().toString(),
            dayLimit: 168.079, 
            monthLimit: 32.00, 
            yearLimit: 120.00,
            totalBalance: 4620.00,
            role: "user"
        },
        match: {
            id: 1,
            title: "Australia v England",
            sportKind: "cricket",
            section: "Test matches", inPlay: true,
            markets:[ {
                id: 1, 
                title: "O",
                count: 1
            },
            ],
                            ratio:[1.29, 1.3,4.9,5,34,36],
    strokeLimit:{
                        min: 20,
                        max: 500000
                    },
                    maxProfit: 100000,
                    dateTime: new Date("11-12-2019").toString(),
                    players: [
                        {
                            id: 1,
                            title: "Dambulla giants",
                            score: 0,
                            rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]},
                        {
                            id: 2,
                            title: "Jaffna kings",
                            score: 0,
                        rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]
                    }],
        
        },
        player: {
            id: 1,
            title: "Jaffna kings giants",
            score: 0,
            rates: [
            {
                id: 1,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 2,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 3,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 4,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 5,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 6,
                count:2.8 ,
                amount: 37.946
            }
        ]},
        //idMatch: 1,
        stakingPlan: "Back {L}",
        odds: [4.8],
        stake: 0.5,
        rate: 0,
        result: "Won",
        profit: 19
    },
    {
        id: 9,
        user: {
            id: 1, 
            email: "d@gm.com",
            password:"1111",
            avatar: avatar,
            name: "Richard",
            surname: "Lovely",
            userName: "Richardy777",
            birthDate: new Date().toString(),
            dayLimit: 168.079, 
            monthLimit: 32.00, 
            yearLimit: 120.00,
            totalBalance: 4620.00,
            role: "user"
        },
        match: {
            id: 5,
            title: "Australia v England",
            sportKind: "cricket",
            section: "Test matches", inPlay: true,
            markets:[ {
                id: 1, 
                title: "O",
                count: 1
            },
            ],
                            ratio:[1.29, 1.3,4.9,5,34,36],
    strokeLimit:{
                        min: 20,
                        max: 500000
                    },
                    maxProfit: 100000,
                    dateTime: new Date("11-11-2019").toString(),
                    players: [
                        {
                            id: 1,
                            title: "Dambulla giants",
                            score: 0,
                            rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]},
                        {
                            id: 2,
                            title: "Jaffna kings",
                            score: 0,
                        rates: [
                            {
                                id: 1,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 2,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 3,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 4,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 5,
                                count:2.8 ,
                                amount: 15.083
                            },
                            {
                                id: 6,
                                count:2.8 ,
                                amount: 37.946
                            }
                        ]
                    }],
        
        },
        player: {
            id: 1,
            title: "Jaffna kings giants",
            score: 0,
            rates: [
            {
                id: 1,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 2,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 3,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 4,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 5,
                count:2.8 ,
                amount: 15.083
            },
            {
                id: 6,
                count:2.8 ,
                amount: 37.946
            }
        ]},
        //idMatch: 1,
        stakingPlan: "Back {L}",
        odds: [5.8],
        stake: 0.7,
        rate: 0,
        result: "Won",
        profit: 79
    }
];

export default bets;