import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { type Page } from "./type/Page.interface";

const pages: Page[] = [
  { path: "/", name: "Home", element: <Home /> },
  { path: "/about", name: "About", element: <About /> },
  { path: "/contact", name: "Contact", element: <Contact /> },
];

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        {pages.map((page) => (
          <NavLink
            key={page.path}
            to={page.path}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {page.name}
          </NavLink>
        ))}
      </nav>

      <Routes>
        {pages.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
