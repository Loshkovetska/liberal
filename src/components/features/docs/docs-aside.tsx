import { docsItems } from "@/lib/constants/menu";
import { classNames } from "@/lib/utils";
import { Link, useLocation } from "react-router";

export const DocsAside = () => {
  const { pathname } = useLocation();

  return (
    <div className="py-1.5 w-56 h-34 bg-linear-180 from-[#2256a400] to-[#10161B] flex flex-col ml-12 max-lg:py-0 max-lg:w-full max-lg:h-auto max-lg:flex-row max-lg:mb-8 max-lg:ml-0">
      {docsItems.map((m, ind) => (
        <Link
          to={m.to}
          key={ind}
          className={classNames(
            "whitespace-nowrap text-white border-l-4 border-transparent pt-2 px-4 pb-2.5 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] hover:border-secondary max-lg:border-none",
            pathname === m.to && "bg-[rgba(255,255,255,0.2)] border-secondary",
          )}
        >
          {m.title}
        </Link>
      ))}
    </div>
  );
};
