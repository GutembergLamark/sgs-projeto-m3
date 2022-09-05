import { ReactNode } from "react";
import DashboardDoctorProvider from "./DashboardDoctorProvider";
import LoginProvider from "./LoginProvider";
import ModalProvider from "./ModalProvider";
import RegisterProvider from "./RegisterProvider";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => {
  return (
    <ModalProvider>
      <RegisterProvider>
        <LoginProvider>
          <DashboardDoctorProvider>{children}</DashboardDoctorProvider>
        </LoginProvider>
      </RegisterProvider>
    </ModalProvider>
  );
};

export default Provider;
