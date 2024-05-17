import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(){
    console.log("item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className="flex flex-row justify-between items-center">
      <h3 className="text-2xl">{item}</h3>
      <div className="text-3xl cursor-pointer"><AiOutlineDelete onClick={() => handleDelete(item)}/></div>
      
    </div>
  );
}
