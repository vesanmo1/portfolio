import { SideImageContent } from "../../components/side-image-content";
import { SectionImageContent } from "./SectionImageContent";
import "./landing.scss";

function Landing() {
  return (
    <div className="landing">
      <SideImageContent
        imgAlt="Gatito tierno"
        imgSrc="https://media.istockphoto.com/id/1345472306/es/foto/un-hermoso-gatito-de-jengibre-se-sienta-en-botes-humanos-al-atardecer-al-aire-libre-el.jpg?s=612x612&w=0&k=20&c=cFZudSbqRlHQkmbLhThMfrYau9e_s2YmRUfC2oz-3hs="
      >
        <button>Mi contenido</button>
      </SideImageContent>
      <SideImageContent
        imgAlt="Gatito tierno"
        alignImgRight
        className="gatito-100"
        contentClassName="gatito-100__content"
        imgSrc="https://media.istockphoto.com/id/1345472306/es/foto/un-hermoso-gatito-de-jengibre-se-sienta-en-botes-humanos-al-atardecer-al-aire-libre-el.jpg?s=612x612&w=0&k=20&c=cFZudSbqRlHQkmbLhThMfrYau9e_s2YmRUfC2oz-3hs="
      >
        <SectionImageContent
          title="About me"
          description="soy murciano"
          button="Apóyame"
        />
      </SideImageContent>
      <SideImageContent
        imgAlt="Gatito tierno"
        imgSrc="https://media.istockphoto.com/id/1345472306/es/foto/un-hermoso-gatito-de-jengibre-se-sienta-en-botes-humanos-al-atardecer-al-aire-libre-el.jpg?s=612x612&w=0&k=20&c=cFZudSbqRlHQkmbLhThMfrYau9e_s2YmRUfC2oz-3hs="
      >
        <SectionImageContent
          title="Josemi"
          description="Tengo hambre"
          button="Cómprame un llaollao"
        />
      </SideImageContent>
    </div>
  );
}

export default Landing;
