import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import TodoForm from "./TodoForm";

function Slide({ todos, EditTodo, DeleteTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    title: "",
    task: "",
  });

  const submitUpdate = (value) => {
    EditTodo(edit.id, value);
    setEdit({
      id: null,
      title: "",
      task: "",
    });
  };

  if (edit.id) {
    return <TodoForm onSubmit={submitUpdate} edit={edit} />;
  }

  return todos.map((todo, index) => (
    <div className="container" key={index}>
      <h1 className="slide-h1">{todo.title}</h1>
      <button className="DeleteBtn" onClick={() => DeleteTodo(todo.id)}>
        <FaTrash color="#fff" />
      </button>
      <p>{todo.task}</p>
      <button
        className="EditBtn"
        onClick={() => {
          setEdit({ id: todo.id, title: todo.title, task: todo.task });
          console.log(todo.title, todo.task);
        }}
      >
        <FaPen color="#000" />
      </button>
    </div>
  ));
}

export default Slide;
