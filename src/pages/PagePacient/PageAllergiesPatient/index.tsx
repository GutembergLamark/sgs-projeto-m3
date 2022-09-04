import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";

export const PageAllergiesPacient = () => {
  return (
    <ContentPagePacient>
      <DivImage className="div-image">
        <img src={ImageMedical} alt="" />
      </DivImage>
      <DivButton>
        <Modals
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
