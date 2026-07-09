import { Edit, Trash } from "@/assets/icons";
import { BetHistoryTh } from "@/components/features/admin/bets-table";
import { tableEngDate } from "@/lib/utils";
import { User, UsersSortBy } from "@/stores/types";
import UserModel, { deleteUser, getUsers } from "@/stores/user.model";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

const UsersTable = observer(({ onSelect }: { onSelect: (v: User) => void }) => {
  const { users } = UserModel;

  const [sortBy, setSortBy] = useState<{
    sortBy: UsersSortBy | null;
    sortAsc: boolean;
  }>({
    sortBy: null,
    sortAsc: false,
  });

  const theads = [
    {
      title: "User",
      action: (state: boolean) => {
        setSortBy({ sortBy: "user", sortAsc: state });
      },
    },
    {
      title: "Login",
      action: (state: boolean) => {
        setSortBy({ sortBy: "login", sortAsc: state });
      },
    },
    {
      title: "E-mail",
      action: (state: boolean) => {
        setSortBy({ sortBy: "email", sortAsc: state });
      },
    },
    {
      title: "Birthday date",
      action: (state: boolean) => {
        setSortBy({ sortBy: "bdate", sortAsc: state });
      },
    },
    {
      title: "User balance",
      action: (state: boolean) => {
        setSortBy({ sortBy: "balance", sortAsc: state });
      },
    },
  ];

  useEffect(() => {
    getUsers(sortBy);
  }, [sortBy]);

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
      {users?.length > 0 ? (
        users.map((u: User) => (
          <UserRow
            u={u}
            key={u.id}
            onSelect={() => onSelect(u)}
          />
        ))
      ) : (
        <div className="flex items-center justify-between px-8">No data</div>
      )}
    </div>
  );
});

export default UsersTable;

const UserRow = ({ u, onSelect }: { u: User; onSelect: () => void }) => {
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
          onClick={onSelect}
        />
        <Trash
          className="opacity-50 hover:opacity-100 cursor-pointer size-5"
          onClick={() => deleteUser(u.id)}
        />
      </div>
    </div>
  );
};
