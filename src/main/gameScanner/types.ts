interface Game {
  launcher: string;
  id: string;
  name: string;
  path: string;
}

interface Directory<T> {
  getPath(): string | undefined;
  getContent(): Promise<T[]>;
}

interface ContentScanner<T> {
  scan(): Promise<T[]>;
  addDirectory(directory: Directory<T>): void;
}

export { Game, Directory, ContentScanner };
