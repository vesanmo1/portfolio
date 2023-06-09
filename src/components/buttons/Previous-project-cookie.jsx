import "./Previous-project.scss";
import LongestArrowRotated from "../icons/Longest-arrow-rotated";

function PreviousProjectCookie(props) {
  return (
    <div
      onClick={() => {
        if (props?.onClick) props?.onClick();
      }}
      className="btn__previous-project color-cookie padding-side padding-top-median padding-bottom-median "
    >
      <div className="same-line gap padding-bottom-small">
        <LongestArrowRotated />
        <p className="h3">Ver proyecto anterior</p>
      </div>

      <p className="p uppercase">The cookie jar</p>
      <h3 className="h5">
        Diseño y desarrollo de un sitio web con Figma, Wordpress y CSS.
      </h3>
    </div>
  );
}
export default PreviousProjectCookie;
