import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "cards",
        element: <CardsPage />,
      },
      {
        path: "new",
        element: <ErrorPage />,
      },
    ],
  },
]);
