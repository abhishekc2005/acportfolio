import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Blogs from "./pages/Blogs.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blogs",
        children: [
          {
            path: "",
            Component: Blogs
          },
          {
            path: ":slug",
            Component: SingleBlog,
          },
        ],
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
