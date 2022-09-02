import FormRegister from "../../components/FormRegister";
import { Header, Div, Footer, DoctorImg, PacientImg } from "./styles";
import Doctor from "../../assets/Doctor.svg";
import Pacient from "../../assets/Pacient.svg";
import Modals from "../../components/Modals";

const Register = () => {
  return (
    <>
      <Header>
        <div>
          <h1>SISTEMA GERAL DE SAÚDE</h1>
        </div>
      </Header>
      <Div>
        <PacientImg src={Pacient} alt="Pacient" />
        <DoctorImg src={Doctor} alt="Doctor" />
        <FormRegister />
      </Div>
      <Footer></Footer>
    </>
  );
};

export default Register;
