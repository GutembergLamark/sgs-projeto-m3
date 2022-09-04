import api from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, ReactNode } from "react";
import {
  FieldErrorsImpl,
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { formSchema } from "../../validator";

interface IRegisterProvider {
  children: ReactNode;
}

interface IRegisterContext {
  signIn: (data: any) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<IUser>;
  register: UseFormRegister<IUser>;
  errors: FieldErrorsImpl<IUser>;
  registerUser: (data: IUser) => void;
}

interface IUser {
  findIndex(arg0: (object: any) => boolean): unknown;
  splice(index: unknown, arg1: number): unknown;
  indexOf(arg0: string): unknown;
  name: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword: string;
  type: string;
}

interface IUserSignIn {
  email: string;
  password: number;
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

  const registerUser = (data: IUser) => {
    console.log(data);
    console.log(data);
  };

  const signIn = async (data: IUserSignIn) => {
    try {
      const response = await api.post("/login", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RegisterContext.Provider
      value={{ signIn, handleSubmit, register, errors, registerUser }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
