import { Eye, Google } from "@/assets/icons";
import Button from "@/components/ui/button";
import { setForgotState, setState } from "@/stores/auth.model";
import { login } from "@/stores/user.model";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="auth-modal__form">
        <a
          href="#"
          className="auth-modal__google"
        >
          <Google /> Sign in with google
        </a>
        <div className="auth-modal__input">
          <label
            htmlFor="name"
            className="auth-modal__label"
          >
            Username
          </label>
          <input
            className="input"
            id="name"
            value={userData.username}
            onChange={(e) =>
              setData({
                ...userData,
                username: e.target.value,
              })
            }
          />
          <span className="auth-modal__error">{errors.username}</span>
        </div>
        <div className="auth-modal__input">
          <label
            htmlFor="password"
            className="auth-modal__label"
          >
            Password
          </label>
          <div className="auth-modal__pass">
            <input
              className="input"
              id="password"
              type={!passState ? "password" : "text"}
              value={userData.password}
              onChange={(e) =>
                setData({
                  ...userData,
                  password: e.target.value,
                })
              }
            />
            <Eye
              onClick={() => setPassState(!passState)}
              className="svg-eye"
            />
          </div>
          <span className="auth-modal__error">{errors.password}</span>
        </div>
        <Link
          to="#"
          className="auth-modal__link"
          onClick={() => {
            setState();
            setForgotState();
          }}
        >
          Forgot password?
        </Link>
        <Button
          variant="log"
          className="button--w-[140px]"
          onClick={userLog}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default Login;
