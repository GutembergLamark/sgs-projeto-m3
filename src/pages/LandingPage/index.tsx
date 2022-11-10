import image2 from "../../assets/undraw_doctors_re_jjho.svg";
import imageLi1 from "../../assets/icons8-pharmacist-48.png";
import imageDoctor from "../../assets/icons8-doutor-em-medicina-100.png";
import imageHosp from "../../assets/icons8-hospital-3-50.png";
import Logo from "../../assets/Logo.png";
import { Footer, Header, Main } from "./style";
import { useNavigate } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import { useState } from "react";

const LandingPage = () => {
  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  return (
    <>
      <Header click={click}>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <div className="dropdown">
          <AiOutlineMenu onClick={() => setClick(!click)} />
          <div className="dropdown__content">
            <button onClick={() => navigate("/login", { replace: true })}>
              Entrar
            </button>
            <button onClick={() => navigate("/register", { replace: true })}>
              Cadastrar
            </button>
          </div>
        </div>
      </Header>
      <Main>
        <section className="main__info">
          <figure>
            <img className="info__image" src={image2} alt="" />
          </figure>

          <div className="info__description">
            <h1>O melhor sistema de consulta de pacientes para os hospitais</h1>

            <p>
              Faça seu cadastro para um conhecimento rápido do médico sobre seu
              histórico hospitalar.
            </p>

            <details>
              <summary>Feito de paciente para médico</summary>
            </details>
          </div>
        </section>
        <section className="main__ferramentas">
          <h2>Serviços</h2>
          <ul>
            <li>
              <img src={imageLi1} alt="" />
              <p className="p-name">
                É possível realizar o cadastro do histórico de Alergias,
                Doenças, Remédios e Exames, para que um profissional médico
                possa consultar
              </p>
            </li>
            <li>
              <img src={imageDoctor} alt="" />
              <p className="p-name">
                É possível fazer consultas de pacientes através de seu histórico
              </p>
            </li>
            <li>
              <img src={imageHosp} alt="" />
              <p className="p-name">
                Melhor funcionamento para evitar transtornos em hospitais e
                agilizar os pronto atendimentos
              </p>
            </li>
          </ul>
        </section>

        <section className="main__avaliacoes">
          <h2 className="h2-avalicoes">Avaliações</h2>
          <ul>
            <li>
              <div>
                <p className="p-name">João Melo</p>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <p>Ótimo sistema, muito simples e fácil de usar.</p>
            </li>
            <li>
              <div>
                <p className="p-name">João Dantas</p>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <p>
                Qualidade ótima, fácil utilização e bem acessível para todos os
                tipos de pessoas.
              </p>
            </li>
            <li>
              <div>
                <p className="p-name">Felipe Geazi</p>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <p>Sistema surpreendente.</p>
            </li>
          </ul>
        </section>
      </Main>
      <Footer>
        <p>© Direitos reservados à SGS Sistema Geral de Saúde</p>
      </Footer>
    </>
  );
};

export default LandingPage;
