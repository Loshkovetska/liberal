import { Match } from "../../types";

const sportmatches:Match[] = [
    {
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
    {
        id: 2,
        title: "Perth Scorchers v Hobart Hurricanes ",
                sportKind: "cricket",
        section: "Twenty20 big bash", inPlay: false,
        markets:[ 
            {
                id: 1,
                title: "MO",
                count: 2
            },{
                id: 2, 
                title: "F",
                count: 41
            },{
                id: 3, 
                title: "M",
                count: 1
            }
        ],                ratio:[1.29, 1.3,4.9,5,34,36],
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
                }]
    },
    {
        id: 3,
        title: "Australia v England",
                sportKind: "cricket",
        section: "Super smash T20", inPlay: true,
        markets:[ 
            {
                id: 1, 
                title: "MO",
                count: 2
            },{
                id: 2,
                title: "M",
                count: 1
            }
        ],                ratio:[1.29, 1.3,4.9,5,34,36],
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
                }]
    },
    {
        id: 4,
        title: "Perth Scorchers v Hobart Hurricanes ",
                sportKind: "cricket",
        section: "Womens super smash T20", inPlay: false,
        markets:[ 
            {
                id: 1, 
                title: "MO",
                count: 2
            },{
                id: 2,
                title: "M",
                count: 1
            }
        ],                ratio:[1.29, 1.3,4.9,5,34,36],
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
                }]
    },    {
        id: 5,
        title: "Australia v England",
                sportKind: "cricket",
        section: "Intermational twenty20 matches", inPlay: true,
        markets:[ {
            id: 1,
            title: "O",
            count: 1
        },
        ],                ratio:[1.29, 1.3,4.9,5,34,36],
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
                }]
    },
    {
        id: 6,
        title: "Perth Scorchers v Hobart Hurricanes ",
        sportKind: "cricket",
        section: "Lanka premier league", inPlay: true,
        markets:[ 
            {
                id:1, 
                title: "MO",
                count: 2
            },{
                id: 2, 
                title: "F",
                count: 41
            },{
                id: 3, 
                title: "M",
                count: 1
            }
        ],                ratio:[1.29, 1.3,4.9,5,34,36],
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
                            count:4.8 ,
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
                            count:4.8 ,
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
                }]
    },
    {
        id: 7,
        title: "Perth Scorchers v Hobart Hurricanes ",
        sportKind: "cricket",
        section: "Test matches", inPlay: false,
        markets:[ 
            {
                id: 1, 
                title: "MO",
                count: 2
            },{
                id: 2, 
                title: "F",
                count: 41
            },{
                id: 3,
                title: "M",
                count: 1
            }
        ],                ratio:[1.29, 1.3,4.9,5,34,36],
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
                }]
    },
    {
        id: 8,
        title: "Australia v England",
        sportKind: "cricket",
        section: "Test matches", inPlay: false,
        markets:[ 
            {
                id: 1, 
                title: "MO",
                count: 2
            },{
                id:2,
                title: "M",
                count: 1
            }
        ],                ratio:[1.29, 1.3,4.9,5,34,36],
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
                }]
    }
]

export default sportmatches;