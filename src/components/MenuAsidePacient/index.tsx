import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { boolean } from "yup";
import { Aside } from "./style";

interface IMenu {
  allergies: boolean;
}

export const MenuAsidePacient = () => {
  const Navigate = useNavigate();

  // const { allergies, setAllergies } = useState<boolean>(false);
  // const { disease, setDisease } = useState(false);
  // const { exams, setExams } = useState(false);
  // const { medicines, setMedicines } = useState<boolean>(false);

  return (
    <Aside>
      <ul>
        <li
          className="p-alergias"
          onClick={
            () => Navigate("/dashboard/patient/allergies")
            // setAllergies(true)
            // setDisease(false)
            // setExams(false)
            // setMedicines(false)
          }
        >
          Alergias
        </li>
        <li
          onClick={
            () => Navigate("/dashboard/patient/disease")
            //  setAllergies(false)
            //  setDisease(true)
            //  setExams(false)
            //  setMedicines(false)
          }
        >
          Doenças
        </li>
        <li
          onClick={
            () => Navigate("/dashboard/patient/exams")
            //  setAllergies(false)
            //  setDisease(false)
            //  setExams(true)
            //  setMedicines(false)
          }
        >
          Exames
        </li>
        <li
          onClick={
            () => Navigate("/dashboard/patient/medicines")
            //  setAllergies(false)
            //  setDisease(false)
            //  setExams(false)
            //  setMedicines(true)
          }
        >
          Remédios
        </li>
      </ul>
    </Aside>
  );
};
