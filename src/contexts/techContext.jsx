import React, { createContext } from "react";

const TechContext = createContext({});

const TechProvider = ({ children }) => {
  return <TechContext.Provider>{children}</TechContext.Provider>;
};

export default TechProvider;