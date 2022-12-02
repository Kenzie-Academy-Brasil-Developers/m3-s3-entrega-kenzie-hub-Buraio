import React from "react";
import Form from "../../components/Form";
import Input from "../../components/Input/";
import StyledContainer from "../../styles/Container";
import logoImg from "../../assets/Logo.svg";
import StyledButton from "../../components/Button";
import StyledRedirectButton from "./RedirectButton/style";

const LoginPage = () => {
  return (
    <StyledContainer>
      <h1>
        <img src={logoImg} alt="" />
      </h1>
      <Form>
        <h2>Login</h2>
        <Input
          id="emailInput"
          type="text"
          placeholder="Digite seu email aqui"
          inputName="Email"
        />
        <Input
          id="passwordInput"
          type="password"
          placeholder="Digite sua senha aqui"
          inputName="Senha"
        />

        <StyledButton>Entrar</StyledButton>

        <p>Ainda não possui uma conta?</p>

        <StyledRedirectButton>Cadastre-se</StyledRedirectButton>
      </Form>
    </StyledContainer>
  );
};

export default LoginPage;
