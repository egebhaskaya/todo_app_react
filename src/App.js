import React, { useState } from "react";
import Header from "./components/Header";
import AddArea from "./components/AddArea";
import Todo from "./components/Todo";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addItem = (newTodo) => {
    setTodoList((prev) => {
      return [...prev, newTodo];
    });
  };

  const deleteItem = (todoID) => {
    setTodoList((prev) => {
      return prev.filter((item, index) => {
        return todoID !== index;
      });
    });
  };

  return (
    <>
      <Header />
      <AddArea addItem={addItem} />
      <Todo todoList={todoList} deleteItem={deleteItem} />
    </>
  );
}

export default App;
