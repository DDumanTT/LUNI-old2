import { ReactNode, useEffect, useState, useRef } from "react";
import { useAtom } from "jotai";

import { Game } from "@shared/types";
import { launcherPathsAtom } from "../../atoms";

import SteamLogo from "../../assets/logos/steam_logo.svg";
import EpicLogo from "../../assets/logos/epic_logo.svg";
import EaLogo from "../../assets/logos/ea_logo.svg";
import UbisoftLogo from "../../assets/logos/ubisoft_logo.svg";

interface GameListItem extends Game {
  selected: boolean;
}

interface GameSelectProps {}

interface GameRowProps {
  game: Game;
  selected: boolean;
}

const launcherIconsMap: Record<string, ReactNode> = {
  steam: <SteamLogo className="aspect-square h-8 w-8 fill-primary-12" />,
  epic: <EpicLogo className="aspect-square h-8 w-8 fill-primary-12" />,
  ea: <EaLogo className="aspect-square h-8 w-8 fill-primary-12" />,
  ubisoft: <UbisoftLogo className="aspect-square h-8 w-8 fill-primary-12" />,
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
                <td className="p-2">{launcherIconsMap[game.launcher]}</td>
                <td className="pl-2 text-left">{game.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
