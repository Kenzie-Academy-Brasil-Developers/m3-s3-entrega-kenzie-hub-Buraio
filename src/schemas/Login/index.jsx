import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Endereço de email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default loginSchema;
