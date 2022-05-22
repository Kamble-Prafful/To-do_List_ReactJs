import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import AddTaskBtn from "./Shared/AddTaskBtn";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="headerBtn-container">
        <AddTaskBtn />
      </div>
      {/* <TodoForm /> */}
      <TodoList />
    </div>
  );
}

export default App;
