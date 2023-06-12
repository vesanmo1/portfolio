import NextProject from "../../components/buttons/Next-project";
import PreviousProject from "../../components/buttons/Previous-project";

function ProjectAboutMe() {
  return (
    <>
      <h1>about me</h1>
      <h1>about me</h1>
      <h1>about me</h1>
      <h1>about me</h1>
      <h1>about me</h1>
      <h1>about me</h1>
      <h1>about me</h1>
      <h1>about me</h1>
      <h1>about me</h1>
      <h1>about me</h1>
      <h1>about me</h1>
      <h1>about me</h1>
      <div className="same-line">
        <div className="btn__color-kamele">
          <PreviousProject
            to={"/Project-kamele"}
            projectTitle={"Kamele"}
            projectDescription={
              "Diseño UX/UI de una app de monitorización de la actividad con Figma."
            }
          />
        </div>
        <div className="btn__color-cookie">
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
