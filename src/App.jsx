import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskForm, TaskList } from "./components";

// useDispatch -> genera acciones
// useSelector -> selecciona informacion

function App() {
  // de todo el estado, solo espero el estado de las tareas "tasks"
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
