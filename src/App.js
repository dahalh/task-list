import "./App.css";
// importing components
import { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);
  // Use Effect
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredToDos(toDos.filter((toDo) => toDo.completed === true));
          break;
        case "uncompleted":
          setFilteredToDos(toDos.filter((toDo) => toDo.completed === false));
          break;
        default:
          setFilteredToDos(toDos);
          break;
      }
    };
    filterHandler();
  }, [toDos, status]);
  // Functions

  return (
    <div className="App">
      <header>
        <h1>Task List</h1>
      </header>
      <Form
        inputText={inputText}
        toDos={toDos}
        setToDos={setToDos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        filteredToDos={filteredToDos}
        setToDos={setToDos}
        toDos={toDos}
      />
    </div>
  );
}

export default App;
