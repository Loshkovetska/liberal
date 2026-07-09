import Search from "@/components/common/search";
import { useClickOutside } from "@/lib/hooks/use-click-outside";
import { classNames } from "@/lib/utils";
import MatchModel, { getMatches } from "@/stores/match.model";
import { menuModel } from "@/stores/menu.model";
import SportEventModel, { getSportEvents } from "@/stores/sevent.model";
import { observer } from "mobx-react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const MainAside = observer(() => {
  const asideRef = useRef<HTMLDivElement>(null);
  const { sportEvents } = SportEventModel;
  const { matches } = MatchModel;
  const menuState = menuModel.getState();
  const { pathname } = useLocation();

  useEffect(() => {
    getMatches(null);
    getSportEvents("Cricket");
  }, []);

  const eventTitle = matches?.find(
    (m) => m.id.toString() === pathname.split("/").pop(),
  )?.section;

  const getCount = (title: string) => {
    let count = 0;
    if (matches) {
      count = matches.filter((m) => m.section === title).length;
    }
    return count;
  };

  useClickOutside(menuState.isOpen, asideRef, menuModel.setState);

  return (
    <aside
      ref={asideRef}
      className="min-w-56 max-w-56 max-xl:min-w-full max-xl:max-w-full max-xl:mb-4 flex flex-col relative"
    >
      <Search />
      <div
        className={classNames(
          "mt-4 bg-linear-180 from-[#2256a400] to-primary py-4 pr-3 grow max-xl:invisible max-xl:z-1 max-xl:absolute max-xl:-left-4 max-xl:-top-4 transition-all duration-500 max-xl:mt-0 max-xl:-translate-y-full",
          menuState.isOpen && "max-xl:visible max-xl:translate-0",
        )}
      >
        <h2 className="text-lg text-white pl-4 max-sm:text-base">
          {sportEvents?.title}
        </h2>
        <div className="main-aside__list">
          {sportEvents?.list.map((item) => (
            <div
              className={classNames(
                "p-4 pr-0 mt-4 flex justify-between border-l-4 border-transparent group max-xl:pr-4 max-xl:mt-0",
                eventTitle === item.title && "border-secondary",
              )}
              key={item.id}
            >
              <span className="text-white group-hover:text-secondary block w-[160px] max-xl:w-[90%] max-sm:text-sm">
                {item.title}
              </span>
              <span className="text-white/50 max-sm:text-sm max-sm:-top-2">
                {getCount(item.title)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
});

export default MainAside;
