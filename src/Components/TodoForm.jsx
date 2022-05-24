import { useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import ModalContext from "../Context/ModalContext";

function TodoForm({ onSubmit, edit }) {
  const [inputTitle, setInputTitle] = useState(edit ? edit.value : "");
  const [inputTask, setInputTask] = useState(edit ? edit.value : "");

  const { setOpenModal, HandleAddTask, displayNone } = useContext(ModalContext);

  //Using useRef for Input Focus
  // const inputRef = useRef(null);
  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleChangeTask = (e) => {
    setInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: inputTitle,
      task: inputTask,
    });

    setInputTitle("");
    setInputTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      isOpen={true}
      className={displayNone ? "todo-form" : "d-none todo-form"}
    >
      {edit ? (
        <>
          <div className="update-container">
            <div className="add-container">
              <h1 className="add-h1">Update Task</h1>
              <button className="closeBtn" onClick={() => setOpenModal(false)}>
                <FaTimes size={15} />
              </button>
              <div className="title-input">
                <label htmlFor="title">Title</label>
                <br />
                <input
                  type="text"
                  id="title"
                  value={inputTitle}
                  onChange={handleChangeTitle}
                  // ref={inputRef}
                />
              </div>
              <div className="task-input">
                <label htmlFor="task">Task</label>
                <br />
                <textarea
                  id="task"
                  rows={4}
                  value={inputTask}
                  onChange={handleChangeTask}
                />
              </div>
              <button className="add-task" onClick={HandleAddTask()}>
                Update Task
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="form-container">
            <div className="add-container">
              <h1 className="add-h1">Add Task</h1>
              <button className="closeBtn" onClick={() => setOpenModal(false)}>
                <FaTimes size={15} />
              </button>
              <div className="title-input">
                <label htmlFor="title">Title</label>
                <br />
                <input
                  type="text"
                  id="title"
                  value={inputTitle}
                  onChange={handleChangeTitle}
                  // ref={inputRef}
                />
              </div>
              <div className="task-input">
                <label htmlFor="task">Task</label>
                <br />
                <textarea
                  id="task"
                  rows={4}
                  value={inputTask}
                  onChange={handleChangeTask}
                />
              </div>
              <button className="add-task" onClick={HandleAddTask()}>
                Add Task
              </button>
            </div>
          </div>
        </>
      )}
    </form>
  );
}

export default TodoForm;
