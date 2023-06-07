import React, { useState } from "react";
import BurguerButton from "../icons/Burguer-menu";
import Logo from "../icons/Logo";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
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
                tabindex="0"
                onClick={() => scrollToSection("landing__hello")}
                className="sections"
              >
                ¡Hola!
              </li>
              <li
                tabindex="0"
                onClick={() => scrollToSection("landing__my-projects")}
                className="sections"
              >
                Mis proyectos
              </li>
              <li
                tabindex="0"
                onClick={() => scrollToSection("landing__what-i-do")}
                className="sections"
              >
                Qué hago
              </li>
              <li
                tabindex="0"
                onClick={() => scrollToSection("landing__who-i-am")}
                className="sections"
              >
                Quién soy
              </li>
              <li
                tabindex="0"
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
              <a href="#hello">github</a>
            </li>
            <li>
              <a href="#my-projects">linkedin</a>
            </li>
            <li>
              <a href="#what-i-do">codepen</a>
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
