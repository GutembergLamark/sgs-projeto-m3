import MenuAside from "../../components/MenuAside";
import { Main } from "./styles";

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
        <img
          className="content__empty"
          src={require("../../assets/Medical.gif")}
          alt=""
        />
      </section>
    </Main>
  );
};

export default DashboardDoctor;
