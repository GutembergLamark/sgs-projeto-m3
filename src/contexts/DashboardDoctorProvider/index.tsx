import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  userSearch: IUser | null;
}

export const DashboardDoctorContext = createContext(
  {} as IDashboardDoctorContext
);

const DashboardDoctorProvider = ({ children }: IDashboardDoctorProvider) => {
  const [cpf, setCpf] = useState("");
  const [userSearch, setUserSearch] = useState(null);
  const [users, setUsers] = useState([]);

  const Navigate = useNavigate();

  const searchPatient = (cpf: string) => {
    api
      .get("users", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlNDBAbWFpbC5jb20iLCJpYXQiOjE2NjI0MDA0ODIsImV4cCI6MTY2MjQwNDA4Miwic3ViIjoiOCJ9.Ztjov87g47Rey6jQp818CB_AHj7HibQzwrq5Hd9LEbQ`,
        },
      })
      .then((res) => {
        setUsers(res.data);
      });
    console.log(users);
    /* setUserSearch(users?.find((user: IUser) => user.cpf === cpf)); */
    userSearch && Navigate("/dashboard/doctor:id", { replace: true });
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
