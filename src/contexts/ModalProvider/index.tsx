import { createContext, ReactNode } from "react";
import { useForm } from "react-hook-form";

interface IModalProvider {
  children: ReactNode;
}

interface IModalContext {}

export const ModalContext = createContext({} as any);

const ModalProvider = ({ children }: IModalProvider) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const Allergy = (data: any) => {
    console.log(data, "alergia");
  };

  const Illnesses = (data: any) => {
    console.log(data, "doenças");
  };

  const Exams = (data: any) => {
    console.log(data, "exames");
  };

  const Medicines = (data: any) => {
    console.log(data, "remeidios");
  };

  return (
    <ModalContext.Provider
      value={{
        handleSubmit,
        register,
        errors,
        isSubmitting,
        Allergy,
        Illnesses,
        Exams,
        Medicines,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
