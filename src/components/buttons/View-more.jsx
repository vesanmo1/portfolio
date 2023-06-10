import "./View-more.scss";
import LargeArrow from "../icons/Large-arrow";
import { Link } from "react-router-dom";

function ViewMore(props) {
  return (
    <Link
      to={props.to}
      className="btn__view-more p btn__view-more--kamele btn__view-more--cookie btn__view-more--about-me"
    >
      Ver más
      <LargeArrow />
    </Link>
  );
}
export default ViewMore;
