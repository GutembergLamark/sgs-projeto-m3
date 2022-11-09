import { DivGeneral, DivUl, H1 } from "../StyleHistoric/style";
import { useContext, useEffect } from "react";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { LoginContext } from "../../../contexts/LoginProvider";
import api from "../../../services/api";

export const HistoryDisease = () => {
  const { user, setUser } = useContext(LoginContext);
  const token = localStorage.getItem("@sgs:token");

  useEffect(() => {
    api
      .get(
        `/patient/disease`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setUser({...user, doencas: res.data.diseases});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log(user)
  return (
    <ContentPagePacient>
      <DivGeneral>
        <div>
          <H1>Doenças</H1>
        </div>
        <DivUl className="div-ul">
          <ul>
            {user.doencas &&
              user.doencas.map((elem, index) => (
                <li key={index}>
                  <p className="p-history">{elem.name}</p>
                  <details>
                    <summary>Descrição:</summary>
                    <p className="p-description">{elem.symptoms}</p>
                  </details>
                </li>
              ))}
          </ul>
        </DivUl>
      </DivGeneral>
    </ContentPagePacient>
  );
};
