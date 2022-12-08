import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header";
import { UserContext } from "../../contexts/userContext";
import kenzieHubApi from "../../services/api";
import StyledDashContainer from "./style";
const DashboardPage = () => {
  const { navigate } = useContext(UserContext);

  const [userName, setUserName] = useState();
  const [userModule, setUserModule] = useState();

  const loggedUserToken = localStorage.getItem("@token");
  const loggedUserId = localStorage.getItem("@userId");

  useEffect(() => {
    if (!loggedUserToken) {
      navigate("/");
    } else {
      getUserDataFromApi();
    }
  }, []);

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

  return (
    <>
      <Header pagePath="/" linkName="Sair" />
      <StyledDashContainer>
        <h2>Olá, {userName}!</h2>
        <p>{userModule}</p>
      </StyledDashContainer>
    </>
  );
};

export default DashboardPage;
