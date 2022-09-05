import { ReactNode } from "react";
import LoginProvider from "./LoginProvider";
import ModalProvider from "./ModalProvider";
import RegisterProvider from "./RegisterProvider";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => {
  return (
    <ModalProvider>
      <LoginProvider>
        <RegisterProvider>{children}</RegisterProvider>
      </LoginProvider>
    </ModalProvider>
  );
};

export default Provider;
