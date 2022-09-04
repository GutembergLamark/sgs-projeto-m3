import { ReactNode } from "react";
import ModalProvider from "./ModalProvider";
import RegisterProvider from "./RegisterProvider";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => {
  return (
    <ModalProvider>
      <RegisterProvider>{children}</RegisterProvider>
    </ModalProvider>
  );
};

export default Provider;
