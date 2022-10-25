import React from "react";

const Todo = (props) => {
  return (
    <>
      <div className="TodoContainer">
        {props.todoList.map((todo, index) => {
          return (
            <div key={index} className="Todo">
              <h2>{todo.title}</h2>
              <h3>{todo.content}</h3>
              <button
                onClick={() => {
                  props.deleteItem(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
