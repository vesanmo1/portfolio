import { Outlet, Link } from "react-router-dom";
import "./app.scss";
import { useState } from "react";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <header className="header">
        <nav className={`menu ${showMobileMenu ? "menu--show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/projects">Projects1</Link>
          <Link to="/projects">Projects2</Link>
          <Link to="/projects">Projects3</Link>
          <button className="menu__close" onClick={handleShowMenuClick}>
            X
          </button>
        </nav>
        <button className="show-menu" onClick={handleShowMenuClick}>
          Menu
        </button>
      </header>

      <Outlet />
      <footer className="read-the-docs">My footer </footer>
    </>
  );
}

export default App;
