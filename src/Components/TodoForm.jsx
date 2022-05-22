import DeleteBtnCross from "../Shared/DeleteBtnCross";

function TodoForm() {
  return (
    <div className="main-container">
      <form className="todo-form">
        <div className="add-container">
          <h1 className="add-h1">Add Task</h1>
          <DeleteBtnCross />
          <div className="title-input">
            <label htmlFor="title">Title</label>
            <br />
            <input type="text" id="title" />
          </div>
          <div className="task-input">
            <label htmlFor="task">Task</label>
            <br />
            <textarea id="task" rows={4} />
          </div>
          <button className="add-task">Add Task</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
