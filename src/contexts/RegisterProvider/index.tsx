import api from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, ReactNode } from "react";
import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { formSchema } from "../../validator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IRegisterProvider {
  children: ReactNode;
}

interface IRegisterContext {
  handleSubmit: UseFormHandleSubmit<IUser>;
  register: UseFormRegister<IUser>;
  errors: FieldErrorsImpl<IUser>;
  registerUser: (data: IUser) => void;
}

interface IUser {
  name: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword?: string;
  type: string;
  specialtie?: string;
  crm?: string;
  birth_date: string
}

export const RegisterContext = createContext<IRegisterContext>(
  {} as IRegisterContext
);

const RegisterProvider = ({ children }: IRegisterProvider) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const registerUser = (data: IUser) => {
    delete data.confirmPassword;
    if(data.type === "paciente" ){
      delete data.crm
      delete data.specialtie
      api
      .post("/patient", data)
      .then((res) => {
        navigate("/login");
        toast.success("Cadastro realizado com sucesso");
      })
      .catch((err) => {
        toast.error("Ops! Algum campo está incorreto ou usuário já cadastrado");
        console.log(err);
      })
    }else{
      console.log(data)
      api
      .post("/doctor", data)
      .then((res) => {
        navigate("/login");
        toast.success("Cadastro realizado com sucesso");
      })
      .catch((err) => {
        toast.error("Ops! Algum campo está incorreto ou usuário já cadastrado");
        console.log(err);
      })
    }
  };

  return (
    <RegisterContext.Provider
      value={{ handleSubmit, register, errors, registerUser }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
