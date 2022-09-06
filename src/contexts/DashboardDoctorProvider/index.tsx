import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

interface IDashboardDoctorProvider {
  children: ReactNode;
}

interface IUser {
  cpf: string;
  email: string;
  id: number;
  name: string;
  password: string;
  type: string;
}

interface IDashboardDoctorContext {
  searchPatient: (cpf: string) => void;
  cpf: string;
  setCpf: React.Dispatch<React.SetStateAction<string>>;
  logout: () => void;
  userSearch: IUser[] | null;
}

export const DashboardDoctorContext = createContext(
  {} as IDashboardDoctorContext
);

const DashboardDoctorProvider = ({ children }: IDashboardDoctorProvider) => {
  const [cpf, setCpf] = useState("");
  const [userSearch, setUserSearch] = useState(null);

  const Navigate = useNavigate();

  const searchPatient = (cpf: string) => {
    api
      .get(`users?cpf=${cpf}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlNDJAbWFpbC5jb20iLCJpYXQiOjE2NjI0MjIxMDUsImV4cCI6MTY2MjQyNTcwNSwic3ViIjoiOCJ9.6aZ5TwXXokWBbJixwh_4lXZOJtpVUkF9xTz-QxD-RKc`,
        },
      })
      .then((res) => {
        setUserSearch(res.data);

        if (res.data[0]?.type === "paciente") {
          Navigate("/dashboard/doctor:id", { replace: true });
        } else {
          toast.error("CPF não encontrado");
          Navigate("/dashboard/doctor", { replace: true });
        }
      })
      .catch(() => {
        toast.error("Ops, algo deu errado :(");
      });

    setCpf("");
  };

  const logout = () => {
    Navigate("/", { replace: true });
    localStorage.clear();
  };

  return (
    <DashboardDoctorContext.Provider
      value={{ searchPatient, cpf, setCpf, logout, userSearch }}
    >
      {children}
    </DashboardDoctorContext.Provider>
  );
};

export default DashboardDoctorProvider;
