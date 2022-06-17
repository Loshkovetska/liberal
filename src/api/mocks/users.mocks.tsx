import avatar from "../../img/avatar.png";
import { User } from "../../types";

const users: User[] = [
    {
        id: 1, 
        email: "d@gm.com",
        password:"1111",
        avatar: avatar,
        name: "Richard",
        surname: "Lovely",
        userName: "Richardy777",
        birthDate: new Date().toString(),
        dayLimit: 32, 
        monthLimit: 120, 
        yearLimit: 4620,
        totalBalance: 1687.079,
        role: "user"
    },
    {
        id: 2, 
        email: "admin@gm.com",
        password:"1111",
        role: "admin",
        userName: "Admin"
    },
    {
        id: 3, 
        email: "dcxx@gm.com",
        password:"1111",
        avatar: avatar,
        name: "Richardb",
        surname: "LovelyR",
        userName: "Richardy777N",
        birthDate: new Date().toString(),
        dayLimit: 32, 
        monthLimit: 120, 
        yearLimit: 4620,
        totalBalance: 1618.079,
        role: "user"
    },
    {
        id: 4, 
        email: "dbb@gm.com",
        password:"1111",
        avatar: avatar,
        name: "RichardC",
        surname: "LovelyW",
        userName: "Richardy777V",
        birthDate: new Date("12-23-2021").toString(),
        dayLimit: 32, 
        monthLimit: 120, 
        yearLimit: 4620,
        totalBalance: 1683.079,
        role: "user"
    },
    {
        id: 5, 
        email: "dwqq@gm.com",
        password:"1111",
        avatar: avatar,
        name: "RichardZ",
        surname: "LovelyZ",
        userName: "Richardy777X",
        birthDate: new Date("10-23-2021").toString(),
        dayLimit: 32, 
        monthLimit: 120, 
        yearLimit: 4620,
        totalBalance: 16855.079,
        role: "user"
    },
    {
        id: 6, 
        email: "drr@gm.com",
        password:"1111",
        avatar: avatar,
        name: "RichardZW",
        surname: "LovelyWZ",
        userName: "Richardy777Z",
        birthDate: new Date().toString(),
        dayLimit: 32, 
        monthLimit: 120, 
        yearLimit: 4620,
        totalBalance: 1689.079,
        role: "user"
    },
    {
        id: 7, 
        email: "wwd@gm.com",
        password:"1111",
        avatar: avatar,
        name: "RichardTT",
        surname: "LovelyPP",
        userName: "Richardy777A",
        birthDate: new Date("10-11-2021").toString(),
        dayLimit: 32, 
        monthLimit: 120, 
        yearLimit: 4620,
        totalBalance: 1668.079,
        role: "user"
    }
]

export default users;