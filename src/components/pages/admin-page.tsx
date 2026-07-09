import { LogOut } from "@/components/common/logout";
import AccountTabs from "@/components/features/account/account-tabs";
import Bets from "@/components/features/admin/bets";
import UsersList from "@/components/features/admin/users-list";

const AdminPage = ({ type }: { type: "users" | "bets" }) => {
  return (
    <section className="size-full bg-foreaground3 grow">
      <div className="border-2 border-primary flex items-center justify-between pr-8 max-sm:pr-4 max-[375px]:pr-2">
        <AccountTabs
          role="admin"
          defaultTab={type === "users" ? 0 : 1}
        />
        <LogOut />
      </div>
      {type === "users" ? <UsersList /> : <Bets />}
    </section>
  );
};

export default AdminPage;
