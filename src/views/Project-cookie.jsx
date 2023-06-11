import NextProject from "../components/buttons/Next-project";
import PreviousProject from "../components/buttons/Previous-project";

function ProjectCookie() {
  return (
    <>
      <h1>THE COOKIE JAR</h1>
      <h1>THE COOKIE JAR</h1>
      <h1>THE COOKIE JAR</h1>
      <h1>THE COOKIE JAR</h1>
      <h1>THE COOKIE JAR</h1>
      <h1>THE COOKIE JAR</h1>
      <h1>THE COOKIE JAR</h1>
      <h1>THE COOKIE JAR</h1>
      <h1>THE COOKIE JAR</h1>
      <h1>THE COOKIE JAR</h1>
      <h1>THE COOKIE JAR</h1>
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
