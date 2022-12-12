import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import StyledForm from "../../../components/Form/style";
import Input from "../../../components/Input";
import StyledButton from "../../../components/Button/style";
import loginSchema from "./loginSchema";
import StyledRedirectButton from "../../../components/RedirectButton/style";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";

const LoginForm = () => {
  const { loginData, redirectPage } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(loginData)} noValidate>
      <h2>Login</h2>

      <Input
        id="emailInput"
        type="email"
        placeholder="Digite aqui seu email"
        inputName="Email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        id="registerPasswordInput"
        type="password"
        placeholder="Digite aqui sua senha"
        inputName="Senha"
        register={register("password")}
        error={errors.password?.message}
      />
      <StyledButton type="submit">Entrar</StyledButton>

      <p>Ainda não possui uma conta?</p>

      <StyledRedirectButton onClick={redirectPage}>
        Cadastre-se
      </StyledRedirectButton>
    </StyledForm>
  );
};

export default LoginForm;
