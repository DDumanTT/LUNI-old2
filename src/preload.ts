// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

declare global {
  interface Window {
    controls: typeof controls;
    dialog: typeof dialog;
  }
}

import { contextBridge, ipcRenderer } from "electron";

const controls = {
  minimize: () => ipcRenderer.send("minimize-window"),
  fullscreen: () => ipcRenderer.send("fullscreen-window"),
  close: () => ipcRenderer.send("close-window"),
};
contextBridge.exposeInMainWorld("controls", controls);

const dialog = {
  openDirPicker: () => ipcRenderer.invoke("dialog-open-dir"),
};
contextBridge.exposeInMainWorld("dialog", dialog);
