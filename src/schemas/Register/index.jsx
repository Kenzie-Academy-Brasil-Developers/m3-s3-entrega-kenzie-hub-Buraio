import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "Nome muito curto")
    .max(100, "Nome muito longo"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Endereço de email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*?[A-Z])/, "Pelo menos uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "Pelo menos uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "Pelo menos um número")
    .matches(/(?=.*?[#?!@$%^&*-])/, "Pelo menos um caractere especial")
    .min(8, "Pelo menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*?[A-Z])/, "Pelo menos uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "Pelo menos uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "Pelo menos um número")
    .matches(/(?=.*?[#?!@$%^&*-])/, "Pelo menos um caractere especial")
    .min(8, "Pelo menos 8 caracteres")
    .oneOf([yup.ref("password")], "As senhas não estão iguais"),
  bio: yup
    .string()
    .required("Campo obrigatório")
    .max(100, "Quantidade de caracteres deve ser menor que 100"),
  contact: yup.string().required("Campo obrigatório"),
  course_module: yup.string().required("Selecione um módulo"),
});

export default registerSchema;
