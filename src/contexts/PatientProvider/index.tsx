import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/api";
import { LoginContext } from "../LoginProvider";

interface PatientContextProvider {
  HistoricPacient: () => void;
  historicUser: IUser;
}

interface IPatientProvider {
  children: ReactNode;
}

interface IPatient {
  description: string;
  name: string;
}

interface IUser {
  cpf: string;
  email: string;
  id: number;
  name: string;
  password: string;
  type: string;
  alergias: IPatient[];
  doencas: IPatient[];
  exames: IPatient[];
  remedios: IPatient[];
}

export const PatientContext = createContext({} as PatientContextProvider);
const PatientProvider = ({ children }: IPatientProvider) => {
  const [historicUser, setHistoricUser] = useState<IUser>({} as IUser);
  const token = localStorage.getItem("@sgs:token");
  const { user } = useContext(LoginContext);
  const idUsuario = user.id;

  const HistoricPacient = () => {
    api
      .get(`/users/${idUsuario}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setHistoricUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PatientContext.Provider value={{ HistoricPacient, historicUser }}>
      {children}
    </PatientContext.Provider>
  );
};
export default PatientProvider;
