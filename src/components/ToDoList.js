import React from "react";
// Importing components
import ToDo from "./ToDo";

const ToDoList = ({ toDos, setToDos, filteredToDos }) => {
  // console.log(toDos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredToDos.map((toDo) => (
          <ToDo
            setToDos={setToDos}
            toDos={toDos}
            key={toDo.id}
            toDo={toDo}
            text={toDo.text}
            id={toDo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
