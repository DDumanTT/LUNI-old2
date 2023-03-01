import Steam from "./launchers/Steam";
import { Directory, Game, ContentScanner } from "./types";

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
      result.concat(settledPromise.value);
    });

    return result;
  }

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
