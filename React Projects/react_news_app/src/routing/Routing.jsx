import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NewsPage from "../pages/NewsPage";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/news", element: <NewsPage /> },
    ],
  },
]);

export default Routing;
