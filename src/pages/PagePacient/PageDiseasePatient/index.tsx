import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";

export const PageDiseasePacient = () => {
  return (
    <ContentPagePacient>
      <DivImage className="div-image">
        <img src={ImageMedical} alt="" />
      </DivImage>
      <DivButton>
        <Modals
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
