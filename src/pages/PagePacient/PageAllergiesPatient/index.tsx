import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalProvider";


export const PageAllergiesPacient = () => {
  const { Allergy } = useContext(ModalContext);

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
        <button>Hisórico de Alergia</button>
      </DivButton>
    </ContentPagePacient>
  );
};
