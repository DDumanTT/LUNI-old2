import { app } from "electron";
import fs from "fs/promises";
import path from "path";

import Store, { Schema } from "electron-store";

interface UserConfig {
  firstStart: boolean;
  theme: string;
}

const storeSchema: Schema<UserConfig> = {
  firstStart: {
    type: "boolean",
    default: true,
  },
  theme: {
    type: "string",
    default: "system",
  },
};

const store = new Store({
  schema: storeSchema,
});
