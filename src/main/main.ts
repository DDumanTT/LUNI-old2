import { LauncherPaths } from "./../ui/atoms";
import {
  app,
  BrowserWindow,
  ipcMain,
  IpcMainInvokeEvent,
  Menu,
} from "electron";

import { openDirPicker } from "./dialog";
import { ContentScanner } from "./gameScanner/types";
import { Game } from "@shared/types";

// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

class Main {
  private mainWindow!: BrowserWindow;
  private gameScanner: ContentScanner<Game>;

  constructor(scanner: ContentScanner<Game>) {
    this.gameScanner = scanner;
  }

  start() {
    // Handle creating/removing shortcuts on Windows when installing/uninstalling.
    if (require("electron-squirrel-startup")) {
      app.quit();
    }

    // Disable native menu
    Menu.setApplicationMenu(null);

    app.on("ready", () => {
      this.addIpcHandlers();
      this.beforeWindow();
      this.createWindow();
    });

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        app.quit();
      }
    });

    app.on("activate", () => {
      // On OS X it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) {
        this.createWindow();
      }
    });
  }

  private createWindow() {
    // Create the browser window.
    this.mainWindow = new BrowserWindow({
      height: 800,
      width: 1200,
      minHeight: 600,
      minWidth: 800,
      frame: false,
      webPreferences: {
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      },
    });

    // Title bar events
    ipcMain.on("window:minimize", () => {
      this.mainWindow.minimize();
    });

    ipcMain.on("window:fullscreen", () => {
      if (this.mainWindow.isMaximized()) this.mainWindow.unmaximize();
      else this.mainWindow.maximize();
    });

    ipcMain.on("window:close", () => {
      this.mainWindow.close();
    });

    // and load the index.html of the app.
    this.mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    // Open the DevTools.
    this.mainWindow.webContents.openDevTools();
  }

  private addIpcHandlers() {
    ipcMain.handle("dialog:open-dir", openDirPicker);

    ipcMain.handle("games:paths", this.gameScanner.getPaths);
    ipcMain.handle(
      "games:all",
      async (_: IpcMainInvokeEvent, paths: LauncherPaths) => {
        this.gameScanner.setPaths(paths);
        return await this.gameScanner.scan();
      }
    );
  }

  private beforeWindow() {
    this.gameScanner.scan();
  }
}

export { Main };
