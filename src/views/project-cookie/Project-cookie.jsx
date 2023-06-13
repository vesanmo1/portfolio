import "../Projects.scss";
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
import VisualStudio from "../../components/icons/Visual-studio-code";
import Wordpress from "../../components/icons/Wordpress";
import Figma from "../../components/icons/Figma";

//WIREFRAMES=================================================
import FlavorsCookie from "../../components/wireframes-cookie/Flavors-cookie";
import HomepageCookie from "../../components/wireframes-cookie/Homepage-cookie";
import SingularFlavorCookie from "../../components/wireframes-cookie/Singular-flavor-cookie";

//STYLEGUIDE=================================================
import ColorsCookie from "../../components/Styleguide-cookie/Colors-cookie";
import ButtonsCookie from "../../components/Styleguide-cookie/Buttons-cookie";
import TypoCookie from "../../components/Styleguide-cookie/Typo-cookie";

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
      <div>
        <div className="padding-side padding-top-large">
          <div className="split-content align-center">
            <div className="content small">
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
                        Programación de la web en Wordpress con Full Site
                        Editing
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content large align-center">
              <img
                src="images/cookie/1-pantalla-cookie.png"
                alt="Imagen con un móvil tumbado donde se ve parte de la home de la web de la que hablamos."
              />
            </div>
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
            También es importante, para alinear el diseño con los requisitos del
            cliente, estudiar sus necesidades, como la información que desea que
            se muestre y el tipo de experiencia que busca, y así poder
            satisfacer sus expectativas y brindarles un producto final que
            cumpla con sus requerimientos.
          </p>
          <p className="padding-bottom-mini">
            Además, el estudio del buyer persona B2C, que representa al cliente
            ideal, es crucial para diseñar una página web que conecte con el
            público objetivo de The Cookie Jar. Comprender quiénes son los
            clientes potenciales, sus características demográficas,
            comportamientos y necesidades, permite adaptar el diseño y el tono
            de voz para atraer y retener a esos clientes.
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
            Tras la estrategia previa al diseño, que se realizó para el proyecto
            de The Cookie Jar, se sacaron las siguientes conclusiones:
          </p>
          <div className="split-content space-between">
            <div className="content small">
              <ul>
                <li className="padding-bottom-mini">
                  1. <strong>Diseño colorido y atractivo&nbsp;</strong>que
                  represente la variedad de sabores que ofrece la marca y
                  conecte con emociones de felicidad, alegría y disfrute.
                </li>
                <li className="padding-bottom-mini">
                  2. <strong>Mantener la identidad corporativa&nbsp;</strong>en
                  el diseño de la página web. Debe mantener la misma esencia que
                  las tiendas físicas
                </li>
                <li className="padding-bottom-mini">
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
                <li className="padding-bottom-mini">
                  4.&nbsp;
                  <strong>
                    Crear un apartado de "Nuestra Historia" para que los
                    clientes conecten con la marca emocionalmente.&nbsp;
                  </strong>
                  Es importante resaltar los valores y la pasión que impulsa la
                  tienda para que puedan comprender la filosofía que hay
                  detrásde ella.
                </li>
                <li className="padding-bottom-mini">
                  5.&nbsp;
                  <strong>Maquetar la web en Wordpress&nbsp;</strong>
                  para que después el cliente pueda actualizar la página de
                  forma autónoma, por ejemplo, añadiendo sabores. Además, el uso
                  de Wordpress facilita la posibilidad de añadir un blog en el
                  futuro
                </li>
                <li className="padding-bottom-mini">
                  5.&nbsp;
                  <strong>Crear un error 404 personalizado.&nbsp;</strong>
                  Al proporcionar una página de error 404 personalizada, se
                  puede ofrecer una experiencia más amigable y comprensible para
                  el usuario. Esto muestra que te preocupas por su experiencia y
                  estás comprometido con la calidad de tu sitio web. Además,
                  personalizar este error, que es más común de lo que pensamos,
                  nos da la oportunidad de brindar información útil o
                  alternativas relevantes dentro del sitio web, lo que puede
                  reducir el abandono y aumentar la retención de los visitantes.
                </li>
              </ul>
            </div>
            <div className="content large">
              <img
                src="images/cookie/Gravity-Devices.png"
                alt="Conjunto de dispositivos móviles flotando con diferentes partes de la web de The Cookie Jar"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="padding-side padding-top-large content align-center">
        <div>
          <div className="same-line gap padding-bottom-small justify-center">
            <p className="h2 only-line uppercase">04</p>
            <h5>User Flow</h5>
          </div>
          <div>
            <img
              className="max-height900"
              src="images/cookie/User-flow.png"
              alt="User flow de The Cookie Jar"
            />
          </div>
        </div>
      </div>

      <div className="padding-side padding-top-large">
        <div>
          <div className="same-line gap padding-bottom-small">
            <p className="h2 only-line uppercase">05</p>
            <h5>Wireframes</h5>
          </div>
          <div>
            <p className="padding-bottom-mini">
              Realizar primero los wireframes ha proporcionado una
              representación visual de la estructura y el flujo de la página web
              y ha ayudado a definir la disposición de los elementos, como el
              encabezado, el menú de navegación, los bloques de contenido y los
              pies de página. Esto permite tener una visión clara de cómo se
              organizará la información y cómo los usuarios interactuarán con la
              página.
            </p>
            <p className="padding-bottom-median">
              Por tanto, los wireframes nos permiten centrarnos en la usabilidad
              y en la experiencia del usuario. Al definir la disposición y la
              jerarquía de los elementos, se puede tener en cuenta la facilidad
              de uso, la accesibilidad y la navegación intuitiva. Esto ayuda a
              garantizar que el diseño final de la página web sea intuitivo y
              satisfactorio para los visitantes.
            </p>
          </div>
          <div className="same-line gap padding-bottom-mini">
            <HomepageCookie />
            <FlavorsCookie />
            <SingularFlavorCookie />
          </div>
        </div>
      </div>
      <div className="padding-side padding-top-large">
        <div>
          <div className="same-line gap padding-bottom-small">
            <p className="h2 only-line uppercase">06</p>
            <h5>Guía de estilos</h5>
          </div>
        </div>
        <div>
          <p className="padding-bottom-median">
            Es importante hacer una guía de estilos para el proyecto The Cookie
            Jar, especialmente debido a la naturaleza colorida de la web y la
            necesidad de asegurar que los colores se combinen de manera
            específica para cumplir con las pautas de accesibilidad al contenido
            web. Todas las combinaciones de colores cumplen con el contraste
            mínimo establecido. Por otro lado, el blanco se utiliza únicamente
            en textos junto a un fondo de color oscuro (con todos cumple con el
            contraste mínimo) y el color negro se usa en textos con un fondo de
            color claro, que también cumplen todos el contraste.
          </p>
        </div>
        <div className="split-content space-between">
          <div>
            <p className="h3 padding-bottom-small">Colores</p>
            <ColorsCookie />
          </div>
          <div>
            <p className="h3 padding-bottom-small">Botones</p>
            <ButtonsCookie />
            <p className="h3 padding-bottom-small padding-top-small">
              Tipografía
            </p>
            <TypoCookie />
          </div>
        </div>
      </div>
      <div className="padding-side padding-top-large same-line gap">
        <div>
          <img
            src="images/cookie/Flavors-cookie.png"
            alt="Laptop con la página de sabores de The Cookie Jar"
          />
        </div>
        <div>
          <img
            src="images/cookie/Singular-flavor-cookie.png"
            alt="Laptop con la página del sabor taro de las cookies de The Cookie Jar"
          />
        </div>
      </div>
      <div className="padding-side padding-top-large padding-bottom-large">
        <div className="split-content space-between align-start">
          <div className="content large">
            <div className="same-line gap padding-bottom-small">
              <p className="h2 only-line uppercase">07</p>
              <h5>Programación en Wordpress</h5>
            </div>
            <div>
              <p className="padding-bottom-small">
                En el desarrollo de la página web de The Cookie Jar, utilicé
                WordPress dado que consideré que era la mejor opción para este
                proyecto. Gracias a su interfaz amigable, el cliente puede
                actualizar fácilmente el contenido sin soporte. Además, esta
                herramienta facilita la incorporación de funcionalidades
                futuras, como un blog. Por otra parte, el uso de una plantilla
                personalizada mediante full site editing y el uso de CSS con
                Visual Studio Code me permitieron adaptar el diseño y agregar
                estilos personalizados, superando las limitaciones de WordPress
                sin código.
              </p>
              <p className="padding-bottom-small">
                Durante la fase de programación, se priorizó el enfoque mobile
                first, lo que aseguró que el diseño de la página web se adaptara
                perfectamente a todos los dispositivos. Al adoptar este enfoque,
                se garantizó que la experiencia del usuario fuera óptima en
                dispositivos móviles, como smartphones y tablets, que son cada
                vez más utilizados para acceder a contenido en línea. La web
                resultante es responsive, lo que significa que se ajusta
                automáticamente al tamaño de pantalla, proporcionando una
                navegación fluida y una visualización adecuada sin importar el
                dispositivo utilizado.
              </p>
              <p className="h3 padding-bottom-small">Herramientas</p>
              <ul>
                <li>
                  <div className="mail__container same-line gap">
                    <Wordpress />
                    <p className="h6">Wordpress</p>
                  </div>
                </li>
                <li>
                  <div className="mail__container same-line gap">
                    <VisualStudio />
                    <p className="h6">Visual Studio Code</p>
                  </div>
                </li>
                <li>
                  <div className="mail__container same-line gap">
                    <Figma />
                    <p className="h6">Figma (estrategia y diseño)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="content small">
            <div>
              <img
                src="images/cookie/Singular-flavor-mobile.png"
                alt="Laptop con la página de sabores de The Cookie Jar"
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
