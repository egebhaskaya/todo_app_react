import React, { useState } from "react";

const AddArea = (props) => {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setTodo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="AddAreaContainer">
      <div className="AddArea">
        <div>AddArea</div>
        <input
          name="title"
          type="text"
          className="TextInput"
          placeholder="Todo Title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <textarea
          name="content"
          rows="3"
          className="TextareaInput"
          placeholder="Todo Content"
          value={todo.content}
          onChange={onChangeHandler}
        ></textarea>
        <button
          onClick={() => {
            props.addItem(todo);
            setTodo({
              title: "",
              content: "",
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddArea;
