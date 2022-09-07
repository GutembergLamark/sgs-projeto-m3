import ContentPagePacient from "../../components/ContentPagePacient";
import MenuAsideDoctor from "../../components/MenuAsideDoctor";
import { MenuAsidePacient } from "../../components/MenuAsidePacient";
import { H1, Img } from "./style";
/* import { DivGeneral, SectionCentral } from "./style"; */

export const DashboardPacient = () => {
  return (
    <ContentPagePacient>
      <Img src={require("../../assets/imageDashboardPatient.gif")} alt="" />
      <div>
        <H1>S.G.S</H1>
        <H1>Sistema Geral de Saúde</H1>
      </div>
    </ContentPagePacient>
  );
};
