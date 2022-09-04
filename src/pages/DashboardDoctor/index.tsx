import { Form } from "./styles";
import Img from "../../assets/historicoVazio.svg";
import ContentDashboardDoctor from "../../components/ContentDashboardDoctor";

const DashboardDoctor = () => {
  return (
    <ContentDashboardDoctor>
      <Form className="content__main__form">
        <input
          className="form__input"
          type="text"
          placeholder="Insira o cpf do paciente"
        />
        <button className="form__button">Buscar</button>
      </Form>
      <img className="content__empty" src={Img} alt="" />
    </ContentDashboardDoctor>
  );
};

export default DashboardDoctor;
