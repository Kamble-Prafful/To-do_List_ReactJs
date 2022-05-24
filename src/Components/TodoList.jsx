import Slide from "./Slide";
import TodoForm from "./TodoForm";
import { useContext, useEffect, useState } from "react";
// import todoData from "../Data/DefaultTodoData";
import ModalContext from "../Context/ModalContext";

//Storing Data to LocalStorage

const getLocalItems = () => {
  let list = localStorage.getItem("Lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("Lists"));
  } else {
    return [];
  }
};

function TodoList() {
  const [todos, setTodos] = useState(getLocalItems());
  const { openModal, blurClass, displayNone } = useContext(ModalContext);

  console.log("openModal", openModal);
  console.log("displayNone", displayNone);
  console.log("blurClass", blurClass);

  //Adding Data to LocalStorage

  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(todos));
  }, [todos]);

  // Adding Todo-Slide

  const addTodo = (todo) => {
    if (todo.title && todo.task) {
      const newTodos = [todo, ...todos];
      setTodos(newTodos);
    }
  };

  // Deleting Todo-Slide

  const DeleteTodo = (id) => {
    const removeArr = todos.filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  // Editing Todo-Slide

  const EditTodo = (todoId, newValue) => {
    if (newValue.title && newValue.task) {
      setTodos((prev) =>
        prev.map((item) => (item.id === todoId ? newValue : item))
      );
      console.log(newValue);
    }
  };

  return (
    <>
      {/* <div className={displayNone ? "form-container d-none" : "form-container"}> */}
      {/* <div className="form-container"> */}
      {openModal && <TodoForm onSubmit={addTodo} />}
      {/* </div> */}
      <div
        // className={blurClass ? "is-blurred main-container" : "main-container"}
        className="main-container"
      >
        <Slide todos={todos} DeleteTodo={DeleteTodo} EditTodo={EditTodo} />
      </div>
    </>
  );
}

export default TodoList;
