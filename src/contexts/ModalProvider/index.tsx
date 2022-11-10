import { createContext, ReactNode, useState } from "react";
import {
  useForm,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrorsImpl,
} from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";

interface IModalProvider {
  children: ReactNode;
}

export interface IRegister {
  description?: string;
  name?: string;
  date?: string;
  results_exams?: string;
  symptoms?: string;
  typeExams?: string
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

  const [allergys, setAllergys] = useState<IRegister[]>([]);
  const [illnesses, setIllnesses] = useState<IRegister[]>([]);
  const [exams, setExams] = useState<IRegister[]>([]);
  const [medicines, setMedicines] = useState<IRegister[]>([]);

  const token = localStorage.getItem("@sgs:token");

  const Allergy = (data: IRegister) => {
    console.log(data)
    api
      .post(
        `/patient/allergy`, data,        
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setAllergys([...allergys, res.data.allergy]);
        toast.success("Alergia cadastrada com sucesso!");
      })
      .catch((err) => {
        toast.error("Algo inesperado aconteceu");
        console.log(err)
      });
  };

  const Illnesses = (data: IRegister) => {
    api
      .post(
        `/patient/disease`, data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setIllnesses([...illnesses, res.data.disease]);
        toast.success("Doença cadastrada com sucesso!");
      })
      .catch((err) => {
        toast.error("Algo inesperado aconteceu");
      });
  };

  const Exams = (data: IRegister) => {
    console.log(data)
    api
      .post(
        `/patient/exam`, data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setExams([...exams, res.data.exam]);
        toast.success("Exame cadastrado com sucesso!");
      })
      .catch((err) => {
        toast.error("Algo inesperado aconteceu");
        console.log(err)
      });
  };

  const Medicines = (data: IRegister) => {
    api
      .post(
        `/patient/medicine`, data,
       {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setMedicines([...medicines, res.data.medicine]);
        toast.success("Remédio cadastrado com sucesso!");
      })
      .catch((err) => {
        toast.error("Algo inesperado aconteceu");
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
