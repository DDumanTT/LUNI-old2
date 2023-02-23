// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

export interface IWindowControls {
  minimize: () => void;
  fullscreen: () => void;
  close: () => void;
}

declare global {
  interface Window {
    controls: IWindowControls;
  }
}


import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("controls", {
  minimize: () => ipcRenderer.send("minimize-window"),
  fullscreen: () => ipcRenderer.send("fullscreen-window"),
  close: () => ipcRenderer.send("close-window"),
});
