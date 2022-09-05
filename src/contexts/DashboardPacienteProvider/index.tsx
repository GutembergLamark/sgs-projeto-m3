import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { LoginContext } from "../LoginProvider";

interface IDashboardPacienteContext {}

interface IDashboardPacienteProvider {
  children: ReactNode;
}

export const DashboardPacienteContext =
  createContext<IDashboardPacienteContext>({} as IDashboardPacienteContext);

const DashboardPacienteProvider = ({
  children,
}: IDashboardPacienteProvider) => {
  /*  const token = localStorage.getItem("@sgs:token");
  const { user, setUser } = useContext(LoginContext);
  const idUsuario = user.id;

  const [alergias, setAlergias] = useState<IAlergias[]>([]);
  const [doencas, setDoencas] = useState([]);
  const [exames, setExames] = useState([]);
  const [remedios, setRemedios] = useState([]);

  const incluirAlergias = (data: IAlergias) => {
    api
     .post(
        `/pacientes/${idUsuario}`,
        {
          user: { ...user, setAlergias([ data, ...alergias]) },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setUser(res);
        toast.success("Cadastro realizado com sucesso");
        console.log(res);
      })
      .catch((err) => {
        toast.error(
          "Cadastro não realizado. Por favor, tente novamente mais tarde !"
        );
        console.log(err);
      }); 

    console.log(data);
  }; */

  return (
    <DashboardPacienteContext.Provider value={{}}>
      {children}
    </DashboardPacienteContext.Provider>
  );
};

export default DashboardPacienteProvider;
