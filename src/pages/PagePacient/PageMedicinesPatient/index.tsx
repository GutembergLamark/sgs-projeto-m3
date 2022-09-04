import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";

export const PageMedicinesPacient = () => {
  return (
    <ContentPagePacient>
      <DivImage className="div-image">
        <img src={ImageMedical} alt="" />
      </DivImage>
      <DivButton>
        <Modals
          nameButton={"Informar Remédio"}
          title={"Informar Remédio"}
          labelName={"Remédio"}
          placeholderName={"Insira o remédio"}
          description={"Descrição"}
          placeholderDescription={"Descreva a situação"}
          sendButton={"Salvar Remédio"}
        />
        <button>Hisórico de Remédios</button>
      </DivButton>
    </ContentPagePacient>
  );
};
