import "./Project-kamele.scss";

function ProjectKamele() {
  return (
    <>
      <header className="header-projects color-project-kamele padding-side">
        <div className="header__image-container">
          <img
            src="images/kamele-header.png"
            alt="Imagen de una mano cogiendo un dispositivo móvil donde aparece el logotipo de kamele"
          />
        </div>
        <div className="header__title-container">
          <h1 className="kamele-title">
            <span>k</span>
            <span>a</span>
            <span>m</span>
            <span>e</span>
            <span>l</span>
            <span>e</span>
          </h1>
        </div>
      </header>
    </>
  );
}

export default ProjectKamele;
