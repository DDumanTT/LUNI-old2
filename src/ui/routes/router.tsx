import { createMemoryRouter } from "react-router-dom";
import Main from "./Main";

export const router = createMemoryRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/test",
    element: <div>testets</div>,
  },
]);
