import MedicalLogin from "../../assets/medical.svg";
import { LoginContaine, Footer, Header } from "./style";
import FormLogin from "../../components/FormLogin";

const Login = () => {
  return (
    <LoginContaine>
      <Header>
        <div>
          <h1>SISTEMA GERAL DE SAÚDE</h1>
        </div>
      </Header>
      <main>
        <img src={MedicalLogin} alt="Logo" />
        <FormLogin />
      </main>
      <Footer />
    </LoginContaine>
  );
};
export default Login;
