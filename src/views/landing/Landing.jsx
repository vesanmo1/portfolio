import "./Landing.scss";
import HeaderIllustration from "./header-illustration/Header-illustration";
import PrimaryButton from "../../components/buttons/Primary-button";
import { data } from "./data-what-i-do/data";
import { Accordion } from "../../components/accordion/Accordion";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigation = useNavigate();

  return (
    <>
      <header className="header side-padding">
        <div className="split-content">
          <div className="content large">
            <div className="aligning-container">
              <p className="h3">¡Hola! Me llamo Verónica Sánchez,</p>
              <h1 className="special-title">
                Creo experiencias y transformo ideas en pixels.
              </h1>
              <div className="paragraph-spacing">
                <p className="special-description">
                  Te invito a descubrir los{" "}
                  <a href="#my-projects">últimos trabajos</a> que he realizado,
                  o quizás prefieras conocer <a href="#my-projects">qué hago</a>{" "}
                  y cómo puedo aportar a tu proyecto. <br />
                </p>
                <p className="special-description">
                  No dudes en <a href="#my-projects">contactar</a> conmigo,
                  ¡estaré encantada de responderte!
                </p>
              </div>
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
          <span className="filled-text">proyectos.</span>
        </h2>
        <p className="h3">
          Siempre busco crear experiencias intuitivas, atractivas y accesibles.
        </p>
        <div className="cards__container padding-top-subsections">
          <div className="card color-cookie">
            <p className="uppercase">The cookie jar</p>
            <h3 className="h5">
              Diseño y desarrollo de un sitio web con Figma, Wordpress y CSS.
            </h3>
            <PrimaryButton onClick={() => navigation("/projects")} />
            <div className="card__image-container">
              <img
                src="images/cookie-landing.png"
                alt="Imagen de un teléfono móvil flotando junto a unas galletas. En la pantalla del móvil se puede ver el logotipo de la marca de la que se explica el proceso de diseño."
              />
            </div>
          </div>
          <div className="card color-kamele">
            <p className="uppercase">Kamele</p>
            <h3 className="h5">
              Diseño UX/UI de una app de monitorización de la actividad con
              Figma.
            </h3>
            <PrimaryButton />
            <div className="card__image-container">
              <img
                src="images/kamele-landing.png"
                alt="Imagen de dos teléfonos móviles. En las pantallas de los teléfonos se puede ver parte del diseño de la aplicación Kamele."
              />
            </div>
          </div>
          <div className="card color-about-me">
            <p className="uppercase">About me</p>
            <h3 className="h5">
              Diseño y desarrollo de una one-page usando Figma, HTML y CSS.
            </h3>
            <PrimaryButton />
            <div className="card__image-container">
              <img
                src="images/about-me-landing.png"
                alt="Imagen de una tablet. En la pantalla de la tablet se puede ver el diseño de la web."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="side-padding padding-top-sections">
        <h2 className="only-line uppercase">
          Déjame mostrarte <span className="filled-text">qué hago.</span>
        </h2>
        <p className="h3">
          Aporto soluciones para que tu sitio web esté en lo más alto.
        </p>
        <div className="padding-top-subsections">
          {data.map((section, index) => {
            return <Accordion key={index} section={section} />;
          })}
        </div>
      </div>
      <div className="side-padding padding-top-sections">
        <h2 className="only-line uppercase">
          Te hablo un poco más <span className="filled-text">sobre mí.</span>
        </h2>
        <p className="h3">
          Descubre mi trayectoria y obtén una visión más completa de quién soy.
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
      <div className="main-title-underline"></div>
    </>
  );
}

export default Landing;
