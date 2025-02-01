import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import ListToDo from "./ListToDo";
import Footer from "./Footer";
import Header from "./Header";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found. Please log in.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:4000/api/todos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error.response?.data || error);
      }
    };

    fetchTodos();
  }, []);

  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center gap-5 p-6">
        <Form setTodos={setTodos} todos={todos} />
        <ListToDo todos={todos} setTodos={setTodos} />
        {/* <Footer completedTodos={completedTodos} totalTodos={totalTodos} /> */}
      </div>
    </>
  );
}
