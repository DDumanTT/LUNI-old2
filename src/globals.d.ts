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
