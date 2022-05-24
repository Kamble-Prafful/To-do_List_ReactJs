import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import AddTaskBtn from "./Shared/AddTaskBtn";
import { ModalProvider } from "./Context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Header />
        <div className="headerBtn-container">
          <AddTaskBtn />
        </div>
        <TodoList />
      </div>
    </ModalProvider>
  );
}

export default App;
