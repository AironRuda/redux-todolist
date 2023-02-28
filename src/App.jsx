import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskForm, TaskList } from "./components";

// useDispatch -> genera acciones
// useSelector -> selecciona informacion

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
