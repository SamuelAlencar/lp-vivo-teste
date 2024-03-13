import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar Redux", "Estudar Zustend"],

  reducers: {},
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  }
});
