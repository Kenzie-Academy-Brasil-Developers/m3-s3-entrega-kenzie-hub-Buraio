import { useContext } from "react";
import Header from "../../components/Header";
import { UserContext } from "../../contexts/userContext";
import StyledContainer from "../../styles/Container";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  const { setScroll } = useContext(UserContext);

  setScroll();

  return (
    <StyledContainer>
      <Header pagePath="/" linkName="Voltar" />
      <RegisterForm />
    </StyledContainer>
  );
};

export default RegisterPage;
