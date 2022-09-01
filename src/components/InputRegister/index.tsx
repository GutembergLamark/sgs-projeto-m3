import { Div } from "./styles";

const Input = ({ register, id, label, error, placeholder }: any) => {
  return (
    <>
      <Div>
        <label>{label}</label>
        {error?.message && <p>{error.message}</p>}
      </Div>
      <input placeholder={placeholder} {...register(id)} />
    </>
  );
};

export default Input;
