import { classNames } from "@/lib/utils";
import { Match } from "@/stores/types";
import { observer } from "mobx-react";
import { EventRate } from "./event-content";

const EventTable = observer(
  ({
    match,
    suspended,
    get,
    rate,
  }: {
    match: Match;
    suspended: boolean;
    get: (value: EventRate) => void;
    rate: EventRate;
  }) => {
    return (
      <div className="my-6 max-md:mb-0 max-sm:pb-4 max-sm:overflow-x-scroll max-sm:overflow-y-hidden max-sm:w-full">
        <div className="flex max-md:w-[550px]">
          <div className="grow">
            <span className="text-xs opacity-50 pb-2 max-md:text-[10px]">
              Match
            </span>
          </div>
          <div className="w-120 flex items-center justify-center gap-7.5 max-md:w-89 max-md:gap-5">
            <span className="text-xs opacity-50 pb-2 max-md:text-[10px]">
              {"Back {L}"}
            </span>
            <span className="text-xs opacity-50 pb-2 max-md:text-[10px]">
              {"Lack {K}"}
            </span>
          </div>
        </div>
        <div className="max-md:w-[550px]">
          {match.players.map((row, index) => (
            <div
              className="flex"
              key={index}
            >
              <div className="grow max-md:py-1 max-md:pl-2.5">
                <span>{row.title}</span>
                <span className="text-xs text-success pl-2">{row.score}</span>
              </div>
              <div className="flex">
                {row.rates.map((rat, ind) => (
                  <div
                    className={classNames(
                      "cursor-pointer flex flex-col items-center justify-center w-20 h-16 max-md:w-15 max-md:h-12.5 bg-foreaground3 border-l-transparent border-b-transparent border outline outline-transparent border-foreaground5 hover:border-white hover:border-b-white hover:border-l-white hover:outline-white",
                      !(ind % 3) && "bg-info",
                      !(ind % 4) && "bg-purple",
                      !suspended &&
                        rate?.rat.id === rat.id &&
                        row.id === rate.idPlayer &&
                        "border-white border-b-white border-l-white outline-white",
                    )}
                    key={ind}
                    onClick={
                      suspended
                        ? undefined
                        : () =>
                            get({
                              idMatch: match.id,
                              idPlayer: row.id,
                              rat: rat,
                            })
                    }
                  >
                    <span className="font-bold max-md:text-sm">
                      {rat.count}
                    </span>
                    <span className="text-xs max-md:text-sm">
                      £{rat.amount}
                    </span>
                  </div>
                ))}
                {suspended && (
                  <span className=" text-xs text-error max-md:text-[10px] self-center pl-2">
                    Suspended
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

export default EventTable;
