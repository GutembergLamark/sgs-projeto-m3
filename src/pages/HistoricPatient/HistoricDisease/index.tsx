import { DivGeneral, DivUl, H1 } from "../StyleHistoric/style";
import { useContext, useEffect } from "react";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { LoginContext } from "../../../contexts/LoginProvider";
import { ModalContext } from "../../../contexts/ModalProvider";
import api from "../../../services/api";

export const HistoryDisease = () => {
  const { user, setUser } = useContext(LoginContext);
  const { illnesses } = useContext(ModalContext);
  const token = localStorage.getItem("@sgs:token");
  const idUsuario = user.id;

  useEffect(() => {
    api
      .patch(
        `/users/${idUsuario}`,
        { doencas: illnesses },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [illnesses]);

  return (
    <ContentPagePacient>
      <DivGeneral>
        <div>
          <H1>Doenças</H1>
        </div>
        <DivUl className="div-ul">
          <ul>
            {user.doencas &&
              user.doencas.map((elem) => (
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
