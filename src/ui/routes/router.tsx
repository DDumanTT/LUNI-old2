import { createMemoryRouter } from "react-router-dom";

import MainLayout from "./MainLayout";
import HomePage from "./HomePage";
import GamesPage from "./GamesPage";
import FriendsPage from "./FriendsPage";
import ErrorPage from "./ErrorPage";

export const router = createMemoryRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/games",
        element: <GamesPage />,
      },
      {
        path: "/friends",
        element: <FriendsPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
