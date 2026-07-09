import { Calendar, Close } from "@/assets/icons";
import Button from "@/components/ui/button";
import { classNames, getFormatDate } from "@/lib/utils";

import Input from "@/components/ui/input";
import { useClickOutside } from "@/lib/hooks/use-click-outside";
import { useForm } from "@/lib/hooks/use-form";
import { User } from "@/stores/types";
import { addUser, updateUserByParams } from "@/stores/user.model";
import { useRef } from "react";

const UserModal = ({
  open,
  onOpenChange,
  dt,
}: {
  open: boolean;
  onOpenChange: (val: boolean) => void;
  dt?: User;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const form = useForm({
    defaultValues: {
      name: dt?.name ?? "",
      surname: dt?.surname ?? "",
      username: dt?.userName ?? "",
      email: dt?.email ?? "",
      bday: dt?.birthDate ?? "",
      password: dt?.password ?? "",
    },
    rules: {
      name: ["empty"],
      surname: ["empty"],
      username: ["empty"],
      email: ["empty", "email"],
      bday: ["empty"],
      password: ["empty"],
    },
  });
  const receiveData = (values: typeof form.defaultValues) => {
    if (!dt) {
      addUser(values);
    } else updateUserByParams(dt!.id, values);

    onOpenChange(false);
  };

  const userData = form.defaultValues;
  const errors = form.errors as typeof form.defaultValues;

  useClickOutside(open, modalRef, () => onOpenChange(false));

  return (
    <div
      ref={modalRef}
      className={classNames(
        "fixed size-screen bg-[rgba(16,22,27,0.8)] top-20 left-0 overflow-auto flex justify-end max-sm:top-15 -translate-x-full",
        open && "translate-x-0",
      )}
    >
      <div className="min-w-120 max-w-120 h-full min-h-274 pt-10 px-8 bg-foreaground3 rounded overflow-auto max-lg:min-h-299 max-md:min-w-full max-md:max-w-full max-sm:pt-6 max-sm:px-4 max-[375px]:min-h-274">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl">{!dt ? "Create" : "Edit"} user</h1>
          <Button
            variant="close"
            onClick={() => onOpenChange(false)}
          >
            <Close className="size-6" />
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
              onChange={form.onChange}
            />
            <span className="text-sm text-error">{errors?.name}</span>
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
              onChange={form.onChange}
            />
            <span className="text-sm text-error">{errors?.surname}</span>
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
              onChange={form.onChange}
            />
            <span className="text-sm text-error">{errors?.username}</span>
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
              onChange={form.onChange}
            />
            <span className="text-sm text-error">{errors?.email}</span>
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
              onChange={form.onChange}
            />
            <span className="text-sm text-error">{errors?.bday}</span>
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
              name="password"
              type="password"
              variant="dark"
              value={userData.password}
              onChange={form.onChange}
            />
            <span className="text-sm text-error">{errors?.password}</span>
          </div>
        </div>
        <Button
          variant="log"
          className="w-[140px] mt-10"
          onClick={form.handleSubmit(receiveData)}
        >
          {!dt ? "Create user" : "Save changes"}
        </Button>
      </div>
    </div>
  );
};

export default UserModal;
