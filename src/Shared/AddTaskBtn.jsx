import { AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import ModalContext from "../Context/ModalContext";

function AddTaskBtn({ children }) {
  const { setOpenModal, openModal, displayNone, HandleSwitch, blurClass } =
    useContext(ModalContext);

  console.log("openModal", openModal);
  console.log("displayNone", displayNone);
  console.log("blurClass", blurClass);

  return (
    <button className="add-item">
      {children}
      <AiOutlinePlus
        className="add-icon"
        onClick={() => {
          setOpenModal(true);
          // HandleSwitch();
        }}
        size={25}
      />
    </button>
  );
}

export default AddTaskBtn;
