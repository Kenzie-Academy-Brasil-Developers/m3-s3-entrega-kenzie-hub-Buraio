import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import StyledForm from "../../../components/Form/style";
import Input from "../../../components/Input";
import StyledButton from "../../../components/Button/style";
import loginSchema from "./loginSchema";
import StyledRedirectButton from "../../../components/RedirectButton/style";
import kenzieHubApi from "../../../services/api";

const LoginForm = () => {
  const navigate = useNavigate();

  const redirectPage = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitData = async (data) => {
    try {
      const request = await kenzieHubApi.post("sessions", data);

      localStorage.clear();
      localStorage.setItem("@token", request.data.token);
      localStorage.setItem("@userId", request.data.user.id);

      navigate("/dashboard");
      reset();
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitData)} noValidate>
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
