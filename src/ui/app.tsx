import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import TitleBar from "./components/TitleBar";
import FirstStart from "./routes/FirstStartPage";
import { router } from "./routes/router";
import { userConfig } from "./atoms";

export default function App() {
  const [config, setConfig] = useAtom(userConfig);

  useEffect(() => {
    console.log(config);
  }, [config]);

  return (
    <React.StrictMode>
      <TitleBar />
      <div className="overflow-overlay flex-1">
        {config.firstStart ? (
          <FirstStart />
        ) : (
          <RouterProvider router={router} />
        )}
      </div>
    </React.StrictMode>
  );
}
