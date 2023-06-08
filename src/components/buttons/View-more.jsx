import "./View-more.scss";
import LargeArrow from "../icons/Large-arrow";

function PrimaryButton(props) {
  return (
    <button
      onClick={() => {
        if (props?.onClick) props?.onClick();
      }}
      className="btn-primary p"
    >
      Ver más
      <LargeArrow />
    </button>
  );
}
export default PrimaryButton;
