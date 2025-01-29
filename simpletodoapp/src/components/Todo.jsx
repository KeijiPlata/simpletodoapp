import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import ListToDo from "./ListToDo";
import Footer from "./Footer";

export default function Todo() {
  // store todo items here
  const [todos, setTodos] = useState([]);

  // Fetch data from the backend 
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/todos");
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos(); 
  }, []); // empty means to run only once, pag may laman, evertime na magchange yung object, magrarun useEffect

  // create a array that is done and count its length
  const completedTodos = todos.filter((todo) => todo.done).length;

  // count the total number of todos
  const totalTodos = todos.length;

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Form setTodos={setTodos} todos={todos} />
      <ListToDo todos={todos} setTodos={setTodos} />
      {/* <Footer completedTodos={completedTodos} totalTodos={totalTodos} /> */}
    </div>
  );
}
