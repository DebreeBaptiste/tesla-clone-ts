import React, { createContext, useState, ReactNode } from "react";

interface ModalProps {
  modalOpen: boolean;
  modalHandler: (modalOpen: boolean) => void;
}

export const ModalContext = createContext<ModalProps>({
  modalOpen: false,
  modalHandler: (prevState) => {
    !prevState;
  },
});

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, modalHandler }}>
      {children}
    </ModalContext.Provider>
  );
};
