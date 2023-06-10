import "./Previous-next-project.scss";
import LongestArrow from "../icons/Longest-arrow";
import { Link } from "react-router-dom";

function NextProject(props) {
  return (
    <div className="btn__project btn__project--next">
      <Link to={props.to} className="decoration-none">
        <div className="same-line gap padding-bottom-small">
          <p className="h3">Ver siguiente proyecto</p>
          <LongestArrow />
        </div>

        <p className="p uppercase">About me</p>
        <h3 className="h5">
          Diseño y desarrollo de una one-page usando Figma, HTML y CSS.
        </h3>
      </Link>
    </div>
  );
}
export default NextProject;
