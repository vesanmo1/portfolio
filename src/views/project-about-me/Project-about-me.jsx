import NextProject from "../../components/buttons/Next-project";
import PreviousProject from "../../components/buttons/Previous-project";

//ICONS=================================================
import Code from "../../components/icons/Code";
import Sitemap from "../../components/icons/Sitemap";
import Brush from "../../components/icons/Brush";
import VisualStudio from "../../components/icons/Visual-studio-code";
import Figma from "../../components/icons/Figma";

//IMAGES===================================================================
import HeaderAboutMe from "../../../images/about-me/header-about-me.png";
import MacAboutMe from "../../../images/about-me/mac-about-me.png";
import DevicesAboutMe from "../../../images/about-me/devices-about-me.png";

//STYLEGUIDE===============================================================
import ColorsAbout from "../../StyleguideAboutMe/Colors-about";
import TypoAbout from "../../StyleguideAboutMe/Typo-about";
import ButtonsAbout from "../../StyleguideAboutMe/Buttons-about";

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
      <div className="padding-side padding-top-large">
        <img
          src={DevicesAboutMe}
          alt="Imagen con 3 smartphones en cuyas pantallas se pueden ver diferentes secciones del diseño de la aplicación."
        />
      </div>
      <div className="padding-side padding-top-large">
        <div className="padding-bottom-median">
          <div className="same-line gap padding-bottom-small">
            <p className="h2 only-line uppercase">03</p>
            <h5>Guía de estilos</h5>
          </div>
          <p className="padding-bottom-mini">
            Una guía de estilos garantiza la coherencia visual y de comunicación
            en todos los aspectos de la marca, desde el logotipo hasta los
            colores, tipografías, estilos de imágenes y tono de voz. Esto ayuda
            a establecer una identidad de marca sólida y reconocible. Además,
            ahorra tiempo y recursos, ya que se evita la necesidad de tomar
            decisiones repetitivas o reinventar constantemente la apariencia y
            el tono de la marca. Por otro lado, también mejora la experiencia
            del usuario, dado que al mantener elementos visuales y de
            comunicación coherentes en todos los puntos de contacto con los
            usuarios, se genera confianza y familiaridad, lo que puede aumentar
            la fidelidad y satisfacción del usuario.
          </p>

          <p>
            Por otro lado, es importante destacar que el contraste adecuado en
            el texto de una página web o aplicación móvil es fundamental para
            garantizar la accesibilidad y la buena experiencia de todos los
            usuarios, independientemente de sus capacidades visuales. Por eso,
            en este proyecto se han tenido en cuenta las pautas de accesibilidad
            para el contenido web y se ha buscado un contraste entre el texto y
            el fondo que asegure su legibilidad fácilmente, lo cual es esencial
            para que los usuarios puedan leer y comprender el contenido sin
            esfuerzo adicional.
          </p>
        </div>
        <div className="split-content space-between">
          <div>
            <p className="h3 padding-bottom-small">Colores</p>
            <ColorsAbout />
          </div>
          <div>
            <p className="h3 padding-bottom-small">Tipografía</p>
            <TypoAbout />
          </div>
          <div>
            <p className="h3 padding-bottom-small">Botones y checkbox</p>
            <ButtonsAbout />
          </div>
        </div>
      </div>
      <div className="padding-side padding-top-large padding-bottom-large">
        <div>
          <div className="same-line gap padding-bottom-small">
            <p className="h2 only-line uppercase">03</p>
            <h5>Programación en Visual Estudio Code</h5>
          </div>
          <p className="padding-bottom-small">
            En este proyecto me enfrenté al desafío de familiarizarme con nuevas
            herramientas que hasta ese momento desconocía por completo: Visual
            Studio Code y Figma. Mi objetivo era crear una página web one-page,
            responsive y accesible. A medida que exploraba estas herramientas,
            descubrí su potencial y flexibilidad para el diseño y desarrollo
            web. Aprendí a utilizar Visual Studio Code y fui mejorando en la
            creación de código limpio y eficiente. Mientras, Figma me permitió
            crear diseños visualmente atractivos y adaptativos con auto layout y
            marcar ya elementos como los margin, padding... que iba a tener mi
            web cuando la programase. A través de este proyecto, logré superar
            el reto de aprender nuevas habilidades y crear una web que cumpliera
            con los estándares de accesibilidad y respuesta a diferentes
            dispositivos.
          </p>

          <p className="h3 padding-bottom-small">Herramientas</p>
          <ul>
            <li>
              <div className="mail__container same-line gap">
                <VisualStudio />
                <p className="h6">Visual Studio Code</p>
              </div>
            </li>
            <li>
              <div className="mail__container same-line gap padding-bottom-small">
                <Figma />
                <p className="h6">Figma (estrategia y diseño)</p>
              </div>
            </li>
          </ul>
          <p className="h3 padding-bottom-small">Link a Github</p>
          <p className="h6">
            Visita mi web haciendo clic{" "}
            <a
              className="h6"
              href="https://github.com/vesanmo1/About-me"
              target="_blank"
            >
              aquí
            </a>
          </p>
        </div>
      </div>
      <div className="btn__previous-next">
        <div className=" btn__color-kamele">
          <PreviousProject
            to={"/Project-kamele"}
            projectTitle={"Kamele"}
            projectDescription={
              "Diseño UX/UI de una app de monitorización de la actividad con Figma."
            }
          />
        </div>
        <div className=" btn__color-cookie">
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
