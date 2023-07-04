import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";

const Todo = () => {
  const todo = useSelector((state) => state.todos);
  console.log(todo);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a task..." />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Todo;
