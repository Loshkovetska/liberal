import { Eye, Google } from "@/assets/icons";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useForm } from "@/lib/hooks/use-form";
import { setForgotState, setState } from "@/stores/auth.model";
import { login } from "@/stores/user.model";
import { useState } from "react";

const Login = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    rules: {
      username: ["empty"],
      password: ["empty"],
    },
  });

  const [passState, setPassState] = useState(false);

  const userLog = (values: typeof form.defaultValues) => {
    login(values);
  };

  const userData = form.defaultValues;
  const errors = form.errors;

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
            name="username"
            value={userData.username}
            onChange={form.onChange}
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
            onChange={form.onChange}
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
        onClick={form.handleSubmit(userLog)}
      >
        Login
      </Button>
    </>
  );
};

export default Login;
