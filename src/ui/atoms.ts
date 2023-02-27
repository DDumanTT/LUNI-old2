import { atomWithStorage } from "jotai/utils";

type Themes = "light" | "dark" | "system";

type LauncherPaths = {
  steam: string;
  epic: string;
  ea: string;
  ubisoft: string;
};

const initialLauncherPaths: LauncherPaths = {
  steam: "",
  epic: "",
  ea: "",
  ubisoft: "",
};

const isFirstStartAtom = atomWithStorage("isFirstStart", true);
const themeAtom = atomWithStorage<Themes>("theme", "system");
const launcherPathsAtom = atomWithStorage("userConfig", initialLauncherPaths);

export { isFirstStartAtom, themeAtom, launcherPathsAtom };
