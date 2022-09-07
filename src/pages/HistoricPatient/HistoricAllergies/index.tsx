import { DivGeneral, DivUl, H1 } from "../StyleHistoric/style";
import { useContext, useEffect } from "react";
import { PatientContext } from "../../../contexts/PatientProvider";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { LoginContext } from "../../../contexts/LoginProvider";

export const HistoryAllergies = () => {
  const { historicUser, HistoricPacient } = useContext(PatientContext);
  const { user } = useContext(LoginContext);

  useEffect(() => {
    HistoricPacient();
    console.log(user);
  }, [user]);

  return (
    <ContentPagePacient>
      <DivGeneral>
        <div>
          <H1>Alergias</H1>
        </div>
        <DivUl className="div-ul">
          <ul>
            {user.alergias &&
              user.alergias.map((elem, index) => (
                <li key={index}>
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
