import { useContext, useEffect } from "react";

import ContentDashboardDoctor from "../../components/ContentDashboardDoctor";

import Profile from "../../assets/ProfileTest.svg";

import { BiArrowBack } from "react-icons/bi";

import { Form, MainDashboard } from "./styles";

import { useNavigate } from "react-router-dom";

import { DashboardDoctorContext } from "../../contexts/DashboardDoctorProvider";

import { LoginContext } from "../../contexts/LoginProvider";

import api from "../../services/api";

const ListDoctor = () => {
  const { userSearch, searchPatient, cpf, setCpf } = useContext(
    DashboardDoctorContext
  );

  const Navigate = useNavigate();

  const { setUser, setLoading } = useContext(LoginContext);

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
  }, []);

  return (
    <ContentDashboardDoctor>
      <BiArrowBack
        size={40}
        onClick={() => Navigate("/dashboard/doctor", { replace: true })}
      />
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
      <MainDashboard className="main__dashboard">
        <div className="dashboard__container--profile">
          <figure className="container__containerImg">
            <img className="containerImg__img" src={Profile} alt="" />
          </figure>
          <h1 className="container__name">{userSearch && userSearch.name}</h1>
        </div>
        <ul className="dashboard__historic">
          <li
            className="historic__type"
            onClick={() =>
              Navigate("/dashboard/doctor/patient/allergy", {
                replace: true,
              })
            }
          >
            Alergias
          </li>
          <li
            className="historic__type"
            onClick={() =>
              Navigate("/dashboard/doctor/patient/disease", {
                replace: true,
              })
            }
          >
            Doenças
          </li>
          <li
            className="historic__type"
            onClick={() =>
              Navigate("/dashboard/doctor/patient/exams", {
                replace: true,
              })
            }
          >
            Exames
          </li>
          <li
            className="historic__type"
            onClick={() =>
              Navigate("/dashboard/doctor/patient/medicines", {
                replace: true,
              })
            }
          >
            Remédios
          </li>
        </ul>
      </MainDashboard>
    </ContentDashboardDoctor>
  );
};

export default ListDoctor;
