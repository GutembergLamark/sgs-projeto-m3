import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, DivInput, DivGeneral } from "./styles";
import { useState } from "react";
import { formSchema } from "../../validator";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { type } from "os";
import Input from "../InputRegister";

interface IUser {
  name: string;
  CPF: string;
  email: string;
  password: string;
  confirmPassword: string;
  type: string;
}

const FormRegister = () => {
  const [visibleConfirm, setVisibleConfirm] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  function registerUser(data: IUser) {
    console.log(data);
  }

  console.log(errors);
  return (
    <>
      <Form onSubmit={handleSubmit(registerUser)}>
        <h1>Cadastro de Usuário</h1>
        <DivGeneral>
          <Input
            label={"Nome"}
            register={register}
            id={"name"}
            error={errors?.name}
            placeholder={"Digite seu Nome"}
          />
          {/* <label>Nome</label> */}
          {/* <input placeholder="Digite seu Nome" {...register("name")} /> */}
          <Input
            label={"CPF"}
            register={register}
            id={"CPF"}
            error={errors?.CPF}
            placeholder={"Digite seu CPF"}
          />
          {/* <label>CPF</label>
        <input placeholder="Digite seu CPF" {...register("CPF")} /> */}
          <label>E-mail</label>
          <input placeholder="Digite seu E-mail" {...register("email")} />
          <label>Senha</label>
          <input
            placeholder="Digite sua senha"
            type={visible ? "text" : "password"}
            {...register("password")}
          />
          {visible ? (
            <AiFillEye onClick={() => setVisible(false)} />
          ) : (
            <AiFillEyeInvisible onClick={() => setVisible(true)} />
          )}
          <label>Confirmar Senha</label>
          <input
            type={visibleConfirm ? "text" : "password"}
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
          {visibleConfirm ? (
            <AiFillEye onClick={() => setVisibleConfirm(false)} />
          ) : (
            <AiFillEyeInvisible onClick={() => setVisibleConfirm(true)} />
          )}
          <label>Tipo</label>
          <select {...register("type")}>
            <option value="paciente">Paciente</option>
            <option value="enfermeiro">Enfermeiro</option>
          </select>
        </DivGeneral>
        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
};

export default FormRegister;
