import { MenuAsidePacient } from "../../components/MenuAsidePacient";
import { DivGeneral, SectionCentral } from "./style";

export const DashboardPacient = () => {
  return (
    <DivGeneral>
      <MenuAsidePacient />
      <SectionCentral>
        <img src={require("../../assets/HomePacienteImg.gif")} alt="" />
        <h1>S.G.S</h1>
        <h1>Sistema Geral de Saúde</h1>
      </SectionCentral>
    </DivGeneral>
  );
};
