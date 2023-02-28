import { configureStore } from "@reduxjs/toolkit";
// importacion por defecto
import taskReducer from "../features/task/taskSlice";
// importacion desctructurada
// import { taskSlice } from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    //estado dentro del store, con valor inicial de taskReducer
    tasks: taskReducer,
  },
});
