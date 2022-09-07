import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { ModalContext } from "../../contexts/ModalProvider";

interface IRegister {
  description?: string;
  name?: string;
}

interface IModal {
  title: string;
  labelName: string;
  placeholderName: string;
  description: string;
  placeholderDescription: string;
  nameButton: string;
  sendButton: string;
  modalSent: (data: IRegister) => void;
}

const Modals = ({
  title,
  labelName,
  placeholderName,
  description,
  placeholderDescription,
  nameButton,
  sendButton,
  modalSent,
}: IModal) => {
  const { errors, handleSubmit, register, isSubmitting } =
    useContext(ModalContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        cursor={"pointer"}
        onClick={onOpen}
        fontWeight={"normal"}
        _active={{ bgColor: "#077E8E" }}
        _hover={{ bgColor: "#077E8E" }}
      >
        {nameButton}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay backdropFilter="auto" backdropBlur="2px" />

        <ModalContent marginRight={"35px"} top={"25%"} left={"5%"}>
          <ModalHeader color={"#077E8E"}>{title}</ModalHeader>
          <ModalCloseButton cursor={"pointer"} _hover={{ color: "red" }} />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(modalSent)}>
              <FormControl>
                <FormLabel>{labelName}</FormLabel>
                <Input
                  /* ref={initialRef} */
                  placeholder={placeholderName}
                  {...register("name")}
                />
                <FormLabel marginTop={"15px"}>{description}</FormLabel>
                <Input
                  placeholder={placeholderDescription}
                  {...register("description")}
                />
                <ModalFooter
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button
                    cursor={"pointer"}
                    bgColor="#077E8E"
                    color={"white"}
                    width={"200px"}
                    marginTop={"15px"}
                    _active={{ bgColor: "#077E8E" }}
                    _hover={{
                      bgColor: "#077e8ed3",
                      transition: "0.3s",
                    }}
                    type="submit"
                    /* onClick={onClose} */
                  >
                    {sendButton}
                  </Button>
                </ModalFooter>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modals;
