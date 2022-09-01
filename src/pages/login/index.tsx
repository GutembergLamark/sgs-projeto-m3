import Icon from "../../components/assets/imgs/imagePessoa";
import { LoginContaine } from "./style";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
    email: string
    password: number
  }
   
const schema = yup.object({
    email: yup.string().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória")
  }).required();
  
const Login = ()=>{

      const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
      });
      const onSubmit = (data: IFormInputs) => console.log(data);

    return(
        <LoginContaine>
            <header>
                <h1>
                     SGS<br/>SISTEMA GERAL DE SAÚDE
                </h1>
            </header>
            <main>
                <Icon/>
                <div className="cantaineForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                          Email
                            <input type="email" {...register("email")} />
                            <p>{errors.email?.message}</p>
                        </label>

                        <label>
                          Senha
                               <input type="password" {...register("password")} />
                            <p>{errors.password?.message}</p>
                        </label>
                        
                        <button type="submit" >Entrar</button>
                    </form>
                    <div>
                        <span>Ainda não tem conta?</span>
                        <Link to="#">
                            <b>Cadastre-se</b>
                        </Link>
                    </div>
                </div> 
            </main>
            <Footer/>
        </LoginContaine>
    )
};
export default Login;


