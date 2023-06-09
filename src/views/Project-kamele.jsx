import "./Project-kamele.scss";
import NextProjectCookie from "../components/buttons/Next-project-cookie";
import PreviousProjectCookie from "../components/buttons/Previous-project-cookie";

function ProjectKamele() {
  return (
    <>
      <header className="header-projects border-bottom color-project-kamele padding-side">
        <div className="header__image-container">
          <img
            src="images/kamele/kamele-header.png"
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
        <h1 className="h4 header__subtitle-container">
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
                <li>
                  1. Diseñar una interfaz que permita a los pacientes&nbsp;
                  <strong>
                    monitorizar sus actividades y calidad de vida.
                  </strong>
                </li>
                <li>
                  2. Obtener un registro o&nbsp;<strong>historial</strong>
                  &nbsp;con el que los médicos puedan obtener&nbsp;
                  <strong>patrones de conducta del usuario</strong>
                  &nbsp;y relacionarlos con indicadores de calidad de vida.
                </li>
                <li>
                  3. Crear un&nbsp;<strong>diseño intuitivo y fácil</strong>
                  &nbsp;diseño intuitivo y fácil de usar.
                </li>
                <li>
                  4. Crear una&nbsp;<strong>interfaz atractiva</strong>
                  &nbsp;que se aleje de los típicos diseño de interfaces de
                  hospital.
                </li>
              </ol>
            </div>
          </div>
          <div className="content large">
            <img src="images/kamele/2-pantallas-kamele.png" alt="" />
          </div>
        </div>
      </div>
      <div className="padding-side padding-top-large">
        <div className="split-content align-center">
          <div className="same-line gap padding-bottom-small">
            <p className="h2 only-line uppercase">01</p>
            <h5>Objetivos del proyecto</h5>
          </div>
          <div>
            <ol>
              <li>
                1. Diseñar una interfaz que permita a los pacientes&nbsp;
                <strong>monitorizar sus actividades y calidad de vida.</strong>
              </li>
              <li>
                2. Obtener un registro o&nbsp;<strong>historial</strong>
                &nbsp;con el que los médicos puedan obtener&nbsp;
                <strong>patrones de conducta del usuario</strong>
                &nbsp;y relacionarlos con indicadores de calidad de vida.
              </li>
              <li>
                3. Crear un&nbsp;<strong>diseño intuitivo y fácil</strong>
                &nbsp;diseño intuitivo y fácil de usar.
              </li>
              <li>
                4. Crear una&nbsp;<strong>interfaz atractiva</strong>
                &nbsp;que se aleje de los típicos diseño de interfaces de
                hospital.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="padding-side padding-top-large">
        <img
          src="images/kamele/3-pantallas-kamele.png"
          alt="Imagen con 2 smartphones en cuyas pantallas se pueden ver diferentes secciones del diseño de la aplicación"
        />
      </div>
      <div className="same-line">
        <PreviousProjectCookie />
        <NextProjectCookie />
      </div>
    </>
  );
}

export default ProjectKamele;
