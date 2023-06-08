import React from "react";
import Email from "../icons/Email";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div class="padding-side padding-top-sections padding-bottom-sections invert-colors">
        <h2 class="special-title">¿Hablamos?</h2>
        <h3 class="h3">
          Si te ha gustado lo que hago no dudes en ponerte en contacto conmigo:
        </h3>
        <div className="mail__container icon-and-text">
          <Email />
          <a className="h4 text__color-primary">
            veronicasanchez.design@gmail.com
          </a>
        </div>
        <div className="legal">
          <a>Aviso legal</a>
          <a>Política de privacidad</a>
          <a>Cookies</a>
        </div>
      </div>
    </>
  );
};
export default Footer;
