import GameModel, { getGames } from "@/stores/game.model";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { Link } from "react-router";

const MainAsideGames = observer(() => {
  const { games } = GameModel;

  useEffect(() => {
    getGames();
  }, []);
  return (
    <aside className="bg-linear-180 from-[#2256a400] to-primary p-4 min-w-56 max-w-56 max-xl:min-w-full max-xl:max-w-full max-xl:mt-4">
      <h2 className="text-lg text-white mb-3">Live casino games</h2>
      <div className="flex flex-col gap-4 min-w-48 max-w-48 max-xl:flex-row max-xl:flex-wrap max-md:gap-2 max-sm:min-w-0 max-sm:max-w-none">
        {games &&
          games.map((l) => (
            <Link
              to={l.link}
              className="h-[120px] overflow-hidden relative cursor-pointer block group max-sm:min-w-34.25 max-sm:max-w-34.25"
              key={l.title}
            >
              <img
                src={l.src}
                alt={l.title}
                className="size-full"
              />
              <span className="absolute bottom-0 left-0 translate-y-[64%] flex flex-col w-full group-hover:translate-0 transition-all duration-500">
                <span className="text-white text-center">{l.title}</span>
                <span className="flex items-center justify-center bg-secondary w-full px-4 py-2">
                  Play Now
                </span>
              </span>
            </Link>
          ))}
      </div>
    </aside>
  );
});

export default MainAsideGames;
