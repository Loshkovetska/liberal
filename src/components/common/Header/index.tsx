import Menu from "@/components/common/header/header-menu";
import UserHeader from "@/components/common/header/user-header";
import Logo from "@/components/common/logo";
import Button from "@/components/ui/button";
import { authModel } from "@/stores/auth.model";
import { getState } from "@/stores/user.model";
import { observer } from "mobx-react";
import { useLocation } from "react-router";

const Header = observer(() => {
  const { pathname } = useLocation();
  const { user } = getState();
  const excludeUrls = ["account", "users", "bets", "404", "policy"];
  const isMenuVisible = excludeUrls.some((e) => pathname.includes(e));
  return (
    <header className="w-full h-20 bg-primary2 flex items-center justify-between pr-4 relative max-sm:h-15">
      <div className="flex">
        {!isMenuVisible && <Menu />}
        <Logo />
      </div>
      {!user ? (
        <Button
          variant="log"
          onClick={authModel.setState}
        >
          Login
        </Button>
      ) : (
        <UserHeader />
      )}
    </header>
  );
});

export default Header;
