import React, { useEffect } from "react";
import "./Header-hello.scss";
import HeaderIllustration from "./header-illustration/Header-illustration";

function Header() {
  return (
    <>
      <header className="header">
        <div className="split-content-66-33">
          <div className="content-large">
            <div className="aligning-container">
              <p className="h3">¡Hola! Me llamo Verónica Sánchez</p>
              <h1 className="special-title">
                Lorem ipsum dolor sit amet consectetur adipiscing
              </h1>
              <p className="special-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eros enim, aliquet sit amet nisl vel, vulputate feugiat ligula.
                Fusce id posuere nisi, vitae venenatis metus. Nunc et erat
                ullamcorper, tristique nibh eu, commodo odio.
              </p>
            </div>
          </div>

          <div className="content-small">
            <HeaderIllustration />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
