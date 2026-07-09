export type SportEvent = {
  id: number;
  title: string;
  list: Array<SportEventItem>;
};

export type SportEventItem = {
  id: number;
  title: string;
};

export type Player = {
  id: number;
  title: string;
  rates: Array<Rate>;
  score: number;
};

export type Market = {
  id: number;
  title: string;
  count: number;
};

export type Match = {
  id: number;
  title: string;
  sportKind: string;
  section: string;
  inPlay: boolean;
  markets: Array<Market>;
  ratio: Array<any>;
  strokeLimit: {
    min: number;
    max: number;
  };
  maxProfit: number;
  dateTime: string;
  players: Array<Player>;
};

export type Rate = {
  id: number;
  count: number;
  amount: number;
};

export type Bet = {
  id: number;
  user: User;
  match: Match;
  player: Player;
  stake: number;
  rate: number;
  result: "Won" | "Lost" | "";
  profit: number;
  stakingPlan: string;
  odds: Array<number>;
};

export type User = {
  id: number;
  email: string;
  password: string;
  avatar?: string;
  name?: string;
  surname?: string;
  userName?: string;
  birthDate?: string;
  dayLimit?: number;
  monthLimit?: number;
  yearLimit?: number;
  totalBalance?: number;
  role: "user" | "admin";
};

export type Game = {
  id: number;
  title: string;
  src: any;
  link: string;
};

export type PlaceBetBody = {
  userId?: number;
  idPlayer: string;
  idMatch: string;
  stake: number;
  rate: number;
};

export type BetsSortBy =
  | "event-date"
  | "bet-for"
  | "staking-plan"
  | "odds"
  | "stake"
  | "profit"
  | "result"
  | "user";

export type GetBetsParams = {
  userId?: number;
  time?: string;
  date?: { min: string; max: string };
  sortBy?: BetsSortBy;
  sortAsc?: boolean;
  pageIndex?: number;
  pageSize?: number;
};

export type BetsResponse = {
  data: Bet[];
  pageIndex: number;
  pageSize: number;
  total: number;
};

export type UsersSortBy = "user" | "login" | "email" | "bdate" | "balance";

export type GetUsersParams = {
  sortBy?: UsersSortBy;
  sortAsc?: boolean;
};
