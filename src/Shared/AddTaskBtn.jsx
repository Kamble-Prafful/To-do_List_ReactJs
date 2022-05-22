import { AiOutlinePlus } from "react-icons/ai";

function AddTaskBtn({ children }) {
  return (
    <button className="add-item">
      {children}
      <AiOutlinePlus className="add-icon" size={25} />
    </button>
  );
}

export default AddTaskBtn;
