import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, ReactNode, useState } from "react";
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

interface IPaciente {
  email: string;
  name: string;
  cpf: string;
  type: string;
  /* alergias?: string[];
  doencas?: string[];
  exames?: string[];
  remedios?: string[]; */
  id: string;
}

interface ILoginContext {
  handleSubmit: UseFormHandleSubmit<IUserSignIn>;
  register: UseFormRegister<IUserSignIn>;
  errors: FieldErrorsImpl<IUserSignIn>;
  signIn: (data: IUserSignIn) => void;
  user: IUser;
  setUser: (data: IUser) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUser {
  email: string;
  name: string;
  cpf: string;
  type: string;
  userId?: string;
  alergias?: string[];
  doencas?: string[];
  exames?: string[];
  remedios?: string[];
  id?: number;
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

  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const signIn = async (data: IUserSignIn) => {
    console.log(data);
    api
      .post("/login", data)
      .then((res) => {
        console.log(res);

        localStorage.clear();
        setUser(res.data.user);

        localStorage.setItem("@sgs:token", res.data.accessToken);
        localStorage.setItem("@sgs:id", res.data.user.id);
        toast.success("Login realizado com sucesso");
        res.data.user.type === "paciente"
          ? navigate("/dashboard/patient", { replace: true })
          : navigate("dashboard/doctor", { replace: true });
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos ou não cadastrados");
        console.log(err);
      });
  };

  return (
    <LoginContext.Provider
      value={{
        signIn,
        register,
        errors,
        handleSubmit,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
