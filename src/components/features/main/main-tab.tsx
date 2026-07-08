import { classNames, getDate } from "@/lib/utils";
import MatchModel, { getMatches } from "@/stores/match.model";
import { Match } from "@/stores/types";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const MainTab = observer(() => {
  const list = ["All matches", "In-play", "Today", "Tomorrow"];
  const [activeTab, setTab] = useState(list[0]);
  return (
    <div className="mt-4">
      <div className="flex border border-[rgba(243, 243, 243, 0.1)] mb-4 w-fit max-lg:w-auto">
        {list.map((l) => (
          <button
            className={classNames(
              "w-55.5 cursor-pointer h-10 text-xs text-center flex items-center justify-center border-l border-[rgba(243, 243, 243, 0.1)]",
              l === activeTab
                ? "bg-secondary text-primary border-secondary"
                : "bg-transparent text-white",
            )}
            key={l}
            onClick={() => setTab(l)}
          >
            {l}
          </button>
        ))}
      </div>
      <MainTabContent content={activeTab} />
    </div>
  );
});

const MainTabContent = observer(({ content }: { content: any }) => {
  const [data, setData] = useState<Match[] | null>(Array<Match>());
  const { matches } = MatchModel;

  const markets = ["L", "MO", "F", "BM", "M", "CM", "O"];

  useEffect(() => {
    getMatches(content);
  }, [content]);

  useEffect(() => {
    if (matches && matches.length) setData(matches);
  }, [matches]);

  const getRate = (r: any, d: any) => {
    let count = 0;
    d.markets.forEach((rate: any) => {
      if (rate.title === r) {
        count = rate.count;
        return;
      }
    });

    return count;
  };

  return (
    <div className="w-full">
      <div className="cursor-pointer flex max-md:flex-col">
        <div className="grid grid-cols-3">
          <span className="pb-1 flex justify-center items-center text-sm text-white/50">
            1
          </span>
          <span className="pb-1 flex justify-center items-center text-sm text-white/50">
            X
          </span>
          <span className="pb-1 flex justify-center items-center text-sm text-white/50">
            2
          </span>
        </div>
      </div>
      {data?.length ? (
        data.map((d, ind) => (
          <Link
            className="cursor-pointer flex max-md:flex-col group"
            key={ind}
            to={`/event/${d.id}`}
          >
            <div className="flex bg-foreaground3 grow pt-2 pb-1.5 px-4 border-2 border-primary group-hover:bg-foreaground4">
              <div className="grow flex flex-col">
                <span className="text-white text-sm">{d.title}</span>
                <span
                  className={classNames(
                    "text-xs",
                    d.inPlay ? "text-success" : "text-white/50",
                  )}
                >
                  {d.inPlay ? "in-Play" : getDate(d.dateTime)}
                </span>
              </div>
              <div className="flex items-center">
                {markets &&
                  markets.map((r, index) => (
                    <div
                      className={classNames(
                        "text-xs font-bold  relative mr-4 flex items-center justify-center",
                        getRate(r, d) ? "text-white" : "text-white/15",
                      )}
                      key={index}
                    >
                      {r}
                      <span
                        className={classNames(
                          getRate(r, d)
                            ? "absolute top-4 flex items-center justify-center py px-1 h-3 bg-secondary font-bold text-[10px]/[100%] text-primary"
                            : "hidden",
                        )}
                      >
                        {getRate(r, d)}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex">
              {d.ratio.map((rat, ind) => (
                <div
                  className={classNames(
                    "size-14 border-2 border-primary text-xs flex items-center justify-center text-white",
                    !ind ? "" : ind % 2 ? "bg-info" : "bg-purple",
                  )}
                  key={ind}
                >
                  {d.inPlay && (
                    <span className="hidden">
                      {!ind || ind === 1
                        ? "1"
                        : ind === 2 || ind === 3
                          ? "X"
                          : "2"}
                    </span>
                  )}
                  {d.inPlay
                    ? rat
                    : (!d.inPlay && ind === 2) || (!d.inPlay && ind === 3)
                      ? "..."
                      : ""}
                </div>
              ))}
            </div>
          </Link>
        ))
      ) : (
        <div className="mt-[50px] flex items-center justify-center text-2xl text-info">
          No data
        </div>
      )}
    </div>
  );
});

export default MainTab;
