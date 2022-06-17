import AccountPage from "./components/account/AccountPage";
import EventPage from "./components/event/EventPage";
import MainPage from "./components/main/MainPage"
import AdminPage from "./components/admin/AdminPage";
import Policy from "./components/Policy";

export type RouteType = {
    path: string
    component: any
}
  
const unAuthUser: Array<RouteType> = [
  { path: '/', component: <MainPage/>},
  { path: '/event/:id', component: <EventPage/>},
  { path: '/policy/privacy', component: <Policy/>},
  { path: '/policy/rules', component: <Policy/>},
  { path: '/policy/terms', component: <Policy/>},
]

const usersRoutes: Array<RouteType> = [
  { path: '/', component: <MainPage/>},
  { path: '/event/:id', component: <EventPage/>},
  { path: '/account/profile', component: <AccountPage/>},
  { path: '/account/bet-history', component: <AccountPage/>},
  { path: '/policy/privacy', component: <Policy/>},
  { path: '/policy/rules', component: <Policy/>},
  { path: '/policy/terms', component: <Policy/>},
]

const adminRoutes: Array<RouteType> = [
  { path: '/', component: <MainPage/>},
  { path: '/users', component: <AdminPage/>},
  { path: '/bets', component: <AdminPage/>},
  { path: '/policy/privacy', component: <Policy/>},
  { path: '/policy/rules', component: <Policy/>},
  { path: '/policy/terms', component: <Policy/>},
]

const routes: any = {
    unAuthUser: unAuthUser,
    usersRoutes:usersRoutes,
    adminRoutes:adminRoutes
}




export default routes;