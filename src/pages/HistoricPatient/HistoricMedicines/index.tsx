import { DivGeneral, DivUl, H1 } from "../StyleHistoric/style";
import { useContext, useEffect } from "react";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { LoginContext } from "../../../contexts/LoginProvider";
import api from "../../../services/api";

export const HistoryMedicines = () => {
  const { user, setUser } = useContext(LoginContext);
  const token = localStorage.getItem("@sgs:token");

  useEffect(() => {
    api
      .get(
        `/patient/medicine`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setUser({...user, remedios: res.data.medicines});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ContentPagePacient>
      <DivGeneral>
        <div>
          <H1>Remédios</H1>
        </div>
        <DivUl className="div-ul">
          <ul>
            {user.remedios &&
              user.remedios.map((elem, index) => (
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
