import "./Next-project.scss";
import LongestArrow from "../icons/Longest-arrow";

function NextProjectCookie(props) {
  return (
    <div
      onClick={() => {
        if (props?.onClick) props?.onClick();
      }}
      className="btn__next-project color-about-me padding-side padding-top-median padding-bottom-median "
    >
      <div className="same-line gap padding-bottom-small">
        <p className="h3">Ver siguiente proyecto</p>
        <LongestArrow />
      </div>

      <p className="p uppercase">About me</p>
      <h3 className="h5">
        Diseño y desarrollo de una one-page usando Figma, HTML y CSS.
      </h3>
    </div>
  );
}
export default NextProjectCookie;
