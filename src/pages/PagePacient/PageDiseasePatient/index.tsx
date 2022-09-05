import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { ModalContext } from "../../../contexts/ModalProvider";
import { useContext } from "react";

export const PageDiseasePacient = () => {

  const {Illnesses} = useContext(ModalContext)
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
          description={"Descrição"}
          placeholderDescription={"Descreva a doença"}
          sendButton={"Salvar Doença"}
        />
        <button>Hisórico de Doenças</button>
      </DivButton>
    </ContentPagePacient>
  );
};
