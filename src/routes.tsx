import Main from "@/components/common/main";
import AccountPage from "@/components/pages/account-page";
import AdminPage from "@/components/pages/admin-page";
import EventPage from "@/components/pages/event-page";
import MainPage from "@/components/pages/main-page";
import NotFound from "@/components/pages/not-found-page";
import Policy from "@/components/pages/policy";
import { RouteObject } from "react-router";

const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/event/:id", element: <EventPage /> },
      { path: "/policy/privacy", element: <Policy type="privacy" /> },
      { path: "/policy/rules", element: <Policy type="rules" /> },
      { path: "/policy/terms", element: <Policy type="terms" /> },
      {
        path: "/account/profile",
        element: <AccountPage type="profile" />,
      },
      {
        path: "/account/bet-history",
        element: <AccountPage type="bets" />,
      },
      { path: "/users", element: <AdminPage type="users" /> },
      { path: "/bets", element: <AdminPage type="bets" /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
