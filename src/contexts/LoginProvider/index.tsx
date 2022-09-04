import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, ReactNode } from "react";
import { schema } from "../../validator";

import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

interface ILoginProvider {
  children: ReactNode;
}

interface IUserSignIn {
  email: string;
  password: string;
}

interface ILoginContext {
  handleSubmit: UseFormHandleSubmit<IUserSignIn>;
  register: UseFormRegister<IUserSignIn>;
  errors: FieldErrorsImpl<IUserSignIn>;
  signIn: (data: IUserSignIn) => void;
}

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);

const LoginProvider = ({ children }: ILoginProvider) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSignIn>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const signIn = async (data: IUserSignIn) => {
    console.log(data);
    api
      .post("/login", data)
      .then((res) => {
        console.log(res);
        //setUser(res.data.user);
        localStorage.clear();
        localStorage.setItem("@sgs:user", res.data.user.id);
        localStorage.setItem("@sgs:token", res.data.accessToken);
        toast.success("Login realizado com sucesso");
        if (res.data.user.type === "paciente") {
          navigate("/dashboard/patient");
        } else {
          navigate("/dashboard/doctor");
        }
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos ou não cadastrados");
        console.log(err);
      });
  };

  return (
    <LoginContext.Provider value={{ signIn, register, errors, handleSubmit }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
