import NextProject from "../../components/buttons/Next-project";
import PreviousProject from "../../components/buttons/Previous-project";
import TheCookieJarLogo from "../../the-cookie-jar-logo/The-cookie-Jar-logo";
import { AccordionProjects } from "../../components/accordion/Accordion-projects";
import { dataObjetives } from "./data-objectives/data-objectives";

//ICONS=================================================
import Magnify from "../../components/icons/Magnify";
import Sitemap from "../../components/icons/Sitemap";
import Brush from "../../components/icons/Brush";
import Code from "../../components/icons/Code";

function ProjectCookie() {
  return (
    <>
      <header className="header-projects border-bottom color-project-cookie padding-side">
        <div className="same-line">
          <div className="header__image-container">
            <img
              src="images/cookie/cookie-header.png"
              alt="Imagen de una laptop donde se puede ver la página principal de la web de The cookie Jar"
            />
          </div>
          <TheCookieJarLogo />
        </div>
        <h1 className="h4 header__subtitle-container-cookie">
          La web donde puedes encontrar toda la información, localizaciones y
          novedades de la tienda de galletas The Cookie Jar.
        </h1>
      </header>
      <div className="padding-side padding-top-large">
        <div className="same-line gap padding-bottom-small">
          <p className="h2 only-line uppercase">01</p>
          <h5>Objetivos del proyecto</h5>
        </div>
        <div className="padding-bottom-small">
          {dataObjetives.map((section, index) => {
            return <AccordionProjects key={index} section={section} />;
          })}
        </div>
      </div>
      <div className="padding-side padding-top-large">
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
                  <p className="h6">Estudio de la estrategia</p>
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
                <div className="mail__container same-line gap">
                  <Code />
                  <p className="h6">
                    Programación de la web en Wordpress con Full Site Editing
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="padding-side padding-top-large">
        <div>
          <div className="same-line gap padding-bottom-small">
            <p className="h2 only-line uppercase">03</p>
            <h5>Estrategia</h5>
          </div>
          <p className="padding-bottom-mini">
            Es fundamental tener una estrategia antes de comenzar el diseño de
            cualquier proyecto para poder establecer una dirección clara y
            enfocada para el diseño. Al conocer los objetivos, como comunicar la
            historia de la marca y mostrar los sabores de galletas, se puede
            diseñar la página web de manera coherente y efectiva para lograr
            esos objetivos específicos.
          </p>
          <p className="padding-bottom-mini">
            También es importante, para alinear el diseño con las necesidades
            del cliente, estudiar sus necesidades, como la información que desea
            mostrar y el tipo de experiencia que busca, y así poder satisfacer
            sus expectativas y brindarles un producto final que cumpla con sus
            requerimientos.
          </p>
          <p className="padding-bottom-mini">
            Además, el estudio del buyer persona B2C, que representa al cliente
            ideal, es crucial para diseñar una página web que se conecte y
            resuene con el público objetivo de The Cookie Jar. Comprender
            quiénes son los clientes potenciales, sus características
            demográficas, comportamientos y necesidades, permite adaptar el
            diseño y el tono de voz para atraer y retener a esos clientes.
          </p>
          <p className="padding-bottom-mini">
            De igual forma, estudiar a la competencia proporciona una
            perspectiva importante sobre cómo se están posicionando en el
            mercado y qué están ofreciendo. Esto permite identificar
            oportunidades para destacarse y diferenciarse. Al analizar la
            competencia, se pueden tomar decisiones informadas sobre el diseño y
            el contenido que ayudarán a The Cookie Jar a destacar entre sus
            competidores y aportar un valor único a sus clientes.
          </p>
          <p className="padding-bottom-mini">
            Tras la estrategia previa al diseño que se realizón para el proyecto
            de The Cookie Jar, se sacaron las siguientes conclusiones:
          </p>
          <div className="split-content space-between">
            <div className="content equal">
              <ul>
                <li className="h6 padding-bottom-mini">
                  1. <strong>Diseño colorido y atractivo&nbsp;</strong>que
                  represente la variedad de sabores que ofrece la marca y
                  conecte con emociones de felicidad, alegría y disfrute.
                </li>
                <li className="h6 padding-bottom-mini">
                  2. <strong>Mantener la identidad corporativa&nbsp;</strong>en
                  el diseño de la página web. Debe mantener la misma esencia que
                  las tiendas físicas
                </li>
                <li className="h6 padding-bottom-mini">
                  3. Crear&nbsp;
                  <strong>
                    varios links en diferentes puntos de la web&nbsp;
                  </strong>
                  (sin llegar a ser repetitivos)&nbsp;
                  <strong>que lleven a la localización&nbsp;</strong>
                  de las tiendas ya que la página no es un ecommerce y
                  únicamente hay venta física, por lo que es fundamental que el
                  cliente salga de la web sabiendo dónde puede encontrar The
                  Cookie Jar.
                </li>
                <li className="h6 padding-bottom-mini">
                  4.&nbsp;
                  <strong>
                    Crear un apartado de "Nuestra Historia" para que los
                    clientes conecten con la marca emocionalmente.&nbsp;
                  </strong>
                  Es importante resaltar los valores y la pasión que impulsa la
                  tienda para que puedan comprender la filosofía que hay
                  detrásde ella.
                </li>
                <li className="h6 padding-bottom-mini">
                  5.&nbsp;
                  <strong>Maquetar la web en Wordpress&nbsp;</strong>
                  para que después el cliente pueda actualizar la página de
                  forma autónoma, por ejemplo, añadiendo sabores. Además, el uso
                  de Wordpress facilita la posibilidad de añadir un blog en el
                  futuro
                </li>
              </ul>
            </div>
            <div>
              <img
                src="images/kamele/2-pantallas-kamele.png"
                alt="Imagen con un móvil tumbado y otro de pie donde se ven diferentes secciones de la app Kamele"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="same-line">
        <div className="btn__color-about-me">
          <PreviousProject
            to={"/Project-about-me"}
            projectTitle={"About me"}
            projectDescription={
              "Diseño y desarrollo de una one-page usando Figma, HTML y CSS."
            }
          />
        </div>
        <div className="btn__color-kamele">
          <NextProject
            to={"/Project-kamele"}
            projectTitle={"Kamele"}
            projectDescription={
              "Diseño UX/UI de una app de monitorización de la actividad con Figma."
            }
          />
        </div>
      </div>
    </>
  );
}

export default ProjectCookie;
