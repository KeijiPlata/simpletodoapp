import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";

export default function TodoItem({ item, todos, setTodos }) {
  // filters, if the element todo is equal to item, it will not store it to the array 
  function handleDelete() {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    // this will create new todo array
    // this checks if the todo.name is equal to name, if that's the case, make todo.done into something else
    setTodos(
      todos.map((todo) => (todo.name === name ? { ...todo, done: !todo.done } : todo))
    );
    
  }
  return (
    <div className="flex flex-row justify-between items-center">
      <h3 className={`text-2xl ${item.done ? "line-through" : "no-underline"}`}>{item.name}</h3>
      <div className="flex flex-row gap-2">
        <div className="text-3xl cursor-pointer">
          {/* call back function will not immediately trigger the function */}
          <FaCheck onClick={() => handleClick(item.name)} />
        </div>
        <div className="text-3xl cursor-pointer">
          <AiOutlineDelete onClick={() => handleDelete(item)} />
        </div>
      </div>
    </div>
  );
}
