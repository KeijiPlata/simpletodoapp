import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  // get the user input
  const [todo, setTodo] = useState ("");

  // store to do items here
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    // this will prevent site from refreshing
    e.preventDefault();

    // using spread operator, create new array with the new input
    setTodos([...todos, todo]);

    // empty the input when submit
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>

      {/* display todos using map */}
      {todos.map((item) =>(
        <TodoItem key={item} item={item}/>
      ))}
    </div>
  );
}
