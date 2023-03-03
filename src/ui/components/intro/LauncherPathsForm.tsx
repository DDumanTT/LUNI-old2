import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import Input from "../Input";
import { launcherPathsAtom } from "../../atoms";

const launcherNamesMap: Record<string, string> = {
  steam: "Steam",
  epic: "Epic Games",
  ea: "EA App",
  ubisoft: "Ubisoft",
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
                onCancel={() => handlePathRemove(key)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
