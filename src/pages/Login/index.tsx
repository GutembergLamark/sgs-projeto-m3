import MedicalLogin from "../../assets/imgs/medical";
import { LoginContaine } from "./style";
import Footer from "../../components/footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/InputRegister/index";
import { useContext } from "react";
import { RegisterContext } from "../../contexts/RegisterProvider";

interface IFormInputs {
  email: string;
  password: number;
}

const schema = yup
  .object({
    email: yup.string().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  })
  .required();

const Login = () => {
  const { signIn } = useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  //const onSubmit = (data: IFormInputs) => signIn(data);

  return (
    <LoginContaine>
      <header>
        <h1>
          SGS
          <br />
          SISTEMA GERAL DE SAÚDE
        </h1>
      </header>
      <main>
        <MedicalLogin />

        <div className="cantaineForm">
          <form onSubmit={handleSubmit(signIn)}>
            <Input
              label={"E-mail"}
              register={register}
              id={"email"}
              error={errors?.email}
              placeholder={"Digite seu E-mail"}
              type={"text"}
            />

            <Input
              label={"Senha"}
              register={register}
              id={"password"}
              error={errors?.password}
              placeholder={"Digite sua senha"}
              type={"password"}
            />
            <button type="submit">Entrar</button>
          </form>
          <nav>
            <p>Ainda não tem conta?</p>
            <b>Cadastre-se</b>
          </nav>
        </div>
      </main>
      <Footer />
    </LoginContaine>
  );
};
export default Login;
