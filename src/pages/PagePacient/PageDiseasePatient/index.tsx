import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { ModalContext } from "../../../contexts/ModalProvider";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../contexts/LoginProvider";
import api from "../../../services/api";

export const PageDiseasePacient = () => {
  const { Illnesses } = useContext(ModalContext);

  const { setUser, setLoading } = useContext(LoginContext);

  const navigate = useNavigate();

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
  }, [setLoading, setUser]);

  return (
    <ContentPagePacient>
      <DivImage className="div-image">
        <img src={ImageMedical} alt="" />
      </DivImage>
      <DivButton>
        <Modals
          modalSent={Illnesses}
          nameButton={"Informar Doença"}
          title={"Informar Doença"}
          labelName={"Doença"}
          placeholderName={"Insira a doença"}
          symptoms={"Sintomas"}
          placeholderDescription={"Descreva a doença"}
          sendButton={"Salvar Doença"}
        />
        <button
          onClick={() =>
            navigate("/dashboard/patient/disease/historic", { replace: true })
          }
        >
          Histórico de Doenças
        </button>
      </DivButton>
    </ContentPagePacient>
  );
};
