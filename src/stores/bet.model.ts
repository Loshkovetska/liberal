import { observable, runInAction } from "mobx";
import api from "../api";
import { Bet, BetsResponse, GetBetsParams, PlaceBetBody } from "./types";

type BetType = {
  bets: BetsResponse | null;
  bet: Bet | null;
};

const BetModel: BetType = observable({
  bets: null,
  bet: null,
});

export const placeBet = async (bet: PlaceBetBody) => {
  try {
    const { bets } = await api.bet.placeBet(bet);
    runInAction(() => {
      BetModel.bets = {
        data: bets,
        pageIndex: 0,
        pageSize: bets.length,
        total: bets.length,
      };
    });
  } catch (e) {}
};

export const getBets = async (param: GetBetsParams) => {
  try {
    const bets = await api.bet.getBets(param);
    runInAction(() => {
      BetModel.bets = bets;
    });
  } catch (e) {}
};

export const getBet = async (bet: number) => {
  try {
    const betItem = await api.bet.getBetByParams(bet);
    runInAction(() => {
      BetModel.bet = betItem;
    });
  } catch (e) {}
};

export const deleteBet = async (id: number) => {
  try {
    const { bets } = await api.bet.deleteBet(id);
    runInAction(() => {
      BetModel.bets = {
        pageIndex: 0,
        pageSize: bets.length,
        total: bets.length,
        data: bets,
      };
    });
  } catch (e) {}
};

export default BetModel;
