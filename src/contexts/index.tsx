import { ReactNode } from "react";
import DashboardDoctorProvider from "./DashboardDoctorProvider";
import ModalProvider from "./ModalProvider";
import RegisterProvider from "./RegisterProvider";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => {
  return (
    <ModalProvider>
      <RegisterProvider>
        <DashboardDoctorProvider>{children}</DashboardDoctorProvider>
      </RegisterProvider>
    </ModalProvider>
  );
};

export default Provider;
