import { DivGeneral, SectionCentral, Aside } from "./style";

export const DashboardPaciente = () => {
  return (
    <DivGeneral>
      <Aside>
        <div className="div-logo">
          <img
            src={require("../../assets/LogoSGS.png")}
            alt="logo"
            className="logo"
          />
          <h2>S.G.S</h2>
        </div>
        <div className="div-central">
          <p>Alergias</p>
          <p>Doenças</p>
          <p>Exames</p>
          <p>Remédios</p>
        </div>
        <div className="div-exit">
          <p>*Nome*</p>
          <h2>Sair</h2>
        </div>
      </Aside>
      <SectionCentral>
        <img src={require("../../assets/HomePacienteImg.gif")} alt="" />
        <h1>S.G.S</h1>
        <h1>Sistema Geral de Saúde</h1>
      </SectionCentral>
    </DivGeneral>
  );
};
