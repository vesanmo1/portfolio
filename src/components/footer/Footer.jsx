import React from "react";
import Email from "../icons/Email";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="padding-side padding-top-median padding-bottom-median invert-colors">
        <h2 className="special-title">¿Hablamos?</h2>
        <h3 className="h3">
          Si te ha gustado lo que hago no dudes en ponerte en contacto conmigo:
        </h3>
        <div className="mail__container same-line gap">
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
