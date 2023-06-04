import "./Burguer-button.scss";

function BurguerButton(props) {
  return (
    <>
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-5 ${props.clicked ? "open" : ""}`}
      >
        <span className={` ${props.clicked ? "open" : ""}`}></span>
        <span className={` ${props.clicked ? "open" : ""}`}></span>
        <span className={` ${props.clicked ? "open" : ""}`}></span>
      </div>
    </>
  );
}

export default BurguerButton;
