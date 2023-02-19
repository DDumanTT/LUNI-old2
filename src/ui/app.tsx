import React from "react";
import { RouterProvider } from "react-router-dom";
import TitleBar from "./components/TitleBar";
import { router } from "./routes/router";

export default function App() {
  return (
    <React.StrictMode>
      <TitleBar />
      <div className="">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  );
}
