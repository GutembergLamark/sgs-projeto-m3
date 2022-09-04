import { MenuAsidePacient } from "../../../components/MenuAsidePacient";
import { DivGeneral, SectionGeneral } from "../StyleHistoric/style";
import Image from "../../../assets/Fundo.png";

export const HistoryDisease = () => {
  return (
    <DivGeneral>
      <MenuAsidePacient />
      <SectionGeneral Image={Image}>
        <div>
          <h1>Doenças</h1>
        </div>
        <div className="div-ul">
          <ul>
            {/* {pacient.map((elem) => (
              <li>
                <p className="p-history">{elem.allergies.history}</p>
                <details>
                  <summary>Descrição:</summary>
                  <p className="p-description">{elem.allergies.description}</p>
                </details>
              </li>
            ))} */}
          </ul>
        </div>
      </SectionGeneral>
    </DivGeneral>
  );
};
