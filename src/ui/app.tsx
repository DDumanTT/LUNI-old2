import { useAtomValue } from "jotai";
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import TitleBar from "./components/TitleBar";
import FirstStartPage from "./routes/FirstStartPage";
import { router } from "./routes/router";
import { isFirstStartAtom } from "./atoms";

export default function App() {
  const isFirstStart = useAtomValue(isFirstStartAtom);

  useEffect(() => {
    console.log(isFirstStart);
  }, [isFirstStart]);

  return (
    <React.StrictMode>
      <TitleBar />
      <div className="overflow-overlay flex-1">
        {isFirstStart ? <FirstStartPage /> : <RouterProvider router={router} />}
      </div>
    </React.StrictMode>
  );
}
