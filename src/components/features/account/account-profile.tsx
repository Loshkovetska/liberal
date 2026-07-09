import { Calendar, Edit, Google, User as UserSvg } from "@/assets/icons";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useForm } from "@/lib/hooks/use-form";
import { getFormatDate } from "@/lib/utils";
import UserModel, { updateUser } from "@/stores/user.model";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { useState } from "react";

export const AccountInfo = observable({
  dayLimit: UserModel.user?.dayLimit || 0,
  monthLimit: UserModel.user?.monthLimit || 0,
  yearLimit: UserModel.user?.yearLimit || 0,
});

const AccountProfile = observer(() => {
  const form = useForm({
    defaultValues: {
      avatar: UserModel.user?.avatar || "",
      name: UserModel.user?.name || "",
      surname: UserModel.user?.surname || "",
      userName: UserModel.user?.userName || "",
      email: UserModel.user?.email || "",
      password: UserModel.user?.password || "",
      birthDate: UserModel.user?.birthDate || "",
      googleAccount: "",
    },
    rules: {
      avatar: ["optional"],
      name: ["empty"],
      surname: ["empty"],
      userName: ["empty"],
      email: ["empty", "email"],
      password: ["empty"],
      birthDate: ["empty"],
      googleAccount: ["optional"],
    },
  });

  const [passRead, setRead] = useState(true);

  const connectGoogle = () => {};

  const updateData = (values: typeof form.defaultValues) => {
    updateUser(UserModel.user!.id, {
      ...values,
      dayLimit: AccountInfo.dayLimit,
      monthLimit: AccountInfo.monthLimit,
      yearLimit: AccountInfo.yearLimit,
    });
  };

  const fileHandler = (list: FileList | null) => {
    var reader = new FileReader();
    if (list) {
      var url = reader.readAsDataURL(list[0]);
      reader.onloadend = function () {
        form.setValue("avatar", reader.result!.toString());
      };
    }
  };

  const userData = form.defaultValues;
  const errors = form.errors;

  return (
    <div className="grow border-2 border-primary">
      <div className="pt-3 px-8 pb-10 flex items-center max-md:px-4 max-sm:items-start max-sm:flex-col">
        <div className="relative pr-4 mt-6 mr-8">
          <div className="size-18 min-w-18 max-w-18 rounded-full bg-white flex items-center justify-center">
            {userData.avatar ? (
              <img
                src={userData.avatar}
                className="size-full rounded-full"
              />
            ) : (
              <UserSvg />
            )}
          </div>
          <label
            className="cursor-pointer size-8 min-w-8 max-w-8 flex items-center bg-secondary justify-center absolute bottom-0 right-0 rounded-full"
            htmlFor="avatar"
          >
            <Edit />
            <input
              className="invisible absolute inset-0 size-0"
              type="file"
              id="avatar"
              onChange={(e) => fileHandler(e.target.files)}
            />
          </label>
        </div>
        <div className="flex flex-wrap grow gap-8">
          <div className="mt-6 max-w-[308px] w-[308px] grow flex flex-col max-md:max-w-[250px] max-md:w-[250px] max-sm:max-w-full max-sm:w-full">
            <label
              htmlFor="name"
              className="font-semibold mb-2 opacity-50 hover:opacity-100 max-sm:flex max-sm:justify-between"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={userData.name}
              onChange={form.onChange}
            />
            <span className="text-sm text-error">{errors.name}</span>
          </div>
          <div className="mt-6 max-w-[308px] w-[308px] grow flex flex-col max-md:max-w-[250px] max-md:w-[250px] max-sm:max-w-full max-sm:w-full">
            <label
              htmlFor="surname"
              className="font-semibold mb-2 opacity-50 hover:opacity-100 max-sm:flex max-sm:justify-between"
            >
              Surname
            </label>
            <Input
              id="surname"
              name="surname"
              value={userData.surname}
              onChange={form.onChange}
            />
            <span className="text-sm text-error">{errors.surname}</span>
          </div>
        </div>
      </div>
      <div className="px-8 pb-8 border-t border-b border-foreaground5 max-md:flex max-md:flex-col max-md:px-6">
        <div className="flex flex-wrap grow gap-6">
          <div className="mt-6 max-w-[308px] w-[308px] grow flex flex-col max-md:max-w-[250px] max-md:w-[250px] max-sm:max-w-full max-sm:w-full">
            <label
              htmlFor="username"
              className="font-semibold mb-2 opacity-50 hover:opacity-100 max-sm:flex max-sm:justify-between"
            >
              Username
            </label>
            <Input
              id="username"
              name="userName"
              value={userData.userName}
              onChange={form.onChange}
            />
            <span className="text-sm text-error">{errors.userName}</span>
          </div>
          <div className="mt-6 max-w-[308px] w-[308px] grow flex flex-col max-md:max-w-[250px] max-md:w-[250px] max-sm:max-w-full max-sm:w-full">
            <label
              htmlFor="email"
              className="font-semibold mb-2 opacity-50 hover:opacity-100 max-sm:flex max-sm:justify-between"
            >
              E-mail address
            </label>
            <Input
              id="email"
              name="email"
              value={userData.email}
              onChange={form.onChange}
            />
            <span className="text-sm text-error">{errors.email}</span>
          </div>
          <div className="mt-6 max-w-[308px] w-[308px] grow flex flex-col max-md:max-w-[250px] max-md:w-[250px] max-sm:max-w-full max-sm:w-full">
            <label
              htmlFor="birthDate"
              className="font-semibold mb-2 opacity-50 hover:opacity-100 max-sm:flex max-sm:justify-between"
            >
              Birthday date
            </label>
            <Input
              type="date"
              variant="light"
              id="birthDate"
              value={getFormatDate(userData.birthDate)}
              onChange={form.onChange}
              iconRight={<Calendar className="size-5 text-primary" />}
            />
            <span className="text-sm text-error">{errors.birthDate}</span>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex">
            <div className="w-[308px] max-md:max-w-[250px] max-md:w-[250px] max-sm:max-w-full max-sm:w-full">
              <label
                htmlFor="password"
                className="font-semibold mb-2 opacity-50 hover:opacity-100 flex justify-between"
              >
                Password
                <button
                  className="flex gap-2 items-center"
                  onClick={() => setRead(!passRead)}
                >
                  <Edit />
                  {passRead ? "Edit" : "Save"}
                </button>
              </label>
              <Input
                id="password"
                name="password"
                value={userData.password}
                readOnly={passRead}
                onChange={form.onChange}
              />
            </div>
            <button
              className="cursor-pointer mt-4 self-center flex items-center h-12 opacity-50 text-xs ml-6 max-sm:hidden"
              onClick={() => setRead(!passRead)}
            >
              <Edit /> {passRead ? "Edit" : "Save"} password
            </button>
          </div>
          <span className="text-sm text-error">{errors.password}</span>
        </div>
      </div>
      <div className="flex justify-between pt-6 px-8 pb-8 max-sm:flex-col">
        <div>
          <span className="font-semibold mb-2 opacity-50 hover:opacity-100 max-sm:flex max-sm:justify-between">
            Linked accounts
          </span>
          <div className="flex items-center mt-3 gap-4">
            <Google /> Sign in with google
          </div>
        </div>

        <Button
          variant="orange-border"
          className="w-27! self-end max-sm:self-start max-sm:mt-6"
          onClick={connectGoogle}
        >
          Connect
        </Button>
      </div>
      <div className="border-t border-foreaground5 pt-8 px-8 pb-10 flex justify-end items-center">
        <Button
          variant="orange"
          className="w-35! max-sm:w-full!"
          onClick={form.handleSubmit(updateData)}
        >
          Save changes
        </Button>
      </div>
    </div>
  );
});

export default AccountProfile;
