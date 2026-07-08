import { ArrowLeft, Close } from "@/assets/icons";
import Button from "@/components/ui/button";
import { emailValidate } from "@/lib/utils";
import { setForgotState, setState } from "@/stores/auth.model";
import { newPass } from "@/stores/user.model";
import { observer } from "mobx-react";
import { useState } from "react";
import "./forgot.scss";

const Forgot = observer(() => {
  const [email, setEmail] = useState({
    text: "",
    error: "",
  });

  const getPass = () => {
    let err = "";
    if (!email.text.length) {
      err = "*Fill field";
    }

    if (!emailValidate(email.text) && email.text.length) {
      err = "*Invalid email";
    }

    if (!err.length) {
      newPass(email.text);
      setEmail({ error: err, text: "" });
    }
    setEmail({ ...email, error: err });
  };

  return (
    <div
      className="auth-modal"
      onClick={() => setForgotState()}
    >
      <div
        className="auth-modal__content forgot"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="forgot__top">
          <Button
            variant="close"
            onClick={() => {
              setForgotState();
              setState();
            }}
          >
            <ArrowLeft className="svg-back" />
          </Button>
          <h1 className="forgot__title">Forgot password?</h1>
          <Button
            variant="close"
            onClick={setForgotState}
          >
            <Close className="svg-close" />
          </Button>
        </div>
        <div className="auth-modal__form">
          <div className="auth-modal__input">
            <label
              htmlFor="name"
              className="auth-modal__label"
            >
              E-mail
            </label>
            <input
              className="input"
              id="name"
              value={email.text}
              type="email"
              onChange={(e) =>
                setEmail({
                  ...email,
                  text: e.target.value,
                })
              }
            />
            <span className="auth-modal__error">{email.error}</span>
          </div>
          <Button
            variant="log"
            className="w-45"
            onClick={getPass}
          >
            Send new password
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Forgot;
