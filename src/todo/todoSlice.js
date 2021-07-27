import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",

  initialState: {
    value: [
      {
        id: 1,
        title: "test 1",
        isComplete: false
      },
      {
        id: 2,
        title: "test 2",
        isComplete: false
      },
      {
        id: 3,
        title: "test 3",
        isComplete: false
      }
    ],
    count: 3,
  },

  // These are the functions that edit our state
  reducers: {

    // payload is todo object
    addTodo: (state, { payload }) => {
      state.value.push(payload);
      state.count++;
    },

    // payload is array of todo objects
    setTodos: (state, { payload }) => {
      state.value = payload;
      state.count = payload.length;
    },

    // payload is id of todo removed
    removeTodo: (state, { payload }) => {
      const todos = state.value.filter((todo) => todo.id !== payload);
      state.value = todos;
      state.value.map((todo, i) => todo.id = i + 1);
      state.count = state.value.length;
    },
    
    // payload is the id of the item to be completed
    updateTodo: (state, { payload }) => {
      const current = state.value[payload - 1].isComplete;
      state.value[payload - 1].isComplete = !current;
      state.count = state.value.length;
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
