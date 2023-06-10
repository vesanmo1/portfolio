import { useState } from "react";
import BurguerButton from "../icons/Burguer-menu";
import Logo from "../icons/Logo";
import Codepen from "../icons/Codepen";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
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
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <div>
            <ul
              className={`navbar__sections-links on-top ${
                clicked ? "active" : ""
              }`}
            >
              <li tabIndex="0" className="sections">
                <Link to="/#landing__hello">¡Hola!</Link>
              </li>
              <li tabIndex="0" className="sections">
                <Link to="/#landing__my-projects"> Mis proyectos</Link>
              </li>
              <li tabIndex="0" className="sections">
                <Link to="/#landing__what-i-do">Qué hago</Link>
              </li>
              <li tabIndex="0" className="sections">
                <Link to="/#landing__who-i-am"> Quién soy</Link>
              </li>
              <li tabIndex="0" className="sections">
                <Link to="#footer"> ¿Hablamos?</Link>
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
