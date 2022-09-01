import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  cpf: yup.string().required("CPF obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .required("Senha obrigatória")
    .oneOf([yup.ref("password")], "Senha deve ser idêntica"),
});
