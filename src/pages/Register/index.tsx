import FormRegister from "../../components/FormRegister";
import { Header, Div, Footer } from "./styles";

const Register = () => {
  return (
    <>
      <Header>
        <div>
          <h1>SISTEMA GERAL DE SAÚDE</h1>
        </div>
      </Header>
      <Div>
        <img src={require("../../assets/image.png")} alt="medico" />
        <FormRegister />
      </Div>
      <Footer></Footer>
    </>
  );
};

export default Register;
