import { Div, Error } from "./styles";
import { BiErrorCircle } from "react-icons/bi";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({ register, id, label, error, placeholder, type }: any) => {
  const [visibleConfirm, setVisibleConfirm] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Div>
        <label>{label}</label>
        {error?.message && (
          <Error>
            <BiErrorCircle />
            <span>{error?.message}</span>
          </Error>
        )}
      </Div>
      <div className="InputContaine">
        <input
          placeholder={placeholder}
          type={
            type === "password"
              ? visible || visibleConfirm
                ? "text"
                : "password"
              : type
          }
          {...register(id)}
        />
        {label === "Senha" &&
          (visible ? (
            <AiFillEye onClick={() => setVisible(false)} />
          ) : (
            <AiFillEyeInvisible onClick={() => setVisible(true)} />
          ))}
        {label === "Confirmar Senha" &&
          (visibleConfirm ? (
            <AiFillEye onClick={() => setVisibleConfirm(false)} />
          ) : (
            <AiFillEyeInvisible onClick={() => setVisibleConfirm(true)} />
          ))}
      </div>
    </>
  );
};

export default Input;
