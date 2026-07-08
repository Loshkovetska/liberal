import { classNames } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { jsx as _jsx } from "react/jsx-runtime";
import "./accountTabs.scss";
const AccountTabs = ({ role }) => {
  const { pathname } = useLocation();
  const [classname, setClass] = useState(
    pathname.split("/").pop() === "profile" ||
      pathname.split("/").pop() === "users" ||
      pathname.split("/").pop() === "log"
      ? "account-tabs--active-tab0"
      : "account-tabs--active-tab1",
  );
  const tabs = [
    {
      title: "My account",
      link: "/account/profile",
    },
    {
      title: "Bet history",
      link: "/account/bet-history",
    },
  ];
  const adminTabs = [
    {
      title: "Users List",
      link: "/users",
    },
    {
      title: "Bets",
      link: "/bets",
    },
  ];
  const getTabs = () => {
    if (role === "user") {
      return tabs;
    } else return adminTabs;
  };
  useEffect(() => {
    setClass(
      pathname.split("/").pop() === "profile" ||
        pathname.split("/").pop() === "users" ||
        pathname.split("/").pop() === "log"
        ? "account-tabs--active-tab0"
        : "account-tabs--active-tab1",
    );
  }, [pathname]);
  return _jsx("div", {
    className: classNames("account-tabs", classname),
    children: getTabs().map((tab, ind) =>
      _jsx(
        Link,
        {
          to: tab.link,
          className: "account-tabs__item",
          onClick: () => setClass(`account-tabs--active-tab${ind}`),
          children: tab.title,
        },
        ind,
      ),
    ),
  });
};
export default AccountTabs;
