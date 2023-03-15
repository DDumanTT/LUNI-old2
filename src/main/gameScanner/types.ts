interface Directory<T> {
  name: string;
  path?: string;
  getPath(): string | undefined;
  getContent(): Promise<T[]>;
}

interface ContentScanner<T> {
  scan(): Promise<T[]>;
  getPaths(): Record<string, string>;
  setPaths(paths: Record<string, string>): void;
  addDirectory(directory: Directory<T>): void;
}

export { Directory, ContentScanner };
