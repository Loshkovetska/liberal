import { Logout } from "@/assets/icons";
import AccountTabs from "@/components/account/AccountTabs";
import Bets from "@/components/admin/Bets";
import UsersList from "@/components/admin/UsersList";
import Button from "@/components/ui/button";
import { logOut } from "@/stores/user.model";
import { useNavigate } from "react-router-dom";

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
