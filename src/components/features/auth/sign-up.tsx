import { Eye } from "@/assets/icons";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useForm } from "@/lib/hooks/use-form";
import { register } from "@/stores/user.model";
import { observer } from "mobx-react";
import { useState } from "react";

const Register = observer(() => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      repeatPass: "",
    },
    rules: {
      username: ["empty"],
      password: ["empty"],
      repeatPass: ["empty", "match_passwords"],
    },
  });

  const [passState, setPassState] = useState(false);
  const [repPassState, setRepPassState] = useState(false);
  const userReg = (values: typeof form.defaultValues) => {
    const { username, password } = values;
    register({
      username,
      password,
    });
  };

  const userData = form.defaultValues;
  const errors = form.errors;

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
            value={userData.password}
            onChange={form.onChange}
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
            name="repeatPass"
            type={!passState ? "password" : "text"}
            value={userData.repeatPass}
            onChange={form.onChange}
            iconRight={<Eye onClick={() => setRepPassState(!repPassState)} />}
          />
          <span className="text-sm text-error">{errors.repeatPass}</span>
        </div>
      </div>
      <Button
        variant="log"
        className="w-[140px] mt-10"
        onClick={form.handleSubmit(userReg)}
      >
        Create account
      </Button>
    </>
  );
});

export default Register;
