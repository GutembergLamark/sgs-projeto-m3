import { useNavigate, useParams } from "react-router-dom";
import { Aside } from "./style";

export const MenuAsidePacient = () => {
  const Navigate = useNavigate();

  const { allergies } = useParams();
  
  return (
    <Aside route={allergies}>
      <ul>
        <li
          className="p__alergias"
          onClick={() => {
            Navigate("/dashboard/patient/allergies");
          }}
        >
          Alergias
        </li>
        <li
          className="p__doencas"
          onClick={() => {
            Navigate("/dashboard/patient/disease");
          }}
        >
          Doenças
        </li>
        <li
          className="p__exames"
          onClick={() => {
            Navigate("/dashboard/patient/exams");
          }}
        >
          Exames
        </li>
        <li
          className="p__remedios"
          onClick={() => {
            Navigate("/dashboard/patient/medicines");
          }}
        >
          Remédios
        </li>
      </ul>
    </Aside>
  );
};
