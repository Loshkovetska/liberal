import { Trash, Vector } from "@/assets/icons";
import { classNames, getAverage, getDate } from "@/lib/utils";
import { deleteBet } from "@/stores/bet.model";
import { Bet, BetsSortBy } from "@/stores/types";
import { observer } from "mobx-react";
import { useState } from "react";

const BetsTable = observer(
  ({
    bets,
    withUser = true,
    onSort,
  }: {
    bets: Bet[];
    withUser?: boolean;
    onSort: (sortBy: BetsSortBy, sortAsc: boolean) => void;
  }) => {
    const theads = [
      ...(withUser
        ? [
            {
              title: "User",
              action: (state: boolean) => {
                onSort("user", state);
              },
            },
          ]
        : []),
      {
        title: "Bet for",
        action: (state: boolean) => {
          onSort("bet-for", state);
        },
      },
      {
        title: "Event date",
        action: (state: boolean) => {
          onSort("event-date", state);
        },
      },
      {
        title: "Staking plan",
        action: (state: boolean) => {
          onSort("staking-plan", state);
        },
      },
      {
        title: "Odds",
        action: (state: boolean) => {
          onSort("odds", state);
        },
      },
      {
        title: "Stake",
        action: (state: boolean) => {
          onSort("stake", state);
        },
      },
      {
        title: "Profit",
        action: (state: boolean) => {
          onSort("profit", state);
        },
      },
      {
        title: "Result",
        action: (state: boolean) => {
          onSort("result", state);
        },
      },
    ];

    const delBet = (id: number) => {
      deleteBet(id);
    };

    return (
      <div className="mt-8 max-xl:w-full max-xl:pb-6 max-xl:overflow-x-auto">
        <div
          className={classNames(
            "px-8 justify-between max-xl:px-0 grid",
            withUser &&
              "grid-cols-[200px_250px_117px_117px_75px_75px_75px_75px_50px]  max-xl:w-350 max-xl:grid-cols-[220px_220px_117px_117px_75px_75px_75px_75px_50px]",
            !withUser &&
              "grid-cols-[250px_117px_117px_75px_75px_75px_75px] max-lg:grid-cols-[220px_117px_117px_75px_75px_75px_75px] max-lg:w-238",
          )}
        >
          {theads.map((th) => (
            <BetHistoryTh
              key={th.title}
              title={th.title}
              action={th.action}
            />
          ))}
          {withUser && (
            <div className="flex items-center gap-2 text-nowrap font-bold pb-2" />
          )}
        </div>
        {bets.length > 0 ? (
          <>
            {bets.map((bt) => (
              <div
                className={classNames(
                  "grid border-t border-foreaground5 last:border-b px-8 py-4 justify-between max-xl:px-0 items-center",
                  withUser &&
                    "grid-cols-[200px_250px_117px_117px_75px_75px_75px_75px_50px] max-xl:w-350 max-xl:grid-cols-[220px_220px_117px_117px_75px_75px_75px_75px_50px]",
                  !withUser &&
                    "grid-cols-[250px_117px_117px_75px_75px_75px_75px] max-lg:grid-cols-[220px_117px_117px_75px_75px_75px_75px] max-lg:w-238",
                )}
                key={bt.id}
              >
                {withUser && (
                  <div className="text-base">
                    {`${bt.user.name} ${bt.user.surname}`}
                  </div>
                )}
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
                {withUser && (
                  <div className="text-base">
                    <Trash
                      className="svg-del"
                      onClick={() => delBet(bt.id)}
                    />
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <div className="flex items-center justify-between px-8">No data</div>
        )}
      </div>
    );
  },
);

export default BetsTable;

export function BetHistoryTh({
  action,
  title,
}: {
  action: (val: boolean) => void;
  title: string;
}) {
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
}
