import { DivGeneral, DivUl, H1 } from "../StyleHistoric/style";
import { useContext, useEffect } from "react";
import { PatientContext } from "../../../contexts/PatientProvider";
import ContentPagePacient from "../../../components/ContentPagePacient";

export const HistoryDisease = () => {
  const { historicUser, HistoricPacient } = useContext(PatientContext);

  useEffect(() => {
    HistoricPacient();
  }, []);
  return (
    <ContentPagePacient>
      <DivGeneral>
        <div>
          <H1>Doenças</H1>
        </div>
        <DivUl className="div-ul">
          <ul>
            {historicUser.doencas &&
              historicUser.doencas.map((elem) => (
                <li key={elem.name}>
                  <p className="p-history">{elem.name}</p>
                  <details>
                    <summary>Descrição:</summary>
                    <p className="p-description">{elem.description}</p>
                  </details>
                </li>
              ))}
          </ul>
        </DivUl>
      </DivGeneral>
    </ContentPagePacient>
  );
};
