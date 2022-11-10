import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, ReactNode, useEffect, useState } from "react";
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
  user: IUser;
  setUser: (data: IUser) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPropsUser {
  results_exams: ReactNode;
  name: string;
  description?: string;
  symptoms?: string;
}

interface IUser {
  email: string;
  name: string;
  cpf: string;
  type: string;
  userId?: string;
  alergias?: IPropsUser[];
  doencas?: IPropsUser[];
  exames?: IPropsUser[];
  remedios?: IPropsUser[];
  id?: number;
  specialte?: string;
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

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@sgs:token");

      if (token) {
        api
          .get(`/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            setUser(data.profile);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      setLoading(false);
    };
    loadUser();
  }, [setLoading, setUser]);

  const navigate = useNavigate();

  const signIn = async (data: IUserSignIn) => {
    api
      .post("/login", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("@sgs:token", res.data.token);
        toast.success("Login realizado com sucesso");
        res.data.isDoctor === false
          ? navigate("/dashboard/patient", { replace: true })
          : navigate("/dashboard/doctor", { replace: true });
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
