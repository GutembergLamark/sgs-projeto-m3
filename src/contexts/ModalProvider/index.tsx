import { createContext, ReactNode, useContext, useState } from "react";
import {
  useForm,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrorsImpl,
} from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";
import { LoginContext } from "../LoginProvider";

interface IModalProvider {
  children: ReactNode;
}

interface IRegister {
  description?: string;
  name?: string;
}

interface IModalContext {
  handleSubmit: UseFormHandleSubmit<IRegister>;
  Allergy: (data: IRegister) => void;
  Illnesses: (data: IRegister) => void;
  Exams: (data: IRegister) => void;
  Medicines: (data: IRegister) => void;
  register: UseFormRegister<IRegister>;
  errors: FieldErrorsImpl<IRegister>;
  isSubmitting: boolean;
  allergys?: IRegister[];
  illnesses?: IRegister[];
  exams?: IRegister[];
  medicines?: IRegister[];
}

export const ModalContext = createContext({} as IModalContext);
const ModalProvider = ({ children }: IModalProvider) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IRegister>();

  const { user, setUser } = useContext(LoginContext);
  const token = localStorage.getItem("@sgs:token");
  const idUsuario = user.id;
  console.log(idUsuario);

  const [allergys, setAllergy] = useState<IRegister[]>([]);
  const [illnesses, setIIllnesses] = useState<IRegister[]>([]);
  const [exams, setExams] = useState<IRegister[]>([]);
  const [medicines, setMedicines] = useState<IRegister[]>([]);

  const Allergy = (data: IRegister) => {
    setAllergy([...allergys, data]);

    api
      .patch(
        `/users/${idUsuario}`,
        { alergias: allergys },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setUser(res.data);
        toast.success("Alergia cadastrada  com sucesso");
        console.log(res.data);
      })
      .catch((err) => {
        toast.error(
          "Cadastro não realizado. Por favor, tente novamente mais tarde !"
        );
        console.log(err);
      });
  };

  const Illnesses = (data: IRegister) => {
    setIIllnesses([...illnesses, data]);

    api
      .patch(
        `/users/${idUsuario}`,
        { doencas: illnesses },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setUser(res.data);
        toast.success("Doença cadastrada  com sucesso");
        console.log(res.data);
      })
      .catch((err) => {
        toast.error("Cadastro não realizado. Por favor, tente novamente!");
        console.log(err);
      });
  };

  const Exams = (data: IRegister) => {
    setExams([...exams, data]);

    api
      .patch(
        `/users/${idUsuario}`,
        { exames: exams },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setUser(res.data);
        toast.success("Exame cadastrado  com sucesso");
        console.log(res.data);
      })
      .catch((err) => {
        toast.error(
          "Cadastro não realizado. Por favor, tente novamente mais tarde !"
        );
        console.log(err);
      });
  };

  const Medicines = (data: IRegister) => {
    setMedicines([...medicines, data]);

    api
      .patch(
        `/users/${idUsuario}`,
        { remedios: medicines },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setUser(res.data);
        toast.success("Remedio cadastrado  com sucesso");
        console.log(res.data);
      })
      .catch((err) => {
        toast.error(
          "Cadastro não realizado. Por favor, tente novamente mais tarde !"
        );
        console.log(err);
      });
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
        allergys,
        illnesses,
        exams,
        medicines,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
