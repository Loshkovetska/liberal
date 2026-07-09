import UserModal from "@/components/features/admin/user-modal";
import UsersTable from "@/components/features/admin/users-table";
import Button from "@/components/ui/button";
import UserModel, { getUsers } from "@/stores/user.model";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

const UsersList = observer(() => {
  const [show, setShow] = useState(false);
  const { users }: any = UserModel;

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (show) {
      (document.querySelector("#root") as Element).classList.add("menu-open");
    } else
      (document.querySelector("#root") as Element).classList.remove(
        "menu-open",
      );
  }, [show]);

  if (!users) return null;

  return (
    <div className="w-full border-t-2 border-primary flex flex-col pt-6 pb-25 max-xl:px-8">
      <div className="w-full flex items-center justify-between px-8 max-xl:px-0">
        <div className="flex flex-col">
          <span>Users</span>
          <span className="opacity-50">Total: {users.length}</span>
        </div>
        <Button
          variant="orange"
          className="w-[112px]"
          onClick={() => setShow(true)}
        >
          Add user
        </Button>
      </div>
      <UsersTable />
      {show && <UserModal setShow={setShow} />}
    </div>
  );
});

export default UsersList;
