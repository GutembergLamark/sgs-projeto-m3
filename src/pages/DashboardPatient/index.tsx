import MenuAsideDoctor from "../../components/MenuAsideDoctor";
import { MenuAsidePacient } from "../../components/MenuAsidePacient";
import { DivGeneral, SectionCentral } from "./style";

export const DashboardPacient = () => {
  return (
    <DivGeneral>
      <MenuAsideDoctor children={<MenuAsidePacient />} />
      <SectionCentral>
        <img src={require("../../assets/HomePacienteImg.gif")} alt="" />
        <h1>S.G.S</h1>
        <h1>Sistema Geral de Saúde</h1>
      </SectionCentral>
    </DivGeneral>
  );
};
