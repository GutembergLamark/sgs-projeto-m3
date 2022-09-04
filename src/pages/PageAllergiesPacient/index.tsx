import { DivGeneral, SectionGeneral } from "./style";
import ImageMedical from "../../assets/ImageDoctorSit.svg";
import Image from "../../assets/Fundo.png";
import { MenuAsidePacient } from "../../components/MenuAsidePacient";
import Modals from "../../components/Modals";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalProvider";

export const PageAllergiesPacient = () => {
  const { Allergy } = useContext(ModalContext);

  return (
    <DivGeneral>
      <MenuAsidePacient />
      <SectionGeneral Image={Image}>
        <div className="div-image">
          <img src={ImageMedical} alt="" />
        </div>
        <div className="div-button">
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
        </div>
      </SectionGeneral>
    </DivGeneral>
  );
};
