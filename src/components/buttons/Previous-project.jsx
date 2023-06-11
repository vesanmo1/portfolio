import "./Previous-next-project.scss";
import LongestArrowRotated from "../icons/Longest-arrow-rotated";
import { Link } from "react-router-dom";

function PreviousProject(props) {
  const { projectTitle, projectDescription } = props;
  return (
    <div className="btn__project btn__project--previous">
      <Link to={props.to} className="decoration-none">
        <div className="same-line gap padding-bottom-small btn__project--previous">
          <LongestArrowRotated />
          <p className="h3">
            Ver proyecto
            <br />
            anterior
          </p>
        </div>

        <p className="p uppercase">{projectTitle}</p>
        <h3 className="h5">{projectDescription}</h3>
      </Link>
    </div>
  );
}
export default PreviousProject;
