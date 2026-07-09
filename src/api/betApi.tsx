import { getAverage, sortByName, sortByNumber } from "@/lib/utils";
import {
  Bet,
  BetsResponse,
  GetBetsParams,
  PlaceBetBody,
} from "../stores/types";
import mocks from "./mocks";

const betApi = {
  async placeBet(bet: PlaceBetBody) {
    return new Promise<{ bets: Bet[] }>((resolve) => {
      resolve({
        bets: mocks.bets,
      });
    });
  },
  async getBets(param: GetBetsParams | null) {
    return new Promise<BetsResponse>((resolve) => {
      let res: Bet[] = [];
      if (param?.time) {
        switch (param.time) {
          case "all-time":
            res = mocks.bets;
            break;
          case "today":
            mocks.bets.forEach((b) => {
              if (
                new Date(
                  new Date(b.match.dateTime).toDateString(),
                ).getTime() === new Date(new Date().toDateString()).getTime()
              ) {
                res.push(b);
              }
            });
            break;
          case "week":
            mocks.bets.forEach((b) => {
              if (
                new Date(new Date(b.match.dateTime).toDateString()).getTime() >=
                  new Date(new Date(param.date.min).toDateString()).getTime() &&
                new Date(new Date(b.match.dateTime).toDateString()).getTime() <=
                  new Date(new Date(param.date.max).toDateString()).getTime()
              ) {
                res.push(b);
              }
            });
            break;
          case "month":
            mocks.bets.forEach((b) => {
              if (
                new Date(b.match.dateTime).getMonth() ===
                  new Date().getMonth() &&
                new Date(b.match.dateTime).getFullYear() ===
                  new Date().getFullYear()
              ) {
                res.push(b);
              }
            });
            break;

          case "year":
            mocks.bets.forEach((b) => {
              if (
                new Date(b.match.dateTime).getFullYear() ===
                new Date().getFullYear()
              ) {
                res.push(b);
              }
            });
            break;
        }
      } else res = mocks.bets;

      if (param?.sortBy) {
        switch (param.sortBy) {
          case "bet-for":
            res = res.sort((a, b) =>
              sortByName(a.player.title, b.player.title),
            );
            if (!param.sortAsc) {
              res.reverse();
            }
            break;
          case "event-date":
            res = res.sort((a, b) =>
              sortByNumber(
                new Date(a.match.dateTime).getTime(),
                new Date(b.match.dateTime).getTime(),
                param.sortAsc,
              ),
            );
            break;
          case "staking-plan":
            res = res.sort((a, b) => sortByName(a.stakingPlan, b.stakingPlan));
            if (!param.sortAsc) {
              res.reverse();
            }
            break;
          case "odds":
            res = res.sort((a, b) =>
              sortByNumber(
                a.odds.length === 1 ? a.odds[0] : getAverage(a.odds),
                b.odds.length === 1 ? b.odds[0] : getAverage(b.odds),
                param.sortAsc,
              ),
            );
            break;
          case "stake":
            res = res.sort((a, b) =>
              sortByNumber(a.stake, b.stake, param.sortAsc),
            );
            break;
          case "profit":
            res = res.sort((a, b) =>
              sortByNumber(a.profit, b.profit, param.sortAsc),
            );
            break;
          case "result":
            res = res.sort((a, b) => sortByName(a.result, b.result));
            if (!param.sortAsc) {
              res.reverse();
            }
            break;
          case "user":
            res = res.sort((a: Bet, b: Bet) =>
              sortByName(a.user.name!, b.user.name!),
            );
            if (!param.sortAsc) {
              res.reverse();
            }
          default:
            break;
        }
      }

      let totalAmount = res.length;

      if (param.pageSize) {
        res = res?.slice(
          param.pageSize * param.pageIndex,
          param.pageSize * (param.pageIndex + 1),
        );
      }

      resolve({
        data: res,
        pageIndex: param.pageIndex ?? 0,
        pageSize: param?.pageSize ?? 5,
        total: totalAmount,
      });
    });
  },
  async getBetByParams(bet: number) {
    return new Promise<Bet>((resolve) => {
      resolve(mocks.bets[0]);
    });
  },
  async deleteBet(id: number) {
    return new Promise<{ bets: Bet[] }>((resolve) => {
      resolve({
        bets: mocks.bets,
      });
    });
  },
};

export default betApi;
