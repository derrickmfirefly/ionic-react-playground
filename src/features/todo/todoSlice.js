// Redux
import { createSlice } from "@reduxjs/toolkit";

// Functions
const saveTodosToLocalStorage = (todos) => {
  const save = JSON.stringify(todos)
  localStorage.setItem('todos', save)
}

// Slice
export const todoSlice = createSlice({
  name: "todos",

  initialState: JSON.parse(localStorage.getItem('todos')) || {value: [], count: 0},

  // These are the functions that edit our state
  reducers: {

    // payload is todo object
    addTodo: (state, { payload }) => {
      state.value.push(payload);
      state.count++;
      saveTodosToLocalStorage(state);
    },

    // payload is array of todo objects
    setTodos: (state, { payload }) => {
      state.value = payload;
      state.count = payload.length;
      saveTodosToLocalStorage(state);
    },

    // payload is id of todo removed
    removeTodo: (state, { payload }) => {
      const todos = state.value.filter((todo) => todo.id !== payload);
      state.value = todos;
      state.value.map((todo, i) => todo.id = i + 1);
      state.count = state.value.length;
      saveTodosToLocalStorage(state);
    },
    
    // payload is the id of the item to be completed
    updateTodo: (state, { payload }) => {
      const current = state.value[payload - 1].isComplete;
      state.value[payload - 1].isComplete = !current;
      state.count = state.value.length;
      saveTodosToLocalStorage(state);
    }
  }
});

// Add new reducers in this export
export const {
  addTodo,
  setTodos,
  removeTodo,
  updateTodo
} = todoSlice.actions;

export default todoSlice.reducer;
