import React from "react";
import Header from "../../components/Header";
import StyledContainer from "../../styles/Container";

const DashboardPage = () => {
  return (
    <>
      <Header pagePath="/" linkName="Sair"/>
      <StyledContainer>
        <h2>Olá, Usuário</h2>
        <p>Número módulo</p>
      </StyledContainer>
    </>
  );
};

export default DashboardPage;