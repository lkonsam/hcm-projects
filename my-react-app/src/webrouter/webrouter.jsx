import App from "../App";
import HomePage from "../pages/HomePage";
import NewsList from "../pages/NewsList";
import GalleryPage from "../pages/GalleryPage";
import GalleryImagesPage from "../pages/GalleryImagesPage";
import JudgesPage from "../pages/JudgesPage";

const webrouter = [
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
      {
        path: "/judges/list",
        element: <JudgesPage />,
      },
    ],
  },
];

export default webrouter;
