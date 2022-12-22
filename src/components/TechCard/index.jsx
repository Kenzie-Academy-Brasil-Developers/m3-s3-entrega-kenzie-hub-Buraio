import React, { useContext } from "react";
import StyledTechCard from "./style";
import trashIcon from "../../assets/trashIcon.svg";
import { UserContext } from "../../contexts/userContext";
import kenzieHubApi from "../../services/api";

const TechCard = ({ id, title, status }) => {
  const deleteTechCard = async (event) => {
    const techCardId = event.target.id;
    console.log(techCardId);

    const token = localStorage.getItem("@token");

    const deleteRequest = await kenzieHubApi.delete(
      `/users/techs/${techCardId}`,
      token
    );
  };

  const getTechCard = (event) => {
    const techCardId = event.target.id;
    console.log(techCardId);
  };

  return (
    <StyledTechCard id={id}>
      <span>{title}</span>
      <div>
        <span>{status}</span>
      </div>
    </StyledTechCard>
  );
};

export default TechCard;
