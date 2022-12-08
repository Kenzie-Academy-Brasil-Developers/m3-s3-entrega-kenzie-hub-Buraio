import React, { useEffect } from "react";
import StyledContainer from "../../styles/Container";
import logoImg from "../../assets/Logo.svg";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

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
