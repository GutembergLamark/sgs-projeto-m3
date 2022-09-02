import MenuAside from "../../components/MenuAsideDoctor";
import { Main } from "./styles";
import Img from "../../assets/historicoVazio.svg";

const DashboardDoctor = () => {
  return (
    <Main>
      <MenuAside />
      <section className="content__main">
        <form className="content__main__form">
          <input
            className="form__input"
            type="text"
            placeholder="Insira o cpf do paciente"
          />
          <button className="form__button">Buscar</button>
        </form>
        <img className="content__empty" src={Img} alt="" />
      </section>
    </Main>
  );
};

export default DashboardDoctor;
