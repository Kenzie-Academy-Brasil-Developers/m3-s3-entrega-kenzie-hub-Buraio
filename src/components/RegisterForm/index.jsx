import StyledForm from "../Form/style";
import { useForm } from "react-hook-form";
import Input from "../Input";
import SelectModule from "../SelectModule";
import StyledButton from "../Button/style";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "./registerSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const RegisterForm = () => {
  const { registerData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(registerData)} noValidate>
      <h2>Crie sua conta</h2>
      <span>Rápido e grátis, vamos nessa!</span>

      <Input
        id="nameInput"
        type="text"
        placeholder="Digite aqui seu nome"
        inputName="Nome"
        register={register("name")}
        error={errors.name?.message}
      />
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
      <Input
        id="confirmPasswordInput"
        type="password"
        placeholder="Digite novamente sua senha aqui"
        inputName="Confirmar Senha"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <Input
        id="bioInput"
        type="text"
        placeholder="Fale sobre você"
        inputName="Bio"
        register={register("bio")}
        error={errors.bio?.message}
      />
      <Input
        id="contactInput"
        type="number"
        placeholder="Opção de contato"
        inputName="Contato"
        register={register("contact")}
        error={errors.contact?.message}
      />
      <SelectModule
        register={register("course_module")}
        error={errors.course_module?.message}
      />
      <StyledButton type="submit">Cadastrar</StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
