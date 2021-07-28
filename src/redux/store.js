// react packages
import { configureStore } from "@reduxjs/toolkit";

// Slices
import todoReducer from "../features/todo/todoSlice";
import settingsReducer from "../features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    settings: settingsReducer,
  }
});
