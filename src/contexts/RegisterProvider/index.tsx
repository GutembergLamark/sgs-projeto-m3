import api from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, ReactNode } from "react";
import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
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
  reset: UseFormReset<IUser>;
}

interface IUser {
  name: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword?: string;
  type: string;
  specialties?: string;
  crm?: string;
}

export const RegisterContext = createContext<IRegisterContext>(
  {} as IRegisterContext
);

const RegisterProvider = ({ children }: IRegisterProvider) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const registerUser = (data: IUser) => {
    delete data.confirmPassword;
    api
      .post("/patient", data)
      .then((res) => {
        navigate("/login");
        toast.success("Cadastro realizado com sucesso");
      })
      .catch((err) => {
        toast.error("Algo ineperado aconteceu");
        console.log(err);
      });
    reset();
  };

  return (
    <RegisterContext.Provider
      value={{ handleSubmit, register, errors, registerUser, reset }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
