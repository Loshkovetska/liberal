import { ArrowDown, Vector } from "@/assets/icons";
import {
  classNames,
  getDate,
  sortByName,
  sortByNumber,
  tableDate,
} from "@/lib/utils";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BetModel, { getBets } from "@/stores/bet.model";
import { Bet } from "@/stores/types";
import UserModel from "@/stores/user.model";

const AccountBetsHistory = observer(() => {
  const [activeTime, setTime] = useState("all-time");
  const [activeDate, setDate] = useState([
    new Date().toDateString(),
    new Date(new Date().setDate(new Date().getDate() + 7)).toDateString(),
  ]);
  const { bets } = BetModel;
  const [data, setData] = useState<Bet[]>(JSON.parse(JSON.stringify(bets)));

  const timeSort = {
    "all-time": "All time",
    today: "Today",
    week: "Week",
    month: "Month",
    year: "Year",
  };

  const theads = [
    {
      title: "Bet for",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a, b) =>
            sortByName(a.player.title, b.player.title),
          );
          if (!state) {
            res.reverse();
          }

          setData([...res]);
        }
      },
    },
    {
      title: "Event date",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a, b) =>
            sortByNumber(
              new Date(a.match.dateTime).getTime(),
              new Date(b.match.dateTime).getTime(),
              state,
            ),
          );
          setData([...res]);
        }
      },
    },
    {
      title: "Staking plan",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a, b) =>
            sortByName(a.stakingPlan, b.stakingPlan),
          );
          if (!state) {
            res.reverse();
          }

          setData([...res]);
        }
      },
    },
    {
      title: "Odds",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a, b) =>
            sortByNumber(
              a.odds.length === 1 ? a.odds[0] : getAverage(a.odds),
              b.odds.length === 1 ? b.odds[0] : getAverage(b.odds),
              state,
            ),
          );
          setData([...res]);
        }
      },
    },
    {
      title: "Stake",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a, b) =>
            sortByNumber(a.stake, b.stake, state),
          );
          setData([...res]);
        }
      },
    },
    {
      title: "Profit",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a, b) =>
            sortByNumber(a.profit, b.profit, state),
          );
          setData([...res]);
        }
      },
    },
    {
      title: "Result",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a, b) => sortByName(a.result, b.result));
          if (!state) {
            res.reverse();
          }

          setData([...res]);
        }
      },
    },
  ];

  useEffect(() => {
    const response: any = {
      userId: UserModel.user?.id,
      time: activeTime,
    };

    if (activeTime === "week") {
      response.date = {
        min: activeDate[0],
        max: activeDate[1],
      };
    }
    getBets({ ...response });
  }, [activeTime, activeDate]);

  useEffect(() => {
    setData(bets);
  }, [bets]);

  const getAverage = (arr: Array<number>) => {
    let average = 0;
    arr.forEach((it) => (average += it));

    return average;
  };

  const goBack = () => {
    const dat = new Date(activeDate[0]);
    const newDate = [dat.toDateString(), activeDate[0]];
    setDate([...newDate]);
  };

  const goNext = () => {
    const dat = new Date(activeDate[1]);
    const dt = new Date(dat.setDate(dat.getDate() + 7));
    const newDate = [activeDate[1], dt.toDateString()];

    setDate([...newDate]);
  };

  return (
    <div className="h-full bg-foreaground3 pt-6 pb-25 max-lg:px-6">
      <div className="flex items-center justify-between pl-3 max-lg:pl-0 max-md:flex-col max-md:items-start">
        <div className="flex">
          {Object.entries(timeSort).map(([value, title], ind) => (
            <button
              className={classNames(
                "w-[88px] h-10 flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-primary max-md:hidden",
                activeTime === value && "bg-secondary text-primary",
              )}
              key={ind}
              onClick={() => setTime(title)}
            >
              {title}
            </button>
          ))}
          <Select
            value={activeTime}
            onValueChange={setTime}
            className="min-[580px]:hidden"
          >
            <SelectTrigger>
              <SelectValue defaultValue={timeSort[activeTime]} />
            </SelectTrigger>

            <SelectContent>
              {Object.entries(timeSort).map(([value, title]) => (
                <SelectItem
                  key={value}
                  value={value}
                >
                  {title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-50 flex items-center mr-12 max-md:self-end max-md:mt-6 max-md:mr-6 max-sm:self-center max-sm:mr-0">
          <ArrowDown
            className="size-4 min-w-4 cursor-pointer rotate-z-90"
            onClick={goBack}
          />
          <span className="mx-2 whitespace-nowrap select-none">{`${tableDate(activeDate[0])} - ${tableDate(activeDate[1])}`}</span>
          <ArrowDown
            className="size-4 min-w-4 cursor-pointer -rotate-z-90"
            onClick={goNext}
          />
        </div>
      </div>
      <div className="mt-8 max-lg:w-full max-lg:overflow-x-auto max-lg:pb-6">
        <div className="grid grid-cols-[250px_117px_117px_75px_75px_75px_75px] max-lg:grid-cols-[220px_117px_117px_75px_75px_75px_75px] px-8 justify-between max-lg:w-238 max-lg:px-0">
          {theads.map((th, ind) => (
            <BetHistoryTh
              key={ind}
              title={th.title}
              action={th.action}
            />
          ))}
        </div>
        {data?.length ? (
          data.map((bt, ind: number) => (
            <div
              className="grid grid-cols-[250px_117px_117px_75px_75px_75px_75px] max-lg:grid-cols-[220px_117px_117px_75px_75px_75px_75px] px-8 py-4 justify-between max-lg:w-238 max-lg:px-0 border-t border-foreaground5 last:border-b"
              key={ind}
            >
              <div className="flex flex-col text-base">
                <span>{bt.player.title}</span>
                <span className="text-sm opacity-50">{bt.match.title}</span>
              </div>
              <div className="text-base">
                {getDate(bt.match.dateTime.toString())}
              </div>
              <div className="text-base">{bt.stakingPlan}</div>
              <div className="text-base">
                {bt.odds.length === 1
                  ? bt.odds[0].toFixed(2)
                  : getAverage(bt.odds).toFixed(2)}
              </div>
              <div className="text-base">£{bt.stake.toFixed(2)}</div>
              <div className="text-base">
                <span
                  className={classNames(bt.result === "Won" && "text-success")}
                >
                  {bt.result === "Won"
                    ? `£${bt.profit.toFixed(2)}`
                    : `- £${(bt.profit * -1).toFixed(2)}`}
                </span>
              </div>
              <div className="text-base">{bt.result}</div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center border-t border-b border-foreaground5 py-4 px-8 max-lg:px-0">
            No data
          </div>
        )}
      </div>
    </div>
  );
});

export default AccountBetsHistory;

export const BetHistoryTh = ({
  action,
  title,
}: {
  action: (val: boolean) => void;
  title: string;
}) => {
  const [sortState, setState] = useState(false);

  return (
    <div className="flex items-center gap-2 text-nowrap font-bold pb-2">
      {title}
      <button
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => {
          setState(!sortState);
          action(sortState);
        }}
      >
        <Vector className={classNames(!sortState && `rotate-z-180`)} />
        <Vector className={classNames(sortState && `rotate-z-180`)} />
      </button>
    </div>
  );
};
