import "./View-more.scss";
import LargeArrow from "../icons/Large-arrow";

function ViewMore(props) {
  return (
    <button
      onClick={() => {
        if (props?.onClick) props?.onClick();
      }}
      className="btn__view-more p"
    >
      Ver más
      <LargeArrow />
    </button>
  );
}
export default ViewMore;
