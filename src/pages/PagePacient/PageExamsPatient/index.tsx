import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";

export const PageExamsPacient = () => {
  return (
    <ContentPagePacient>
      <DivImage className="div-image">
        <img src={ImageMedical} alt="" />
      </DivImage>
      <DivButton>
        <Modals
          nameButton={"Informar Exame"}
          title={"Informar Exame"}
          labelName={"Exame"}
          placeholderName={"Insira a exame"}
          description={"Data"}
          placeholderDescription={"Informe a data do exame"}
          sendButton={"Salvar Exame"}
        />
        <button>Hisórico de Exames</button>
      </DivButton>
    </ContentPagePacient>
  );
};
