import Button from "@/components/ui/button";
import UserModel, { getUsers } from "@/stores/user.model";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import UserModal from "../UserModal";
import UsersTable from "../UsersTable";
import "./usersList.scss";

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

  if (!users) {
    return <></>;
  }

  return (
    <div className="users">
      <div className="users__top">
        <div className="users__top-col">
          <span className="users__title">Users</span>
          <span className="users__count">Total: {users.length}</span>
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
      {show && (
        <UserModal
          setShow={setShow}
          mode="add"
        />
      )}
    </div>
  );
});

export default UsersList;
