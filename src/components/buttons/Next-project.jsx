import "./Previous-next-project.scss";
import LongestArrow from "../icons/Longest-arrow";
import { Link } from "react-router-dom";

function NextProject(props) {
  const { projectTitle, projectDescription } = props;
  return (
    <div className="btn__project btn__project--next">
      <Link to={props.to} className="decoration-none">
        <div className="same-line gap padding-bottom-small">
          <p className="h3">
            Ver siguiente
            <br />
            proyecto
          </p>
          <LongestArrow />
        </div>

        <p className="p uppercase">{projectTitle}</p>
        <h3 className="h5">{projectDescription}</h3>
      </Link>
    </div>
  );
}
export default NextProject;
