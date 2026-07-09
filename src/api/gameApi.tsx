import { Game } from "../stores/types";
import mocks from "./mocks";

const gameApi = {
  async getGames(): Promise<{ games: Game[] | null }> {
    return new Promise((resolve, reject) => {
      resolve({
        games: mocks.games,
      });
    });
  },
};

export default gameApi;
