import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const loadLocalStorage = () => {
  const localData = localStorage.getItem("todoSlice");
  return localData ? JSON.parse(localData) : []; // Agar ma'lumot bo'lmasa, bo'sh massiv qaytadi
};

// Boshlang'ich holat
const initialState = loadLocalStorage();

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      return state.filter((filter) => filter.id !== action.payload);
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone; // `isDone` qiymatini o'zgartirish
      }
    },
    saveLocal: (state, action) => {
      return localStorage.setItem("todoSlice", JSON.stringify(state));
    },
  },
});

export const { addTodo, removeTodo, editTodo, saveLocal } = todoSlice.actions;
export default todoSlice.reducer;
