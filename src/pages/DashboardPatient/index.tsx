import { useContext, useEffect } from "react";
import ContentPagePacient from "../../components/ContentPagePacient";
import { LoginContext } from "../../contexts/LoginProvider";
import api from "../../services/api";
import { H1, Img } from "./style";

export const DashboardPacient = () => {
  const { setUser } = useContext(LoginContext);

  const token = localStorage.getItem("@sgs:token");

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data.profile));
  }, []);
  
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
