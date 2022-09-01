import { ReactNode } from "react";
import RegisterProvider from "./RegisterProvider";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => {
  return <RegisterProvider>{children}</RegisterProvider>;
};

export default Provider;
