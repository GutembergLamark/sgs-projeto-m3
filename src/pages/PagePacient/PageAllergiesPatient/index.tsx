import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { useContext, useEffect } from "react";
import { ModalContext } from "../../../contexts/ModalProvider";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { LoginContext } from "../../../contexts/LoginProvider";

export const PageAllergiesPacient = () => {
  const { Allergy } = useContext(ModalContext);
  const {setUser, setLoading} = useContext(LoginContext)

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
          modalSent={Allergy}
          nameButton={"Informar Alergia"}
          title={"Informar Alergia"}
          labelName={"Alergia"}
          placeholderName={"Insira a alergia"}
          description={"Descrição"}
          placeholderDescription={"Descreva a alergia"}
          sendButton={"Salvar Alergia"}
        />
        <button
          onClick={() =>
            navigate("/dashboard/patient/allergies/historic", { replace: true })
          }
        >
          Histórico de Alergia
        </button>
      </DivButton>
    </ContentPagePacient>
  );
};
