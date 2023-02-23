import { atomWithStorage } from "jotai/utils";

type Themes = "light" | "dark" | "system";

type InitialState = {
  firstStart: boolean;
  theme: Themes;
  paths: {
    steam: string;
    epic: string;
    ea: string;
    ubisoft: string;
  };
};

const initialState: InitialState = {
  firstStart: true,
  theme: "system",
  paths: {
    steam: "",
    epic: "",
    ea: "",
    ubisoft: "",
  },
};

const userConfig = atomWithStorage("userConfig", initialState);

export { InitialState, userConfig };
