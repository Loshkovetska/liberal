import { Logout } from "@/assets/icons";
import AccountBetsHistory from "@/components/features/account/account-bets-history";
import AccountProfile from "@/components/features/account/account-profile";
import AccountAside from "@/components/features/account/account-side";
import AccountTabs from "@/components/features/account/account-tabs";
import Button from "@/components/ui/button";
import { logOut } from "@/stores/user.model";
import { useNavigate } from "react-router";

const AccountPage = ({ type }: { type: "profile" | "bets" }) => {
  const history = useNavigate();
  return (
    <section className="bg-foreaground3 h-full">
      <div className="border-2 border-primary flex items-center justify-between pr-8 max-sm:pr-4 max-[375px]:pr-2">
        <AccountTabs role="user" />
        <Button
          className="max-sm:self-center text-white"
          iconLeft={<Logout className="text-white" />}
          onClick={() => {
            history("/");
            logOut();
          }}
        >
          Logout
        </Button>
      </div>
      {type === "profile" ? (
        <div className="border-2 border-primary flex max-lg:flex-col-reverse">
          <AccountProfile />
          <AccountAside />
        </div>
      ) : (
        <div className="w-full border-2 border-primary">
          <AccountBetsHistory />
        </div>
      )}
    </section>
  );
};

export default AccountPage;
