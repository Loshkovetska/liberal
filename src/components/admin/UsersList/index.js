import Button from "@/components/ui/button";
import UserModel, { getUsers } from "@/stores/user.model";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import {
  Fragment as _Fragment,
  jsx as _jsx,
  jsxs as _jsxs,
} from "react/jsx-runtime";
import UserModal from "../UserModal";
import UsersTable from "../UsersTable";
import "./usersList.scss";
const UsersList = observer(() => {
  const [show, setShow] = useState(false);
  const { users } = UserModel;
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    if (show) {
      document.querySelector("#root").classList.add("menu-open");
    } else document.querySelector("#root").classList.remove("menu-open");
  }, [show]);
  if (!users) {
    return _jsx(_Fragment, {});
  }
  return _jsxs("div", {
    className: "users",
    children: [
      _jsxs("div", {
        className: "users__top",
        children: [
          _jsxs("div", {
            className: "users__top-col",
            children: [
              _jsx("span", { className: "users__title", children: "Users" }),
              _jsxs("span", {
                className: "users__count",
                children: ["Total: ", users.length],
              }),
            ],
          }),
          _jsx(Button, {
            disabled: false,
            classname: "button--orange button--w112",
            content: "Add user",
            click: () => setShow(true),
          }),
        ],
      }),
      _jsx(UsersTable, {}),
      show && _jsx(UserModal, { setShow: setShow, mode: "add" }),
    ],
  });
});
export default UsersList;
