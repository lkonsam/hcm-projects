/* Main.jsx */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import NewsList from "./pages/NewsList.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import GalleryImagesPage from "./pages/GalleryImagesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/news/list",
        element: <NewsList />,
      },
      {
        path: "/gallery/list",
        element: <GalleryPage />,
      },
      {
        path: "/gallery/images",
        element: <GalleryImagesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
