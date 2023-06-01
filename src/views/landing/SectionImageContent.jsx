import "./landing.scss";

export const SectionImageContent = (props) => {
  const { title, description, buttonText } = props;
  return (
    <>
      <h3 className="section-img-content__title">{title}</h3>
      <p className="section-img-content__description">{description}</p>
      <button className="section-img-content__button">{buttonText}</button>
    </>
  );
};
