import { MenuAsidePacient } from "../../../components/MenuAsidePacient";
import { DivGeneral, SectionGeneral } from "../StyleHistoric/style";
import Image from "../../../assets/Fundo.png";
import { useContext, useEffect } from "react";
import { PatientContext } from "../../../contexts/PatientProvider";

export const HistoryMedicines = () => {
  const { historicUser, HistoricPacient } = useContext(PatientContext);

  useEffect(() => {
    HistoricPacient();
  }, []);

  return (
    <DivGeneral>
      <MenuAsidePacient />
      <SectionGeneral Image={Image}>
        <div>
          <h1>Remédios</h1>
        </div>
        <div className="div-ul">
          <ul>
            {historicUser.remedios &&
              historicUser.remedios.map((elem) => (
                <li>
                  <p className="p-history">{elem.name}</p>
                  <details>
                    <summary>Descrição:</summary>
                    <p className="p-description">{elem.description}</p>
                  </details>
                </li>
              ))}
          </ul>
        </div>
      </SectionGeneral>
    </DivGeneral>
  );
};
