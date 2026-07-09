import { Edit } from "@/assets/icons";
import Input from "@/components/ui/input";
import UserModel from "@/stores/user.model";
import { runInAction } from "mobx";
import { observer } from "mobx-react";
import { useState } from "react";
import { AccountInfo } from "./account-profile";

const AccountAside = observer(() => {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    dayLimit: UserModel.user?.dayLimit || 0,
    monthLimit: UserModel.user?.monthLimit || 0,
    yearLimit: UserModel.user?.yearLimit || 0,
  });

  const list = ["Day limit", "Month limit", "Year limit"];

  const updateData = () => {
    if (edit) {
      runInAction(() => {
        AccountInfo.dayLimit = data.dayLimit;
        AccountInfo.monthLimit = data.monthLimit;
        AccountInfo.yearLimit = data.yearLimit;
      });

      setEdit(false);
    } else setEdit(true);
  };

  const getVal = (t: string): number => {
    switch (t) {
      case "Day limit":
        return data.dayLimit;
      case "Month limit":
        return data.monthLimit;
      case "Year limit":
        return data.yearLimit;
    }

    return 0;
  };

  const changeHandler = (value: string, t: string) => {
    switch (t) {
      case "Day limit":
        setData({
          ...data,
          dayLimit: +value,
        });
        break;
      case "Month limit":
        setData({
          ...data,
          monthLimit: +value,
        });
        break;
      case "Year limit":
        setData({
          ...data,
          yearLimit: +value,
        });
        break;
    }
  };

  return (
    <div className="w-[336px] min-w-[336px] border-2 border-primary max-lg:flex max-lg:grow max-lg:w-full max-lg:min-w-full max-md:flex-col">
      {UserModel.user && (
        <>
          <div className="bg-info border-2 border-primary pt-6 px-6 pb-4">
            <span className="opacity-50">Total balance</span>
            <div className="text-4xl max-sm:text-2xl">
              £
              {UserModel.user.totalBalance
                ?.toLocaleString()
                .split(",")
                .join(".") +
                `${Number.isInteger(UserModel.user.totalBalance) ? ".00" : ""}`}
            </div>
          </div>
          <div className="p-6 relative max-md:grow max-md:flex max-md:justify-evenly max-sm:flex-col">
            <button
              className="cursor-pointer opacity-50 flex items-center gap-2 absolute right-6 hover:opacity-100 max-md:top-6"
              onClick={updateData}
            >
              <Edit /> {!edit ? "Edit" : "Save"}
            </button>
            <div className="flex flex-col gap-6">
              {list.map((it, ind) =>
                !edit ? (
                  <div
                    className="flex flex-col max-lg:w-37.5 max-md:w-62.5 max-sm:w-full"
                    key={ind}
                  >
                    <span className="account-aside__label">{it} </span>
                    <div className="text-2xl max-sm:text-xl">
                      £
                      {getVal(it).toLocaleString() +
                        `${Number.isInteger(getVal(it)) ? ".00" : ""}`}
                    </div>
                  </div>
                ) : (
                  <div
                    className="account-aside__item"
                    key={ind}
                  >
                    <label
                      htmlFor={it}
                      className="account-aside__label"
                    >
                      {it}
                    </label>
                    <Input
                      className="input"
                      type="number"
                      name={it}
                      value={getVal(it)}
                      onChange={(e) => changeHandler(e.target.value, it)}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
});

export default AccountAside;
