import { ReactNode } from "react";
import LoginProvider from "./LoginProvider";
import ModalProvider from "./ModalProvider";
import RegisterProvider from "./RegisterProvider";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => {
  return (
    <LoginProvider>
      <ModalProvider>
        <RegisterProvider>{children}</RegisterProvider>
      </ModalProvider>
    </LoginProvider>
  );
};

export default Provider;
