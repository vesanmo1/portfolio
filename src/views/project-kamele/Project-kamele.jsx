import "../Projects.scss";
import NextProject from "../../components/buttons/Next-project";
import PreviousProject from "../../components/buttons/Previous-project";
import { AccordionProjects } from "../../components/accordion/Accordion-projects";
import { dataValueProposition } from "./data-value-proposition/data-value-proposition";
import { dataCustomerProfile } from "./data-customer-profile/data-customer-profile";

//ICONS=================================================
import Magnify from "../../components/icons/Magnify";
import Sitemap from "../../components/icons/Sitemap";
import Brush from "../../components/icons/Brush";
import Present from "../../components/icons/Present";
import Profile from "../../components/icons/Profile";

//WIREFRAMES=================================================
import KameleCalendar from "../../components/wireframes-kamele/Kamele-calendar";
import KameleCheckbox from "../../components/wireframes-kamele/Kamele-checkbox";
import KameleHome from "../../components/wireframes-kamele/Kamele-home";
import KameleProfile from "../../components/wireframes-kamele/Kamele-profile";
import KameleQuestionnaire from "../../components/wireframes-kamele/Kamele-questionnaire";
import KameleToday from "../../components/wireframes-kamele/Kamele-today";

//STYLEGUIDE==================================================
import ColorsKamele from "../../components/Styleguide-kamele/Colors-kamele";
import TypoKamele from "../../components/Styleguide-kamele/Typo-kamele";
import ButtonsKamele from "../../components/Styleguide-kamele/Buttons-kamele";

//IMAGES======================================================
import KameleHeader from "../../../images/kamele/kamele-header.png";
import ScreenKamele2 from "../../../images/kamele/2-pantallas-kamele.png";
import ScreenKamele3 from "../../../images/kamele/3-pantallas-kamele.png";
import ScreenKamele5 from "../../../images/kamele/5-pantallas-kamele.png";
import KameleNotification from "../../../images/kamele/notification-kamele.png";

