import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "task 2",
    description: "task 2 description",
    completed: false,
  },
];

// Creacion de estado inicial
export const taskSlice = createSlice({
  //nombre del estado y valor inicial
  name: "task",
  initialState,
  // Funciones para eliminar el estado
  reducers: {
    addTask: (state, action) => {
      // se recoge la informacion administrada en el action.payload
      // se agrega al final del arreglo
      state.push(action.payload);
    },
  },
});

// exportar las acciones que se puede realizara almacenadas en "actions" dentro del reducer
export const { addTask } = taskSlice.actions;

// exporta unicamente reducer, necesario para el store
export default taskSlice.reducer;
