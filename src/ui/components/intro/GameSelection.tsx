import { useEffect, useState } from "react";
import { useAtom } from "jotai";

import { Game } from "@shared/types";
import { launcherPathsAtom } from "../../atoms";

interface GameSelectProps {}

export default function GameSelection(props: GameSelectProps) {
  const [launcherPaths, setLauncherPaths] = useAtom(launcherPathsAtom);
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<Game[]>([]);

  const getGames = async () => {
    console.log(await window.scanner.games(launcherPaths));
    setLoading(false);
  };

  useEffect(() => {
    getGames();
  }, []);

  if (loading) return <>Loading...</>;

  return <>select games here</>;
}
