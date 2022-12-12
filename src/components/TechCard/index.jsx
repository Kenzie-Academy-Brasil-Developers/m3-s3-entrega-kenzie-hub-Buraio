import React from "react";
import StyledTechCard from "./style";
import trashIcon from "../../assets/trashIcon.svg";

const TechCard = ({ techName, experienceLevel }) => {
  const deleteTechCard = (event) => {
    event.preventDefault();
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

export default TechCard;