import "./Landing.scss";
import HeaderIllustration from "./header-illustration/Header-illustration";
import PrimaryButton from "../buttons/Primary-button";
import ChevronDown from "../icons/Chevron-down";

//Accordion buttons
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function Landing() {
  return (
    <>
      <header className="header side-padding">
        <div className="split-content">
          <div className="content large">
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
          <div className="content small">
            <HeaderIllustration />
          </div>
        </div>
      </header>
      <div className="side-padding padding-top-sections">
        <h2 className="only-line uppercase">
          Echa un vistazo a mis últimos{" "}
          <span className="filled-text">proyectos</span>
        </h2>
        <p className="h3">
          Siempre busco crear experiencias intuitivas, atractivas y accesibles
        </p>
        <div className="cards__container padding-top-subsections">
          <div className="card">
            <p className="uppercase">The cookie jar</p>
            <h3 className="h5">
              Diseño y desarrollo de un sitio web con Figma, Wordpress y CSS
            </h3>
            <PrimaryButton />
            <div className="card__image-conntainer">
              <img
                src="images/about-me-landing.png"
                alt="Imagen de un teléfono móvil flotando junto a unas galletas. En la pantalla del móvil se puede ver el logotipo de la marca de la que se explica el proceso de diseño."
              />
            </div>
          </div>
          <div className="card">
            <p className="uppercase">The cookie jar</p>
            <h3 className="h5">
              Diseño y desarrollo de un sitio web con Figma, Wordpress y CSS
            </h3>
            <PrimaryButton />
            <div className="card__image-conntainer">
              <img
                src="images/about-me-landing.png"
                alt="Imagen de un teléfono móvil flotando junto a unas galletas. En la pantalla del móvil se puede ver el logotipo de la marca de la que se explica el proceso de diseño."
              />
            </div>
          </div>
          <div className="card">
            <p className="uppercase">The cookie jar</p>
            <h3 className="h5">
              Diseño y desarrollo de un sitio web con Figma, Wordpress y CSS
            </h3>
            <PrimaryButton />
            <div className="card__image-conntainer">
              <img
                src="images/about-me-landing.png"
                alt="Imagen de un teléfono móvil flotando junto a unas galletas. En la pantalla del móvil se puede ver el logotipo de la marca de la que se explica el proceso de diseño."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="side-padding padding-top-sections">
        <h2 className="only-line uppercase">
          Déjame mostrarte <span className="filled-text">qué hago</span>
        </h2>
        <p className="h3">
          Aporto soluciones para que tu sitio web esté en lo más alto
        </p>
        <div className="padding-top-subsections"></div>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 className="h4 uppercase">Estudio de estrategia</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 className="h4 uppercase">Diseño de experiencia de usuario</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 className="h4 uppercase">Diseño de interfaz de usuario</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 className="h4 uppercase">Diseño de interacción</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 className="h4 uppercase">Pruebas de usabilidad</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 className="h4 uppercase">Desarrollo front-end</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="side-padding padding-top-sections">
        <h2 className="only-line uppercase">
          Te hablo un poco más <span className="filled-text">sobre mí</span>
        </h2>
        <p className="h3">
          Siempre busco crear experiencias intuitivas, atractivas y accesibles
        </p>
        <div className="split-content padding-top-subsections">
          <div className="content equal claim-container">
            <div className="claim">
              <p className="h5">
                Trabajo de forma flexible y me adapto a los descubrimientos que
                hago en el camino.
              </p>
            </div>
          </div>
          <div className="content equal">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eros enim, aliquet sit amet nisl vel, vulputate feugiat ligula.
              Fusce id posuere nisi, vitae venenatis metus. Nunc et erat
              ullamcorper, tristique nibh eu, commodo odio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
