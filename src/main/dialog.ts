import { dialog } from "electron";

async function openDirPicker() {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });
  if (canceled) return;
  return filePaths[0];
}

export { openDirPicker };
