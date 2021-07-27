// react packages
import { configureStore } from "@reduxjs/toolkit";

// Slices
import todoReducer from "../todo/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
