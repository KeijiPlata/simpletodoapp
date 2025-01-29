import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import axios from "axios";

export default function TodoItem({ item, todos, setTodos }) {
   const API_URL = "http://localhost:4000/api/todos"; 

  // Delete a todo item from the database
  async function handleDelete() {
    try {
      await axios.delete(`${API_URL}/${item._id}`); 
      setTodos(todos.filter((todo) => todo._id !== item._id)); 
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }
 
  // Toggle the 'done' status in the database
  async function handleClick() {
    try {
      const response = await axios.put(`${API_URL}/${item._id}`, {
        done: !item.done, 
      });

      setTodos(
        todos.map((todo) =>
          todo._id === item._id ? { ...todo, done: response.data.done } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }

  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <h3
          className={`lg:text-2xl md:text-xl text-lg text-start ${item.done ? "line-through" : "no-underline"}`}
        >
          {item.name}
        </h3>
        <h3 className="text-sm text-start">{item.date}</h3>
      </div>
      <div className="flex flex-row gap-2">
        <div className="text-3xl cursor-pointer">
          <FaCheck onClick={() => handleClick(item.id)} />
        </div>
        <div className="text-3xl cursor-pointer">
          <AiOutlineDelete onClick={() => handleDelete(item)} />
        </div>
      </div>
    </div>
  );
}
