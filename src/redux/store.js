// react packages
import { configureStore } from "@reduxjs/toolkit";

// Slices
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
