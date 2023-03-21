import { ReactNode, useEffect, useState, useRef } from "react";
import { useAtom } from "jotai";
import { ReactSVG } from "react-svg";

import { Game } from "@shared/types";
import { launcherPathsAtom } from "../../atoms";

interface GameListItem extends Game {
  selected: boolean;
}

interface GameSelectProps {}

interface GameRowProps {
  game: Game;
  selected: boolean;
}

const launcherIconsMap: Record<string, string> = {
  steam: "/steam_logo.svg",
  epic: "../../assets/logos/epic_logo.svg",
  ea: "../../assets/logos/ea_logo.svg",
  ubisoft: "../../assets/logos/ubisoft_logo.svg",
};

export default function GameSelection(props: GameSelectProps) {
  const [launcherPaths, setLauncherPaths] = useAtom(launcherPathsAtom);
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<GameListItem[]>([]);

  const getGames = async () => {
    const res: GameListItem[] = await window.scanner.games(launcherPaths);
    res.forEach((game) => (game.selected = true));
    setGames(res);
    setLoading(false);
  };

  useEffect(() => {
    getGames();
  }, []);

  function handleToggle(game: Game) {
    setGames((games) =>
      games.map((g) => {
        if (g.id === game.id) {
          return { ...g, selected: !g.selected };
        }
        return g;
      })
    );
  }

  if (loading) return <>Loading...</>;

  return (
    <>
      <h1 className="mb-8 text-4xl font-bold text-primary-11">Select games</h1>
      <div className="z-40 h-full overflow-auto rounded-xl">
        <table className="z-50">
          <thead>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr
                className={`${
                  game.selected
                    ? "bg-success-3 hover:bg-success-4"
                    : "bg-error-3 hover:bg-error-4"
                } p-2`}
                key={`${game.launcher}-${game.id}`}
                onClick={() => handleToggle(game)}
              >
                <td className="p-2">
                  <ReactSVG src={launcherIconsMap[game.launcher]} />
                </td>
                <td className="pl-2 text-left">{game.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
