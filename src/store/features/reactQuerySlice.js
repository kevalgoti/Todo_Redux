'use client'
import { createSlice } from '@reduxjs/toolkit';

const reactQuerySlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    setTodos: (state, action) => action.payload,
    addTodo: (state, action) => [...state, action.payload],
    updateTodo: (state, action) => {
      return state.map(todo => (todo.id === action.payload.id ? action.payload : todo));
    },
    deleteTodo: (state, action) => state.filter(todo => todo.id !== action.payload),
  },
});

export const { setTodos, addTodo, updateTodo, deleteTodo } = reactQuerySlice.actions;
export default reactQuerySlice.reducer;
