import { emailValidate, isEmpty } from "@/lib/utils";
import { useState } from "react";

type UseFormParams<T> = {
  defaultValues: T;
  rules: {
    [K in keyof T]: ("email" | "empty" | "optional" | "match_passwords")[];
  };
};
type FormErrors<T> = { [K in keyof T]: string | undefined };

export function useForm<T>({ defaultValues, rules }: UseFormParams<T>) {
  const [form, setForm] = useState({
    defaultValues,
    errors: {} as FormErrors<T>,
  });

  const reset = () => {
    setForm((prev) => ({ ...prev, defaultValues: {} as T }));
  };

  const isError = (key: string, v: any) => {
    const rule = rules[key];
    if (rule.includes("empty") && isEmpty(v)) {
      return true;
    }
    if (rule.includes("email") && !emailValidate(v)) {
      return true;
    }
    if (
      rule.includes("match_passwords") &&
      form.defaultValues[key] !== form.defaultValues["password"]
    )
      return true;

    return false;
  };

  const handleSubmit = (cb: Function) => () => {
    const errors = {} as FormErrors<T>;
    Object.entries(form.defaultValues).forEach(([key, v]) => {
      const invalid = isError(key, v);
      errors[key] = invalid
        ? key === "email"
          ? "Invalid email"
          : rules[key].includes("match_passwords")
            ? "*Password mismatch"
            : "*Fill field"
        : "";
    });
    const valid = Object.values(errors).every((d) => !(d as string).length);
    if (!valid) {
      setForm((prev) => ({ ...prev, errors }));
      return;
    }
    cb(form.defaultValues);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isDate = e.target.type === "date";
    setForm((prev) => ({
      ...prev,
      defaultValues: {
        ...prev.defaultValues,
        [e.target.name]: isDate
          ? new Date(e.target.value).toString()
          : e.target.value,
      },
    }));
  };

  const setValue = (key: keyof T, value: any) => {
    setForm((prev) => ({
      ...prev,
      defaultValues: {
        ...prev.defaultValues,
        [key]: value,
      },
    }));
  };

  return {
    ...form,
    reset,
    handleSubmit,
    onChange,
    setValue,
  };
}
