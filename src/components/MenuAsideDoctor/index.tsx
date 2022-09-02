import { GiExitDoor } from "react-icons/gi";
import { Aside } from "./styles";

const MenuAsideDoctor = () => {
  return (
    <Aside>
      <header className="menu__side__header">
        <figure className="header__containerLogo">
          <img
            className="header__containerLogo__img"
            src={require("../../assets/LogoSGS.png")}
            alt="logo"
          />
        </figure>
        <h1 className="header__title">S.G.S</h1>
      </header>
      <footer className="menu__side__footer">
        <h2 className="footer__name">José da Silva</h2>
        <button className="footer__button">
          <GiExitDoor />
          Sair
        </button>
      </footer>
    </Aside>
  );
};

export default MenuAsideDoctor;
