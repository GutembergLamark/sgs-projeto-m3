import { ReactNode } from "react";
import { DivGeneral, SectionGeneral } from "./style";
import { MenuAsidePacient } from "../MenuAsidePacient";
import Image from "../../assets/Fundo.png";
import MenuAsideDoctor from "../MenuAsideDoctor";

interface IDashboardProps {
  children: ReactNode;
}

const ContentPagePacient = ({ children }: IDashboardProps) => {
  return (
    <DivGeneral>
      <MenuAsideDoctor children={<MenuAsidePacient />} />
      <SectionGeneral Image={Image}>{children}</SectionGeneral>
    </DivGeneral>
  );
};

export default ContentPagePacient;
