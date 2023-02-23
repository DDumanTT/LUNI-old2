/* eslint-disable @typescript-eslint/no-non-null-assertion */
import "./ui/index.css";

import { createRoot } from "react-dom/client";
import { createElement } from "react";
import App from "./ui/App";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(createElement(App));
