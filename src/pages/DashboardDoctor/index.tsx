import { Form } from "./styles";
import Img from "../../assets/historicoVazio.svg";
import ContentDashboardDoctor from "../../components/ContentDashboardDoctor";
import { useNavigate } from "react-router-dom";

const DashboardDoctor = () => {
  const Navigate = useNavigate();

  const searchPatient = (cpf: any) => {
    /* api.get("/pacientes").then((res) => {
      res.data.filter();
      Navigate("/dashboard/doctor:id", { replace: true });
      return res.data;
    }); */

    Navigate("/dashboard/doctor:id", { replace: true });
  };

  return (
    <ContentDashboardDoctor>
      <Form className="content__main__form">
        <input
          className="form__input"
          type="text"
          placeholder="Insira o cpf do paciente"
        />
        <button className="form__button" onClick={searchPatient}>
          Buscar
        </button>
      </Form>
      <img className="content__empty" src={Img} alt="" />
    </ContentDashboardDoctor>
  );
};

export default DashboardDoctor;
