import React from "react";
import StyledTechCard from "./style";
import trashIcon from "../../assets/trashIcon.svg";

export const TechCard = ({ techName, experienceLevel }) => {
  const deleteTechCard = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <StyledTechCard>
      <span>{techName}</span>
      <div>
        <span>{experienceLevel}</span>
        <button onClick={deleteTechCard}>
          <img src={trashIcon} alt="" />
        </button>
      </div>
    </StyledTechCard>
  );
};
