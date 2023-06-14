import NextProject from "../../components/buttons/Next-project";
import PreviousProject from "../../components/buttons/Previous-project";

//ICONS=================================================
import Code from "../../components/icons/Code";
import Sitemap from "../../components/icons/Sitemap";
import Brush from "../../components/icons/Brush";

//IMAGES===================================================================
import HeaderAboutMe from "../../../images/about-me/header-about-me.png";
import MacAboutMe from "../../../images/about-me/mac-about-me.png";

function ProjectAboutMe() {
  return (
    <>
      <header className="header-projects border-bottom color-project-about-me padding-side">
        <div className="header__image-container">
          <img
            className="max-height500"
            src={HeaderAboutMe}
            alt="Tablet y smartphone con la página de inicio del About me"
          />
        </div>
        <div className="header__title-container-kamele content align-center uppercase">
          <p className="about-me-title">About me</p>
        </div>

        <h1 className="h4 header__subtitle-container-cookie">
          La primera web que diseñé usando Figma y programé usando Visual Studio
          Code. Web hecha con HTML y CSS.
        </h1>
      </header>
      <div className="padding-side padding-top-large">
        <div className="split-content align-center">
          <div className="content small">
            <div className="same-line gap padding-bottom-small">
              <p className="h2 only-line uppercase">01</p>
              <h5>Objetivos del proyecto</h5>
            </div>
            <div>
              <ol>
                <li className="padding-bottom-mini">
                  1. Diseñar una&nbsp;
                  <strong>página web responsive&nbsp;</strong>que permita a los
                  visitantes acceder al sitio web desde cualquier dispositivo.
                </li>
                <li className="padding-bottom-mini">
                  2. Crear un diseño web atractivo que &nbsp;
                  <strong>
                    cumpla con las Pautas de accesibilidad al contenido web.
                  </strong>
                </li>
                <li className="padding-bottom-mini">
                  3. Porgramar la web haciendo uso de&nbsp;
                  <strong>Visual Studio Code con HTML Y CSS.</strong>
                </li>
              </ol>
            </div>
          </div>
          <div className="content large">
            <img
              src={MacAboutMe}
              alt="Imagen de un Mac con parte de la one page del about me"
            />
          </div>
        </div>
      </div>
      <div className="padding-side padding-top-large content align-center">
        <div>
          <div className="same-line gap padding-bottom-small">
            <p className="h2 only-line uppercase">02</p>
            <h5>Mi contribución al proyecto</h5>
          </div>
          <div>
            <ul>
              <li>
                <div className="mail__container same-line gap">
                  <Sitemap />
                  <p className="h6">Arquitectura informacional</p>
                </div>
              </li>
              <li>
                <div className="mail__container same-line gap">
                  <Brush />
                  <p className="h6">Diseño de interfaz de usuario</p>
                </div>
              </li>
              <li>
                <div className="mail__container same-line gap">
                  <Code />
                  <p className="h6">Programación de la web con HTML y CSS</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="same-line">
        <div className="btn__previous-next btn__color-kamele">
          <PreviousProject
            to={"/Project-kamele"}
            projectTitle={"Kamele"}
            projectDescription={
              "Diseño UX/UI de una app de monitorización de la actividad con Figma."
            }
          />
        </div>
        <div className="btn__previous-next btn__color-cookie">
          <NextProject
            to={"/Project-cookie"}
            projectTitle={"The Cookie Jar"}
            projectDescription={
              "Diseño y desarrollo de un sitio web con Figma, Wordpress y CSS."
            }
          />
        </div>
      </div>
    </>
  );
}

export default ProjectAboutMe;
