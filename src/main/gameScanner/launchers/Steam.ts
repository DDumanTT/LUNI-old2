import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { enumerateValues, HKEY } from "registry-js";

import { Directory, Game } from "../types";

export default class Steam implements Directory<Game> {
  private path?: string;

  constructor() {
    this.getPath();
  }

  getPath(): string | undefined {
    if (this.path) return this.path;

    const regList = enumerateValues(
      HKEY.HKEY_CURRENT_USER,
      "SOFTWARE\\Valve\\Steam"
    );

    this.path = regList.find((reg) => reg.name === "SteamPath")?.data as string;

    return this.path;
  }

  async getContent(): Promise<Game[]> {
    const games: Game[] = [];
    if (!this.path) return games;

    const gamesPath = join(this.path, "steamapps");

    try {
      let files = await readdir(gamesPath);
      console.log(files);
      files = files.filter((file) => file.endsWith(".acf"));
      const gamePromises: Promise<Game>[] = [];

      files.forEach((file) => {
        gamePromises.push(
          new Promise((resolve, reject) => {
            readFile(join(gamesPath, file), {
              encoding: "utf-8",
            })
              .then(this.parseAcf)
              .then((game) => resolve(game))
              .catch((err) => reject(err));
          })
        );
      });

      (await Promise.allSettled(gamePromises)).forEach((settledPromise) => {
        if (settledPromise.status === "rejected") return;
        games.push(settledPromise.value);
      });
    } catch {
      return games;
    }

    return games;
  }

  private parseAcf(content: string): Game {
    return { id: "test", launcher: "steam", name: "test", path: "test" };
  }
}
