interface Game {
  launcher: string;
  id: string;
  name: string;
  path: string;
}

interface Directory<T> {
  name: string;
  getPath(): string | undefined;
  getContent(): Promise<T[]>;
}

interface ContentScanner<T> {
  scan(): Promise<T[]>;
  getPaths(): Record<string, string>;
  addDirectory(directory: Directory<T>): void;
}

export { Game, Directory, ContentScanner };
