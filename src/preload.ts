// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

declare global {
  interface Window {
    controls: typeof controls;
    dialog: typeof dialog;
    scanner: typeof scanner;
  }
}

import { contextBridge, ipcRenderer } from "electron";
import { LauncherPaths } from "./ui/atoms";

const controls = {
  minimize: () => ipcRenderer.send("window:minimize"),
  fullscreen: () => ipcRenderer.send("window:fullscreen"),
  close: () => ipcRenderer.send("window:close"),
};
contextBridge.exposeInMainWorld("controls", controls);

const dialog = {
  openDirPicker: () => ipcRenderer.invoke("dialog:open-dir"),
};
contextBridge.exposeInMainWorld("dialog", dialog);

const scanner = {
  paths: () => ipcRenderer.invoke("games:paths"),
  games: (paths: LauncherPaths) => ipcRenderer.invoke("games:all", paths),
};
contextBridge.exposeInMainWorld("scanner", scanner);
