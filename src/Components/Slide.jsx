import { FaTrash, FaPen } from "react-icons/fa";
import DeleteBtn from "../Shared/DeleteBtn";

function Slide() {
  return (
    <div className="container">
      <h1 className="slide-h1">Slide 1</h1>
      <DeleteBtn />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tempora?
        Cumque, voluptas doloribus nobis impedit autem
      </p>
      <button className="EditBtn">
        <FaPen color="#000" />
      </button>
    </div>
  );
}

export default Slide;
