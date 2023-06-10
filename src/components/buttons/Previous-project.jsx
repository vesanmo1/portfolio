import "./Previous-next-project.scss";
import LongestArrowRotated from "../icons/Longest-arrow-rotated";
import { Link } from "react-router-dom";

function PreviousProject(props) {
  return (
    <div className="btn__project btn__project--previous">
      <Link to={props.to} className="decoration-none">
        <div className="same-line gap padding-bottom-small">
          <LongestArrowRotated />
          <p className="h3">Ver proyecto anterior</p>
        </div>

        <p className="p uppercase">The cookie jar</p>
        <h3 className="h5">
          Diseño y desarrollo de un sitio web con Figma, Wordpress y CSS.
        </h3>
      </Link>
    </div>
  );
}
export default PreviousProject;
