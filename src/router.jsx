import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Header from "./layout/Page/Home/Header/Header";
import Skills from "./layout/Page/Home/Skils/Skills";
import About from "./layout/Page/About/About";
import Contact from "./layout/Page/Contact/Contact";
import Project from "./layout/Page/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/Projects",
        element: <Project></Project>
      }

    ]
  },

]);
export default router;