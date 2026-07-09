import { Calendar, Close } from "@/assets/icons";
import Button from "@/components/ui/button";
import { emailValidate, getFormatDate, isEmpty } from "@/lib/utils";
import { useState } from "react";

import Input from "@/components/ui/input";
import { User } from "@/stores/types";
import { addUser, updateUserByParams } from "@/stores/user.model";

const UserModal = ({
  setShow,
  dt,
}: {
  setShow: (val: boolean) => void;
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
      if (!dt) {
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

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed size-screen bg-[rgba(16,22,27,0.8)] top-20 left-0 overflow-auto flex justify-end max-sm:top-15">
      <div className="min-w-120 max-w-120 h-full min-h-274 pt-10 px-8 bg-foreaground3 rounded overflow-auto max-lg:min-h-299 max-md:min-w-full max-md:max-w-full max-sm:pt-6 max-sm:px-4 max-[375px]:min-h-274">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl">{!dt ? "Create" : "Edit"} user</h1>
          <Button
            variant="close"
            onClick={() => setShow(false)}
          >
            <Close className="svg-close" />
          </Button>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <label
              className="font-semibold mb-2 block"
              htmlFor="name"
            >
              Name
            </label>

            <Input
              id="name"
              name="name"
              variant="dark"
              value={userData.name}
              onChange={onValueChange}
            />
            <span className="text-sm text-error">{errors.name}</span>
          </div>
          <div>
            <label
              className="font-semibold mb-2 block"
              htmlFor="sname"
            >
              Surname
            </label>
            <Input
              id="sname"
              name="surname"
              variant="dark"
              value={userData.surname}
              onChange={onValueChange}
            />
            <span className="text-sm text-error">{errors.surname}</span>
          </div>
          <div>
            <label
              className="font-semibold mb-2 block"
              htmlFor="uname"
            >
              Username
            </label>
            <Input
              id="uname"
              name="username"
              variant="dark"
              value={userData.username}
              onChange={onValueChange}
            />
            <span className="text-sm text-error">{errors.username}</span>
          </div>
          <div>
            <label
              className="font-semibold mb-2 block"
              htmlFor="email"
            >
              E-mail address
            </label>

            <Input
              id="email"
              name="email"
              type="email"
              variant="dark"
              placeholder="Enter valid address"
              value={userData.email}
              onChange={onValueChange}
            />
            <span className="text-sm text-error">{errors.email}</span>
          </div>
          <div>
            <label
              className="font-semibold mb-2 block"
              htmlFor="bday"
            >
              Birthday date
            </label>
            <Input
              variant="dark"
              id="bday"
              type="date"
              value={getFormatDate(userData.bday!)}
              iconRight={<Calendar className="size-5 text-white" />}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  bday: new Date(e.target.value).toString(),
                }))
              }
            />
            <span className="text-sm text-error">{errors.bday}</span>
          </div>
          <div>
            <label
              className="font-semibold mb-2 block"
              htmlFor="pass"
            >
              Password
            </label>
            <Input
              id="pass"
              name="pass"
              type="password"
              variant="dark"
              value={userData.pass}
              onChange={onValueChange}
            />
            <span className="text-sm text-error">{errors.pass}</span>
          </div>
        </div>
        <Button
          variant="log"
          className="w-[140px] mt-10"
          onClick={receiveData}
        >
          {!dt ? "Create user" : "Save changes"}
        </Button>
      </div>
    </div>
  );
};

export default UserModal;
