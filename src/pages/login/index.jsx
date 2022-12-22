import React, { useContext } from "react";
import StyledContainer from "../../styles/Container";
import logoImg from "../../assets/Logo.svg";
import LoginForm from "../../components/LoginForm";
import { UserContext } from "../../contexts/userContext";

const LoginPage = () => {
  const { setScroll } = useContext(UserContext);

  setScroll();

  return (
    <StyledContainer>
      <h1>
        <img src={logoImg} alt="" />
      </h1>
      <LoginForm />
    </StyledContainer>
  );
};

export default LoginPage;
