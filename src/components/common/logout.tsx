import { Logout } from "@/assets/icons";
import Button from "@/components/ui/button";
import { logOut } from "@/stores/user.model";
import { useNavigate } from "react-router";

export function LogOut() {
  const history = useNavigate();

  const handleLogout = () => {
    history("/");
    logOut();
  };

  return (
    <Button
      className="max-sm:self-center text-white"
      variant="logout"
      iconLeft={<Logout className="text-white" />}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}
