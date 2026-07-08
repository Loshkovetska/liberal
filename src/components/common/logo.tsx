import logo from "@/assets/images/logo.png";
import { Link } from "react-router";

export default function Logo() {
  return (
    <Link
      className="w-20.5 h-20 max-sm:w-16.25 max-sm:h-15"
      to="/"
    >
      <img
        src={logo}
        alt="main-logo"
        className="size-full"
      />
    </Link>
  );
}
