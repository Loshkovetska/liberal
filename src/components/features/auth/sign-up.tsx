import { Eye } from "@/assets/icons";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { register } from "@/stores/user.model";
import { observer } from "mobx-react";
import { useState } from "react";

const Register = observer(() => {
  const [userData, setData] = useState({
    username: "",
    password: "",
    repeatPass: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    repeatPass: "",
  });

  const [passState, setPassState] = useState(false);
  const [repPassState, setRepPassState] = useState(false);
  const userReg = () => {
    const errs = {
      username: "",
      password: "",
      repeatPass: "",
    };
    const { username, password, repeatPass } = userData;
    if (!username.length) {
      errs.username = "*Fill field";
    }

    if (!password.length) {
      errs.password = "*Fill field";
    }

    if (!repeatPass.length) {
      errs.repeatPass = "*Fill field";
    }

    if (repeatPass !== password && repeatPass.length) {
      errs.repeatPass = "*Password mismatch";
    }

    setErrors({
      ...errs,
    });

    if (
      !errs.username.length &&
      !errs.password.length &&
      !errs.repeatPass.length
    ) {
      register({
        username,
        password,
      });
    }
  };

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="font-semibold mb-2"
          >
            Username
          </label>
          <Input
            id="name"
            name="name"
            value={userData.username}
            onChange={onValueChange}
          />
          <span className="text-sm text-error">{errors.username}</span>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="font-semibold mb-2"
          >
            Password
          </label>
          <Input
            id="password"
            name="password"
            type={!passState ? "password" : "text"}
            value={userData.password}
            onChange={onValueChange}
            iconRight={<Eye onClick={() => setPassState(!passState)} />}
          />
          <span className="text-sm text-error">{errors.password}</span>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="reppassword"
            className="font-semibold mb-2"
          >
            Re-enter password
          </label>
          <Input
            id="reppassword"
            name="reppassword"
            type={!passState ? "password" : "text"}
            value={userData.repeatPass}
            onChange={onValueChange}
            iconRight={<Eye onClick={() => setRepPassState(!repPassState)} />}
          />
          <span className="text-sm text-error">{errors.repeatPass}</span>
        </div>
      </div>
      <Button
        variant="log"
        className="w-[140px] mt-10"
        onClick={userReg}
      >
        Create account
      </Button>
    </>
  );
});

export default Register;
