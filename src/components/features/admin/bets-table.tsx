import { Trash } from "@/assets/icons";
import { BetHistoryTh } from "@/components/features/account/account-bets-history";
import {
  classNames,
  getAverage,
  getDate,
  sortByName,
  sortByNumber,
} from "@/lib/utils";
import { deleteBet } from "@/stores/bet.model";
import { Bet } from "@/stores/types";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

const BetsTable = observer(({ bets }: { bets: any[] }) => {
  const [data, setData] = useState<any>(
    bets ? JSON.parse(JSON.stringify(bets)) : [],
  );

  useEffect(() => {
    setData(bets);
  }, [bets]);

  const theads = [
    {
      title: "User",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a: Bet, b: Bet) =>
            sortByName(a.user.name!, b.user.name!),
          );
          if (!state) {
            res.reverse();
          }

          setData([...res]);
        }
      },
    },
    {
      title: "Bet for",
      action: (state: boolean) => {
        if (data) {
          const res = data.sort((a: Bet, b: Bet) =>
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
          const res = data.sort((a: Bet, b: Bet) =>
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
          const res = data.sort((a: Bet, b: Bet) =>
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
          const res = data.sort((a: Bet, b: Bet) =>
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
          const res = data.sort((a: Bet, b: Bet) =>
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
          const res = data.sort((a: Bet, b: Bet) =>
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
          const res = data.sort((a: Bet, b: Bet) =>
            sortByName(a.result, b.result),
          );
          if (!state) {
            res.reverse();
          }

          setData([...res]);
        }
      },
    },
  ];

  const delBet = (id: number) => {
    deleteBet(id);
  };

  return (
    <div className="mt-8 max-xl:w-full max-xl:pb-6 max-xl:overflow-x-auto">
      <div className="grid grid-cols-[200px_250px_117px_117px_75px_75px_75px_75px_50px] px-8 justify-between max-xl:w-350 max-xl:grid-cols-[220px_220px_117px_117px_75px_75px_75px_75px_50px] max-xl:px-0">
        {theads.map((th) => (
          <BetHistoryTh
            key={th.title}
            title={th.title}
            action={th.action}
          />
        ))}
        <div className="flex items-center gap-2 text-nowrap font-bold pb-2" />
      </div>
      {data || (data && !data.length) ? (
        <>
          {data.map((bt: Bet, ind: number) => (
            <div
              className="grid grid-cols-[200px_250px_117px_117px_75px_75px_75px_75px_50px] px-8 py-4 justify-between  border-t border-foreaground5 last:border-b max-xl:w-350 max-xl:grid-cols-[220px_220px_117px_117px_75px_75px_75px_75px_50px] max-xl:px-0 items-center"
              key={ind}
            >
              <div className="text-base">
                {`${bt.user.name} ${bt.user.surname}`}
              </div>
              <div className="text-base flex flex-col">
                <span className="text-base">{bt.player.title}</span>
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
              <div className="text-base text-base--profit">
                <span
                  className={classNames(
                    "text-base-val",
                    bt.result === "Won" && "text-success",
                  )}
                >
                  {bt.result === "Won"
                    ? `£${bt.profit.toFixed(2)}`
                    : `- £${(bt.profit * -1).toFixed(2)}`}
                </span>
              </div>
              <div className="text-base">{bt.result}</div>
              <div className="text-base">
                <Trash
                  className="svg-del"
                  onClick={() => delBet(bt.id)}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex items-center justify-between px-8">No data</div>
      )}
    </div>
  );
});

export default BetsTable;
