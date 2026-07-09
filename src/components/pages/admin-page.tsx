import { Logout } from "@/assets/icons";
import AccountTabs from "@/components/features/account/account-tabs";
import Bets from "@/components/features/admin/bets";
import UsersList from "@/components/features/admin/users-list";
import Button from "@/components/ui/button";
import { logOut } from "@/stores/user.model";
import { useNavigate } from "react-router";

const AdminPage = ({ type }: { type: "users" | "bets" }) => {
  const history = useNavigate();
  return (
    <section className="size-full bg-foreaground3">
      <div className="border-2 border-primary flex items-center justify-between pr-8 max-sm:pr-4 max-[375px]:pr-2">
        <AccountTabs role="admin" />
        <Button
          className="max-sm:self-center"
          variant="logout"
          iconLeft={<Logout />}
          onClick={() => {
            history("/");
            logOut();
          }}
        >
          Logout
        </Button>
      </div>
      {type === "users" ? <UsersList /> : <Bets />}
    </section>
  );
};

export default AdminPage;
