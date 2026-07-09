import UserModal from "@/components/features/admin/user-modal";
import UsersTable from "@/components/features/admin/users-table";
import Button from "@/components/ui/button";
import { User } from "@/stores/types";
import UserModel from "@/stores/user.model";
import { observer } from "mobx-react";
import { useState } from "react";

const UsersList = observer(() => {
  const [isOpen, setOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User>(null);
  const { users } = UserModel;

  const onSelect = (u: User) => {
    setUserToEdit(u);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setUserToEdit(null);
  };

  return (
    <div className="w-full border-t-2 border-primary flex flex-col pt-6 pb-25 max-xl:px-8">
      <div className="w-full flex items-center justify-between px-8 max-xl:px-0">
        <div className="flex flex-col">
          <span>Users</span>
          <span className="opacity-50">Total: {users?.length ?? 0}</span>
        </div>
        <Button
          variant="orange"
          className="w-[112px]"
          onClick={() => setOpen(true)}
        >
          Add user
        </Button>
      </div>
      <UsersTable onSelect={onSelect} />
      <UserModal
        open={isOpen}
        dt={userToEdit}
        onOpenChange={onClose}
      />
    </div>
  );
});

export default UsersList;
