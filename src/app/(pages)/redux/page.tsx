"use client";
import { Provider, Provider as ReduxProvider } from "react-redux";

import Header from "@/components/header";
import AddTodo from "@/components/addTodo";
import TodoList from "@/components/todoList";
import { store } from "@/store";

export default function Redux() {
  return (
    <>
      <Header />
      <ReduxProvider store={store}>
        <TodoList />
        <AddTodo />
      </ReduxProvider>
    </>
  );
}
