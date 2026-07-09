import { ArrowDown as Arrow, User as UserSvg } from "@/assets/icons";
import { adminMenuItems, userMenuItems } from "@/lib/constants/menu";
import { useClickOutside } from "@/lib/hooks/use-click-outside";
import { classNames } from "@/lib/utils";
import UserModel from "@/stores/user.model";
import { observer } from "mobx-react";
import { useRef, useState } from "react";
import { Link } from "react-router";

function UserHeader() {
  const { user } = UserModel;
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(show, ref, () => setShow(false));

  const getList = () => {
    if (user?.role === "admin") {
      return adminMenuItems;
    } else return userMenuItems;
  };
  return (
    <div className="flex items-center ml-8">
      {user?.role === "user" && (
        <div className="size-12 min-w-12 max-w-12 rounded-full mr-4 max-sm:size-9 max-sm:min-w-9 max-sm:max-w-9 max-sm:mr-2">
          {user?.avatar ? (
            <img
              src={user?.avatar}
              className="size-full rounded-full"
            />
          ) : (
            <UserSvg />
          )}
        </div>
      )}
      <div ref={ref}>
        <div
          className="flex items-center gap-2 max-sm:gap-1"
          onClick={() => setShow(!show)}
        >
          <span className="max-sm:text-xs">
            {user?.role === "user"
              ? `${user?.name} ${user?.surname}`
              : `${user?.userName}`}
          </span>
          <Arrow className={classNames(show && "rotate-z-180")} />
        </div>
        {show && (
          <div className="flex flex-col absolute z-1 top-20 right-0 bg-primary2 w-40">
            {getList().map((it) => (
              <Link
                to={it.link}
                className="px-5 py-3 cursor-pointer shadow-link hover:bg-secondary hover:text-primary max-sm:top-15 max-sm:text-xs"
                key={it.link}
                onClick={() => setShow(false)}
              >
                {it.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default observer(UserHeader);