function ProjectKamele() {
  let projectTitle;
  let projectDescription;

  return (
    <>
      <header className="header-projects border-bottom color-project-kamele padding-side">
        <div className="header__image-container">
          <img
            src={KameleHeader}
            alt="Imagen de una mano cogiendo un dispositivo móvil donde aparece el logotipo de kamele"
          />
        </div>
        <div className="header__title-container">
          <p className="kamele-title">
            <span className="kammele__color--blue-darkest">k</span>
            <span className="kammele__color--blue-intermediate">a</span>
            <span className="kammele__color--blue-clearest">m</span>
            <span className="kammele__color--yellow">e</span>
            <span className="kammele__color--orange">l</span>
            <span className="kammele__color--burgundy">e</span>
          </p>
        </div>
        <h1 className="h4 header__subtitle-container-kamele">
          La app que monitoriza la calidad de vida en pacientes que empiezan un
          tratamiento oncológico.
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
                  1. Diseñar una interfaz que permita a los pacientes&nbsp;
                  <strong>
                    monitorizar sus actividades y calidad de vida.
                  </strong>
                </li>
                <li className="padding-bottom-mini">
                  2. Obtener un registro o&nbsp;<strong>historial</strong>
                  &nbsp;con el que los médicos puedan obtener&nbsp;
                  <strong>patrones de conducta del usuario</strong>
                  &nbsp;y relacionarlos con indicadores de calidad de vida.
                </li>
                <li className="padding-bottom-mini">
                  3. Crear un&nbsp;<strong>diseño intuitivo y fácil</strong>
                  &nbsp;diseño intuitivo y fácil de usar.
                </li>
                <li className="padding-bottom-mini">
                  4. Crear una&nbsp;<strong>interfaz atractiva</strong>
                  &nbsp;que se aleje de los típicos diseño de interfaces de
                  hospital.
                </li>
              </ol>
            </div>
          </div>
          <div className="content large">
            <img
              src={ScreenKamele2}
              alt="Imagen con un móvil tumbado y otro de pie donde se ven diferentes secciones de la app Kamele"
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
                  <Magnify />
                  <p className="h6">Investigación de experiencia de usuario</p>
                </div>
              </li>
              <li>
                <div className="mail__container same-line gap">
                  <Sitemap />
                  <p className="h6">Arquitectura informacional</p>
                </div>
              </li>
              <li>
                <div className="mail__container same-line gap">
                  <Brush />
                  <p className="h6">
                    Diseño de experiencia de usuario y de interfaz
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="padding-side padding-top-large">
        <img
          src={ScreenKamele3}
          alt="Imagen con 3 smartphones en cuyas pantallas se pueden ver diferentes secciones del diseño de la aplicación."
        />
      </div>
      <div className="padding-side padding-top-large">
        <div className="padding-bottom-median">
          <div className="same-line gap padding-bottom-small">
            <p className="h2 only-line uppercase">03</p>
            <h5>Investigación , descubrimientos y conclusiones</h5>
          </div>
          <p>
            Hay muchas aplicaciones de monitorización de las actividades, pero
            no están enfocadas ni preparadas para las necesidades de personas
            que empiezan un tratamiento oncológico. Por tanto, el reto de este
            proyecto, es crear una app que cubra las necesidades específicas de
            los pacientes y, sobre todo, obtener patrones de comportamiento del
            usuario. Estos datos son muy valiosos para la toma de decisiones de
            los médicos.
          </p>
        </div>
        <div>
          <p className="h3 padding-bottom-small">
            Propuesta de valor y perfil del cliente
          </p>
        </div>
        <div>
          <div className="split-content space-between align-start">
            <div className="content equal">
              <div className="same-line gap padding-bottom-small">
                <Present />
                <p className="h4">Propuesta de valor</p>
              </div>
              <div>
                {dataValueProposition.map((section, index) => {
                  return <AccordionProjects key={index} section={section} />;
                })}
              </div>
            </div>
            <div className="content equal">
              <div className="same-line gap padding-bottom-small">
                <Profile />
                <p className="h4">Perfil del cliente</p>
              </div>
              <div>
                {dataCustomerProfile.map((section, index) => {
                  return <AccordionProjects key={index} section={section} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="padding-top-median split-content">
          <div className="content align-center equal">
            <img
              className="max-height"
              src={KameleNotification}
              alt="Imagen con 1 móvil con una notificación de Kamele"
            />
          </div>
          <div className="content equal">
            <p className="h3 padding-bottom-small">
              Conclusiones de las encuestas y del journey map
            </p>

            <p>- Hacer un proceso de registro sencillo y rápido.</p>
            <p>
              - Ofrecer un tutorial interactivo para familiarizarse con la
              interfaz de la aplicación.
            </p>
            <p>
              - Ofrecer recordatorios y notificaciones para completar los
              cuestionarios.
            </p>
            <p>
              - Brindar retroalimentación positiva y consejos personalizados.
            </p>
            <p>
              - Proporcionar visualizaciones claras y comprensibles de los datos
              recopilados.
            </p>
            <p>
              - Resaltar como un logro cuando se rellenan los cuestionarios los
              cuestionarios diariamente.
            </p>
            <p>
              - No premiar por hacer más actividades al día ya que el objetivo
              de la app es registrar la actividad, no fomentarla.
            </p>
          </div>
        </div>
      </div>
      <div className="padding-side padding-top-large">
        <img
          src={ScreenKamele5}
          alt="Imagen con 5 smartphones en cuyas pantallas se pueden ver diferentes secciones del diseño de la aplicación, en concreto los formularios y cuestionarios de la misma"
        />
      </div>
      <div className="padding-side padding-top-median">
        <div className="padding-bottom-median">
          <div className="same-line gap padding-bottom-small">
            <p className="h2 only-line uppercase">04</p>
            <h5>Wireframes</h5>
          </div>
          <p>
            Los wireframes nos permitieron ahorrar tiempo a la hora de definir y
            planificar la disposición de los elementos de la interfaz. También
            nos permitieron estudiar primero la usabilidad y la experiencia del
            usuario, dejando los aspectos visuales a un lado y enfocándonos en
            la organización de los elementos y el flujo de interacción. Además,
            nos ayudaron a comunicarnos dentro del equipo y alinear las
            expectativas y objetivos del proyecto.
          </p>
        </div>
        <div className="same-line gap">
          <KameleHome />
          <KameleToday />
          <KameleCalendar />
          <KameleProfile />
          <KameleCheckbox />
          <KameleQuestionnaire />
        </div>
      </div>
      <div className="padding-side padding-top-large padding-bottom-large">
        <div className="padding-bottom-median">
          <div className="same-line gap padding-bottom-small">
            <p className="h2 only-line uppercase">05</p>
            <h5>Guía de estilos</h5>
          </div>
          <p className="padding-bottom-mini">
            Con esta guía de estilos se garantiza que el diseño visual de la
            aplicación se mantenga consistente en todas sus pantallas y
            elementos. Esto incluye aspectos como la tipografía, los colores,
            los iconos y la disposición de los elementos. La consistencia visual
            crea una experiencia coherente para los usuarios, lo que facilita la
            comprensión y la navegación de la aplicación. De esta forma, los
            usuarios se familiarizan rápidamente con la forma de interactuar con
            la aplicación, lo que mejora la experiencia de usuario y reduce la
            curva de aprendizaje.
          </p>

          <p>
            Además, al tener una guía de estilos, el proceso de diseño se
            agiliza y permite que sea flexible y escalable, ya que no tienen que
            tomar decisiones sobre aspectos visuales y de diseño en cada
            pantalla o elemento nuevo y a medida que la aplicación crece y se
            agregan nuevas funcionalidades, la guía de estilos proporciona una
            base sólida que facilita la integración de nuevos elementos. Del
            mismo modo, la guía de estilos también desempeña un papel crucial en
            la creación y el mantenimiento de la identidad de marca.
          </p>
        </div>
        <div className="split-content space-between">
          <div>
            <p className="h3 padding-bottom-small">Colores</p>
            <ColorsKamele />
          </div>
          <div>
            <p className="h3 padding-bottom-small">Tipografía</p>
            <TypoKamele />
          </div>
          <div>
            <p className="h3 padding-bottom-small">Botones y checkbox</p>
            <ButtonsKamele />
          </div>
        </div>
      </div>

      <div className="btn__previous-next">
        <div className="btn__color-cookie">
          <PreviousProject
            to={"/Project-cookie"}
            projectTitle={"The cookie Jar"}
            projectDescription={
              "Diseño y desarrollo de un sitio web con Figma, Wordpress y CSS."
            }
          />
        </div>
        <div className="btn__color-about-me">
          <NextProject
            to={"/Project-about-me"}
            projectTitle={"About me"}
            projectDescription={
              "Diseño y desarrollo de una one-page usando Figma, HTML y CSS."
            }
          />
        </div>
      </div>
    </>
  );
}

export default ProjectKamele;
