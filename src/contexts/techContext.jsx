import React, { createContext } from "react";
import { useState } from "react";
import kenzieHubApi from "../services/api";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [techObj, setTechObj] = useState({});

  const token = localStorage.getItem("@token");

  const createNewTech = async () => {
    const request = await kenzieHubApi.post("users/techs", techObj, { headers: {
      Authorization: `Bearer ${token}`,
    }});

    console.log(request);
  };

  return (
    <TechContext.Provider
      value={{
        activeModal,
        setActiveModal,
        techObj,
        setTechObj,
        createNewTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
