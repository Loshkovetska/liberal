import { Eye, Google } from "@/assets/icons";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { setForgotState, setState } from "@/stores/auth.model";
import { login } from "@/stores/user.model";
import { useState } from "react";

const Login = () => {
  const [userData, setData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [passState, setPassState] = useState(false);

  const userLog = () => {
    const errs = {
      username: "",
      password: "",
    };
    const { username, password } = userData;
    if (!username.length) {
      errs.username = "*Fill field";
    }

    if (!password.length) {
      errs.password = "*Fill field";
    }

    setErrors({
      ...errs,
    });

    if (!errs.username.length && !errs.password.length) {
      login({
        username,
        password,
      });
    }
  };

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <button className="flex items-center mb-8 gap-4">
        <Google /> Sign in with google
      </button>
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
            iconRight={
              <Eye
                onClick={() => setPassState(!passState)}
                className="svg-eye"
              />
            }
            value={userData.password}
            onChange={onValueChange}
          />
          <span className="text-sm text-error">{errors.password}</span>
        </div>
      </div>
      <button
        className="block text-secondary mt-4"
        onClick={() => {
          setState();
          setForgotState();
        }}
      >
        Forgot password?
      </button>
      <Button
        variant="log"
        className="w-[140px] mt-10"
        onClick={userLog}
      >
        Login
      </Button>
    </>
  );
};

export default Login;
