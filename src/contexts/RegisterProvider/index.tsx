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
  confirmPassword: string;
  type: string;
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
