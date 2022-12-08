import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import kenzieHubApi from "../../services/api";
import StyledContainer from "../../styles/Container";

const DashboardPage = () => {
  const [userName, setUserName] = useState();
  const [userModule, setUserModule] = useState();

  const loggedUserToken = localStorage.getItem("@token");
  const loggedUserId = localStorage.getItem("@userId");

  const getUserDataFromApi = async () => {
    try {
      const request = await kenzieHubApi.get(
        `users/${loggedUserId}`,
        loggedUserToken
      );
      setUserName(request.data.name);
      setUserModule(request.data.course_module);
    } catch (error) {
      console.error(error);
    }
  };

  getUserDataFromApi();

  return (
    <>
      <Header pagePath="/" linkName="Sair" />
      <StyledContainer>
        <h2>Olá, {userName}!</h2>
        <p>{userModule}</p>
      </StyledContainer>
    </>
  );
};

export default DashboardPage;
