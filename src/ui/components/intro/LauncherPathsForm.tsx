import { useAtom } from "jotai";
import { ReactNode, useEffect, useState } from "react";

import Input from "../Input";
import { launcherPathsAtom } from "../../atoms";
import SteamLogo from "../../assets/logos/steam_logo.svg";
import EpicLogo from "../../assets/logos/epic_logo.svg";
import EaLogo from "../../assets/logos/ea_logo.svg";
import UbisoftLogo from "../../assets/logos/ubisoft_logo.svg";

const launcherNamesMap: Record<string, string> = {
  steam: "Steam",
  epic: "Epic Games",
  ea: "EA App",
  ubisoft: "Ubisoft",
};

const launcherIconsMap: Record<string, ReactNode> = {
  steam: <SteamLogo className="aspect-square h-full w-full fill-primary-12" />,
  epic: <EpicLogo className="aspect-square h-full w-full fill-primary-12" />,
  ea: <EaLogo className="aspect-square h-full w-full fill-primary-12" />,
  ubisoft: (
    <UbisoftLogo className="aspect-square h-full w-full fill-primary-12" />
  ),
};

export default function LauncherPathsForm() {
  const [fetchingPaths, setFetchingPaths] = useState(true);
  const [launcherPaths, setLauncherPaths] = useAtom(launcherPathsAtom);

  const getLauncherPaths = async () => {
    const newPaths = await window.scanner.paths();
    setLauncherPaths((paths) => ({ ...paths, ...newPaths }));
    setFetchingPaths(false);
  };

  const handlePathChange = async (key: string) => {
    const newPath = await window.dialog.openDirPicker();
    if (!newPath) return;
    setLauncherPaths({ ...launcherPaths, [key]: newPath });
  };

  const handlePathRemove = (key: string) => {
    setLauncherPaths({ ...launcherPaths, [key]: "" });
  };

  useEffect(() => {
    getLauncherPaths();
  }, []);

  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold text-primary-11">
        Launcher paths
      </h1>
      {fetchingPaths ? (
        <>Loading...</>
      ) : (
        <>
          <h2 className="mb-4 font-bold">Select game launcher directories.</h2>
          <div className="flex flex-col gap-4">
            {Object.keys(launcherPaths).map((key) => (
              <Input
                className="cursor-pointer"
                key={key}
                onClick={() => handlePathChange(key)}
                readOnly
                label={launcherNamesMap[key]}
                id={key}
                value={launcherPaths[key]}
                icon={launcherIconsMap[key]}
                onCancel={() => handlePathRemove(key)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
