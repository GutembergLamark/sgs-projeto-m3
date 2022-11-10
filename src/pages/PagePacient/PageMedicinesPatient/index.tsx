import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { ModalContext } from "../../../contexts/ModalProvider";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../contexts/LoginProvider";
import api from "../../../services/api";

export const PageMedicinesPacient = () => {
  const { Medicines } = useContext(ModalContext);
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
          modalSent={Medicines}
          nameButton={"Informar Remédio"}
          title={"Informar Remédio"}
          labelName={"Remédio"}
          placeholderName={"Insira o remédio"}
          description={"Descrição"}
          placeholderDescription={"Descreva a situação"}
          sendButton={"Salvar Remédio"}
        />
        <button
          onClick={() =>
            navigate("/dashboard/patient/medicines/historic", { replace: true })
          }
        >
          Histórico de Remédios
        </button>
      </DivButton>
    </ContentPagePacient>
  );
};
