import { Edit, Trash } from "@/assets/icons";
import { BetHistoryTh } from "@/components/features/account/account-bets-history";
import { sortByName, sortByNumber, tableEngDate } from "@/lib/utils";
import { User } from "@/stores/types";
import UserModel, { deleteUser } from "@/stores/user.model";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import UserModal from "./user-modal";

const UsersTable = observer(() => {
  const { users } = UserModel;
  const [data, setData] = useState<any>(JSON.parse(JSON.stringify(users)));
  const theads = [
    {
      title: "User",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a: User, b: User) =>
            sortByName(a.name!, b.name!),
          );
          if (!state) {
            res.reverse();
          }

          setData([...res]);
        }
      },
    },
    {
      title: "Login",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a: User, b: User) =>
            sortByName(a.userName!, b.userName!),
          );
          if (!state) {
            res.reverse();
          }

          setData([...res]);
        }
      },
    },
    {
      title: "E-mail",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a: User, b: User) =>
            sortByName(a.email!, b.email!),
          );
          if (!state) {
            res.reverse();
          }

          setData([...res]);
        }
      },
    },
    {
      title: "Birthday date",
      action: (state: boolean) => {
        if (data) {
          const res: any = data.sort((a: User, b: User) =>
            sortByNumber(
              new Date(a.birthDate!).getTime(),
              new Date(b.birthDate!).getTime(),
              state,
            ),
          );
          setData([...res]);
        }
      },
    },
    {
      title: "User balance",
      action: (state: boolean) => {
        if (data) {
          const res: any = data.sort((a: User, b: User) =>
            sortByNumber(a.totalBalance!, b.totalBalance!, state),
          );
          setData([...res]);
        }
      },
    },
  ];

  useEffect(() => {
    setData(users);
  }, [users]);

  return (
    <div className="mt-8 max-xl:w-full max-xl:overflow-x-auto max-xl:pb-6">
      <div className="grid grid-cols-[200px_160px_260px_220px_120px_50px] px-8 justify-between max-xl:w-272.5 max-xl:px-0 max-xl:grid-cols-[220px_160px_260px_220px_120px_50px]">
        {theads.map((th) => (
          <BetHistoryTh
            key={th.title}
            title={th.title}
            action={th.action}
          />
        ))}
        <div className="flex items-center gap-2 text-nowrap font-bold pb-2" />
      </div>
      {data?.length > 0 ? (
        data.map((u: User) => (
          <UserRow
            u={u}
            key={u.id}
          />
        ))
      ) : (
        <div className="flex items-center justify-between px-8">No data</div>
      )}
    </div>
  );
});

export default UsersTable;

const UserRow = ({ u }: { u: User }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      (document.querySelector("#root") as Element).classList.add("menu-open");
    } else
      (document.querySelector("#root") as Element).classList.remove(
        "menu-open",
      );
  }, [show]);

  return (
    <div className="grid grid-cols-[200px_160px_260px_220px_120px_50px] max-xl:w-272.5 max-xl:px-0 max-xl:grid-cols-[220px_160px_260px_220px_120px_50px] px-8 py-4 justify-between border-t border-foreaground5 last:border-b">
      <div className="text-base">{`${u.name} ${u.surname}`}</div>
      <div className="text-base">{u.userName}</div>
      <div className="text-base">{u.email}</div>
      <div className="text-base">{tableEngDate(u.birthDate!)}</div>
      <div className="text-base">£{u.totalBalance?.toFixed(2)}</div>
      <div className="text-base flex items-center gap-2">
        <Edit
          className="opacity-50 hover:opacity-100 cursor-pointer size-5"
          onClick={() => setShow(true)}
        />
        <Trash
          className="opacity-50 hover:opacity-100 cursor-pointer size-5"
          onClick={() => deleteUser(u.id)}
        />
      </div>

      {show && (
        <UserModal
          setShow={setShow}
          dt={u}
        />
      )}
    </div>
  );
};
