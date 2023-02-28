import { createSlice } from "@reduxjs/toolkit";

// Creacion de estado inicial
export const taskSlice = createSlice({
  //nombre del estado y valor inicial
  name: "task",
  initialState: [],
  // Funciones para eliminar el estado
  reducers: {},
});

// exporta unicamente reducer, necesario para el store
export default taskSlice.reducer;
