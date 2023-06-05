import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./scss/global.scss";
import { useState } from "react";
import Landing from "./components/landing/Landing";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <Navbar />
      <Landing />

      <footer className="read-the-docs">My footer </footer>
    </>
  );
}

export default App;
