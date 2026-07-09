import { Match } from "../stores/types";
import mocks from "./mocks";

const matchesApi = {
  async getMatches(param: any): Promise<{ matches: Match[] }> {
    return new Promise((resolve, reject) => {
      let matches: any = [];
      switch (param) {
        case "All matches":
          matches = mocks.matches;
          break;
        case "In-play":
          matches = mocks.matches.filter((m) => m.inPlay);
          break;
        case "Today":
          matches = mocks.matches.filter((m) => {
            const dt1 = new Date(new Date(m.dateTime).toDateString()).getTime();
            const dt2 = new Date(new Date().toDateString()).getTime();
            if (dt1 === dt2) {
              return m;
            }
          });
          break;
        case "Tomorrow":
          matches = mocks.matches.filter((m) => {
            const dt1 = new Date(new Date(m.dateTime).toDateString()).getTime();
            const dt2 = new Date(
              new Date(
                new Date().setDate(new Date().getDate() + 1),
              ).toDateString(),
            ).getTime();
            if (dt1 === dt2) {
              return m;
            }
          });
          break;
        default:
          matches = mocks.matches;
      }

      resolve({
        matches: matches,
      });
    });
  },
  async getMatchByParams(params: any) {
    return new Promise((resolve, reject) => {
      resolve(mocks.matches.find((m) => m.id === +params.id));
    });
  },
};

export default matchesApi;
