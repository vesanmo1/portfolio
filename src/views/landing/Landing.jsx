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
                  <a className="hover-invert-color" href="#my-projects">
                    últimos trabajos
                  </a>{" "}
                  que he realizado, o quizás prefieras conocer{" "}
                  <a className="hover-invert-color" href="#my-projects">
                    qué hago
                  </a>{" "}
                  y cómo puedo aportar a tu proyecto. <br />
                </p>
                <p className="special-description">
                  No dudes en{" "}
                  <a className="hover-invert-color" href="#my-projects">
                    contactar
                  </a>{" "}
                  conmigo, ¡estaré encantada de responderte!
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
      <div className="side-padding padding-top-sections padding-bottom-sections">
        <h2 className="only-line uppercase">
          Te hablo un poco más <span className="filled-text">sobre mí.</span>
        </h2>
        <p className="h3">
          Descubre mi trayectoria y obtén una visión más completa de quién soy.
        </p>
        <div className="split-content align-start padding-top-subsections">
          <div className="content small claim-container">
            <div className="claim">
              <p className="h5">
                Trabajo de forma flexible y me adapto a los descubrimientos que
                hago en el camino.
              </p>
            </div>
          </div>
          <div className="content large paragraph-spacing">
            <p className="h6">
              Si has llegado hasta aquí, antes que nada, gracias por tu interés.
              Permíteme presentarme nuevamente: me llamo Verónica Sánchez, he
              estudiado el Grado en Ingeniería en Diseño Industrial y Desarrollo
              de Productos y acabo de terminar el Postgrado de Diseño y
              Desarrollo Web front-end.
            </p>
            <p className="h6">
              Antes de comenzar este postgrado, estuve trabajando en una
              start-up de cosmética en la que hice el diseño de la identidad
              visual, el diseño del packaging y el de la web. En esta
              experiencia laboral, pude aprender mucho en poco tiempo y me
              permitió mejorar enormemente en mi capacidad para resolver
              problemas y para gestionar mi tiempo, entre otras.
            </p>
            <p className="h6">
              Ahora que he terminado el postgrado, he descubierto muchas cosas
              que no sabía entonces. Además de diseño, he tenido la oportunidad
              de estudiar código y he aprendido cómo se construye una web, algo
              que actualmente sé que es fundamental tener en cuenta a la hora de
              diseñar.
            </p>
            <p className="h6">
              A día de hoy, estoy desando poder aplicar todos los conocimientos
              que he ido adquiriendo en el camino, seguir aprendiendo y superar
              nuevos retos.
            </p>
          </div>
        </div>
      </div>
      <div className="main-title-underline"></div>
    </>
  );
}

export default Landing;
