import React, { useEffect } from "react";
import Header from "../../components/Header";
import StyledContainer from "../../styles/Container";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <StyledContainer>
      <Header pagePath="/" linkName="Voltar" />
      <RegisterForm />
    </StyledContainer>
  );
};

export default RegisterPage;
