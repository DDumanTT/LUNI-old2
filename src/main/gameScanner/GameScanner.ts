import Steam from "./launchers/Steam";
import { Directory, ContentScanner } from "./types";
import { Game } from "@shared/types";

class AbstractScanner<T> implements ContentScanner<T> {
  private directories: Directory<T>[] = [];

  async scan(): Promise<T[]> {
    const result: T[] = [];

    const contentPromises: Promise<T[]>[] = [];
    this.directories.forEach((dir) => {
      contentPromises.push(dir.getContent());
    });

    (await Promise.allSettled(contentPromises)).forEach((settledPromise) => {
      if (settledPromise.status === "rejected") return;
      result.push(...settledPromise.value);
    });

    return result;
  }

  getPaths = (): Record<string, string> => {
    const paths: Record<string, string> = {};
    this.directories.forEach((dir) => {
      const path = dir.getPath();
      if (!path) return;
      paths[dir.name] = path;
    });
    return paths;
  };

  setPaths = (paths: Record<string, string>) => {
    Object.entries(paths).forEach(([name, path]) => {
      const dir = this.directories.find((dir) => dir.name === name);
      if (dir) dir.path = path;
    });
  };

  addDirectory(directory: Directory<T>): void {
    this.directories.push(directory);
  }
}

class GameScanner extends AbstractScanner<Game> {
  constructor() {
    super();

    this.addDirectory(new Steam());
  }
}

export { GameScanner };
