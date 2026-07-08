import { Close } from "@/assets/icons";
import Button from "@/components/ui/button";
import { emailValidate, getFormatDate, isEmpty } from "@/lib/utils";
import { useState } from "react";

import { classNames } from "@/lib/utils";
import { User } from "@/stores/types";
import { addUser, updateUserByParams } from "@/stores/user.model";
import "./userModal.scss";

const UserModal = ({
  setShow,
  mode,
  dt,
}: {
  setShow: (val: boolean) => void;
  mode: "add" | "edit";
  dt?: User;
}) => {
  const [userData, setData] = useState({
    name: dt ? dt.name : "",
    surname: dt ? dt.surname : "",
    username: dt ? dt.userName : "",
    email: dt ? dt.email : "",
    bday: dt ? dt.birthDate : "",
    pass: dt ? dt.password : "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    bday: "",
    pass: "",
  });

  const receiveData = () => {
    const { name, surname, username, email, bday, pass } = userData;

    const errs = {
      name: !isEmpty(name!) ? "*Fill field" : "",
      surname: !isEmpty(surname!) ? "*Fill field" : "",
      username: !isEmpty(username!) ? "*Fill field" : "",
      email: !isEmpty(email)
        ? "*Fill field"
        : !emailValidate(email) && isEmpty(email)
          ? "Invalid email"
          : "",
      bday: !isEmpty(bday!) ? "*Fill field" : "",
      pass: !isEmpty(pass) ? "*Fill field" : "",
    };

    if (
      !errs.name.length &&
      !errs.surname.length &&
      !errs.username.length &&
      !errs.email.length &&
      !errs.bday.length &&
      !errs.pass.length
    ) {
      if (mode === "add") {
        addUser({
          name,
          surname,
          username,
          email,
          bday,
          password: pass,
        });
      } else
        updateUserByParams(dt!.id, {
          name,
          surname,
          username,
          email,
          bday,
          password: pass,
        });

      setShow(false);
    }
    setErrors({ ...errs });
  };

  return (
    <div className="user-modal">
      <div className="user-modal__content">
        <div className="user-modal__top">
          <h1 className="user-modal__title">
            {mode === "add" ? "Create" : "Edit"} user
          </h1>
          <Button
            variant="close"
            onClick={() => setShow(false)}
          >
            <Close className="svg-close" />
          </Button>
        </div>
        <div className="user-modal__input">
          <label
            className="user-modal__label"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="input"
            id="name"
            value={userData.name}
            onChange={(e) => setData({ ...userData, name: e.target.value })}
          />
          <span className="user-modal__error">{errors.name}</span>
        </div>
        <div className="user-modal__input">
          <label
            className="user-modal__label"
            htmlFor="sname"
          >
            Surname
          </label>
          <input
            className="input"
            id="sname"
            value={userData.surname}
            onChange={(e) => setData({ ...userData, surname: e.target.value })}
          />
          <span className="user-modal__error">{errors.surname}</span>
        </div>
        <div className="user-modal__input">
          <label
            className="user-modal__label"
            htmlFor="uname"
          >
            Username
          </label>
          <input
            className="input"
            id="uname"
            value={userData.username}
            onChange={(e) => setData({ ...userData, username: e.target.value })}
          />
          <span className="user-modal__error">{errors.username}</span>
        </div>
        <div className="user-modal__input">
          <label
            className="user-modal__label"
            htmlFor="email"
          >
            E-mail address
          </label>
          <input
            className="input"
            id="email"
            type="email"
            placeholder="Enter valid address"
            value={userData.email}
            onChange={(e) => setData({ ...userData, email: e.target.value })}
          />
          <span className="user-modal__error">{errors.email}</span>
        </div>
        <div className="user-modal__input">
          <label
            className="user-modal__label"
            htmlFor="bday"
          >
            Birthday date
          </label>
          <input
            className={classNames(
              "input",
              userData.bday!.length && "input--date",
            )}
            id="bday"
            type="date"
            value={getFormatDate(userData.bday!)}
            onChange={(e) =>
              setData({
                ...userData,
                bday: new Date(e.target.value).toString(),
              })
            }
          />
          <span className="user-modal__error">{errors.bday}</span>
        </div>
        <div className="user-modal__input">
          <label
            className="user-modal__label"
            htmlFor="pass"
          >
            Password
          </label>
          <input
            className="input"
            id="pass"
            type="password"
            value={userData.pass}
            onChange={(e) => setData({ ...userData, pass: e.target.value })}
          />
          <span className="user-modal__error">{errors.pass}</span>
        </div>
        <Button
          variant="log"
          className="w-[140px]"
          onClick={receiveData}
        >
          {mode === "add" ? "Create user" : "Save changes"}
        </Button>
      </div>
    </div>
  );
};

export default UserModal;
