/* eslint-disable react/jsx-no-target-blank */
import { DivGeneral, DivUl, H1 } from "../StyleHistoric/style";
import { useContext, useEffect } from "react";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { LoginContext } from "../../../contexts/LoginProvider";
import api from "../../../services/api";

export const HistoryExams = () => {
  const { user, setUser } = useContext(LoginContext);
  const token = localStorage.getItem("@sgs:token");
 
  useEffect(() => {
    api
      .get(
        `/patient/exam`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setUser({...user, exames: res.data.exams});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ContentPagePacient>
      <DivGeneral>
        <div>
          <H1>Exames</H1>
        </div>
        <DivUl className="div-ul">
          <ul>
            {user.exames &&
              user.exames.map((elem, index) => (
                <li key={index}>
                  <p className="p-history">{elem.name}</p>
                  <details>
                    <summary>Link:</summary>
                    <a className="p-description" href={`${elem.results_exams}`} target="_blank">{elem.results_exams}</a>
                  </details>
                </li>
              ))}
          </ul>
        </DivUl>
      </DivGeneral>
    </ContentPagePacient>
  );
};
