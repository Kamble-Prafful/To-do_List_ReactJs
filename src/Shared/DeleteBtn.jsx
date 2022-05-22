import { FaTrash, FaPen } from "react-icons/fa";

function DeleteBtn({ children }) {
  return (
    <button className="DeleteBtn">
      {children}
      <FaTrash color="#fff" />
    </button>
  );
}

export default DeleteBtn;
