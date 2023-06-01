import { useState } from "react";

export const SectionImageContent = (props) => {
  const [contentToShow, setContentToShow] = useState("hardSkills");
  return (
    <>
      <div>
        <button
          onClick={() => setContentToShow("hardSkills")}
          className={contentToShow === "hardSkills" ? "red" : ""}
        >
          Hard skills
        </button>
        <button
          onClick={() => setContentToShow("softSkills")}
          className={contentToShow === "softSkills" ? "red" : ""}
        >
          Soft skills
        </button>
        <button className={contentToShow === "education" ? "red" : ""}>
          Education
        </button>
      </div>
      {contentToShow === "hardSkills" && <div>Estas son mis hard skills</div>}
      {contentToShow === "softSkills" && <div>Estas son mis soft skills</div>}
      {contentToShow === "education" && (
        <div>Estas son mis education skills</div>
      )}
    </>
  );
};
