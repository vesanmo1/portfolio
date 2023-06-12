import React from "react";
import "./Accordion.scss";
import ChevronDown from "../icons/Chevron-down";
import { useCallback, useState } from "react";

function useOpenController(initialState) {
  const [isOpen, setOpenState] = useState(initialState);

  const toggle = useCallback(() => {
    setOpenState((state) => !state);
  }, [setOpenState]);

  return { isOpen, toggle };
}

export const AccordionProjects = ({ section, key }) => {
  const { isOpen, toggle } = useOpenController(false);
  console.log(section);

  return (
    <div className="accordion-container ">
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.answer} />}
    </div>
  );
};

export const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <div className="column-container" onClick={toggle}>
      <div className="column-text special-description">{question}</div>
      <button className="expendable-button">
        <span
          className="material-symbols-outlined"
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "all 0.25s",
          }}
        >
          <ChevronDown />
        </span>
      </button>
    </div>
  );
};

export const TextSection = ({ text }) => {
  return (
    <div className="text-container">
      <p className="h6">{text}</p>
    </div>
  );
};
