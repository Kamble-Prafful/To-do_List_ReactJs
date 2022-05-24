import { createContext, useState } from "react";

const ModalContext = createContext();

export default ModalContext;

export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [blurClass, setBlurClass] = useState(false);
  const [displayNone, setDisplayNone] = useState(true);

  const HandleAddTask = () => {
    if (!displayNone) {
      setDisplayNone(true);
    }
  };

  // const HandleSwitch = () => {
  //   if (openModal) {
  //     setBlurClass(true);
  //     setDisplayNone(false);
  //   }
  //   else {
  //     setBlurClass(false);
  //     setDisplayNone(true);
  //   }
  // };

  console.log("openModal", openModal);
  console.log("displayNone", displayNone);
  console.log("blurClass", blurClass);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        blurClass,
        setBlurClass,
        displayNone,
        setDisplayNone,
        // HandleSwitch,
        HandleAddTask,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
