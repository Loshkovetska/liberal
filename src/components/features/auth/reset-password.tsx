import { ArrowLeft, Close } from "@/assets/icons";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { emailValidate } from "@/lib/utils";
import { setForgotState, setState } from "@/stores/auth.model";
import { newPass } from "@/stores/user.model";
import { observer } from "mobx-react";
import { useState } from "react";

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
      className="w-screen h-screen bg-[rgba(16,22,27,0.8)] fixed overflow-auto inset-0"
      onClick={() => setForgotState()}
    >
      <div
        className="w-120 absolute left-1/2 top-1/2 -translate-1/2 bg-foreaground3 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pt-6 px-6 pb-3 border-b-4 border-primary">
          <Button
            variant="close"
            onClick={() => {
              setForgotState();
              setState();
            }}
          >
            <ArrowLeft className="size-6" />
          </Button>
          <h1 className="text-xl max-sm:text-lg">Forgot password?</h1>
          <Button
            variant="close"
            onClick={setForgotState}
          >
            <Close className="size-6" />
          </Button>
        </div>
        <div className="px-8 pt-8 pb-10 bg-foreaground3 max-sm:px-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-semibold mb-2"
            >
              E-mail
            </label>
            <Input
              id="name"
              value={email.text}
              type="email"
              name="email"
              onChange={(e) =>
                setEmail({
                  ...email,
                  text: e.target.value,
                })
              }
            />
            <span className="text-sm text-error">{email.error}</span>
          </div>
          <Button
            variant="log"
            className="w-45 mt-10"
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
