import { FaTimes } from "react-icons/fa";

function DeleteBtnCross({ children }) {
  return (
    <button className="closeBtn">
      {children}
      <FaTimes size={15} />
    </button>
  );
}

export default DeleteBtnCross;
