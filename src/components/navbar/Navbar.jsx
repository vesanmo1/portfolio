import React, { useState } from "react";
import BurguerButton from "../icons/Burguer-menu";
import Logo from "../icons/Logo";
import Codepen from "../icons/Codepen";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();

  const scrollToSection = (id) => {
    const isHomePage = window.location.pathname === "/";
    if (isHomePage) {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      const handleNavigation = () => {
        if (window.location.pathname === "/") {
          window.removeEventListener("DOMContentLoaded", handleNavigation);
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

      window.addEventListener("DOMContentLoaded", handleNavigation);
      window.location.href = "/";
    }
  };

  //Navbar from mobile
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando está true lo pasa a false y viceversa
    setClicked(!clicked);
  };

  return (
    <>
      <div className="navbar__container">
        <nav className="navbar">
          <li>
            <a href="/" onClick={() => navigation("/")}>
              <Logo />
            </a>
          </li>
          <div>
            <ul
              className={`navbar__sections-links on-top ${
                clicked ? "active" : ""
              }`}
            >
              <li
                tabIndex="0"
                onClick={() => scrollToSection("landing__hello")}
                className="sections"
              >
                ¡Hola!
              </li>
              <li
                tabIndex="0"
                onClick={() => scrollToSection("landing__my-projects")}
                className="sections"
              >
                Mis proyectos
              </li>
              <li
                tabIndex="0"
                onClick={() => scrollToSection("landing__what-i-do")}
                className="sections"
              >
                Qué hago
              </li>
              <li
                tabIndex="0"
                onClick={() => scrollToSection("landing__who-i-am")}
                className="sections"
              >
                Quién soy
              </li>
              <li
                tabIndex="0"
                onClick={() => scrollToSection("footer")}
                className="sections"
              >
                ¿Hablamos?
              </li>
            </ul>
          </div>

          <ul
            className={`navbar__rrss-links on-bottom ${
              clicked ? "active" : ""
            }`}
          >
            <li>
              <a href="https://codepen.io/vesanmo1" target="_blank">
                <Codepen />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ver%C3%B3nica-s%C3%A1nchez-moreno-a264441b3/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/vesanmo1" target="_blank">
                <Github />
              </a>
            </li>
          </ul>

          <div className="burguerButton">
            <BurguerButton clicked={clicked} handleClick={handleClick} />
          </div>
          <div className={`initial ${clicked ? " active" : ""}`}></div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
