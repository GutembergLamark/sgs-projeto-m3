import { Form } from "./styles";
import Img from "../../assets/historicoVazio.svg";
import ContentDashboardDoctor from "../../components/ContentDashboardDoctor";
import { useContext, useEffect } from "react";
import { DashboardDoctorContext } from "../../contexts/DashboardDoctorProvider";
import api from "../../services/api";
import { LoginContext } from "../../contexts/LoginProvider";

const DashboardDoctor = () => {
  const { searchPatient, cpf, setCpf } = useContext(DashboardDoctorContext);
  const { setUser } = useContext(LoginContext);

  const token = localStorage.getItem("@sgs:token");

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data.profile));
  }, []);

  return (
    <ContentDashboardDoctor>
      <Form
        className="content__main__form"
        onSubmit={(ev: Event) => {
          ev.preventDefault();
          searchPatient(cpf);
        }}
      >
        <input
          className="form__input"
          type="text"
          placeholder="Insira o cpf do paciente"
          onChange={(ev) => setCpf(ev.target.value)}
        />
        <button className="form__button" type="submit">
          Buscar
        </button>
      </Form>
      <img className="content__empty" src={Img} alt="" />
    </ContentDashboardDoctor>
  );
};

export default DashboardDoctor;
