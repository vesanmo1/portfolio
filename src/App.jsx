import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header-hello";
import "./scss/global.scss";
import { useState } from "react";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <Navbar />
      <Header />

      <footer className="read-the-docs">My footer </footer>
    </>
  );
}

export default App;
