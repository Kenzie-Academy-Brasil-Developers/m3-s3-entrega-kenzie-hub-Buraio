import React from "react";
import StyledButton from "../../components/Button";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import StyledContainer from "../../styles/Container";
import SelectModule from "./SelectModule";

const RegisterPage = () => {
  return (
    <StyledContainer>
      <Header pagePath="/" linkName="Voltar" />
      <Form>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa!</span>

        <Input
          id="nameInput"
          type="text"
          placeholder="Digite aqui seu nome"
          inputName="Nome"
        />
        <Input
          id="emailInput"
          type="email"
          placeholder="Digite aqui seu email"
          inputName="Email"
        />
        <Input
          id="registerPasswordInput"
          type="password"
          placeholder="Digite aqui sua senha"
          inputName="Senha"
        />
        <Input
          id="confirmPasswordInput"
          type="password"
          placeholder="Digite novamente sua senha aqui"
          inputName="Confirmar Senha"
        />
        <Input
          id="bioInput"
          type="text"
          placeholder="Fale sobre você"
          inputName="Bio"
        />
        <Input
          id="contactInput"
          type="number"
          placeholder="Opção de contato"
          inputName="Contato"
        />
        <SelectModule />
        <StyledButton>Cadastrar</StyledButton>
      </Form>
    </StyledContainer>
  );
};

export default RegisterPage;
