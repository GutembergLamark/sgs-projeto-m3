import { DivGeneral, SectionGeneral } from "./style";
import ImageMedical from "../../assets/ImageDoctorSit.svg";
import Image from "../../assets/Fundo.png";
import { MenuAsidePacient } from "../../components/MenuAsidePacient";

export const PageAllergiesPacient = () => {
  return (
    <DivGeneral>
      <MenuAsidePacient />
      <SectionGeneral Image={Image}>
        <div className="div-image">
          <img src={ImageMedical} alt="" />
        </div>
        <div className="div-button">
          <button>Informar Alergia</button>
          <button>Hisórico de Alergia</button>
        </div>
      </SectionGeneral>
    </DivGeneral>
  );
};
