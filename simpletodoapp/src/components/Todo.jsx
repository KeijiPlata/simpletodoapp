import React, { useState } from "react";

import Form from "./Form";
import ListToDo from "./ListToDo";
import Footer from "./Footer";

export default function Todo() {
  // store to do items here
  const [todos, setTodos] = useState([]);

  // create a array that is done and count its length
  const completedTodos = todos.filter((todo) => todo.done).length;

  // count the total number of todos
  const totalTodos = todos.length;

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <Form setTodos={setTodos} todos={todos} />
      <ListToDo todos={todos} setTodos={setTodos} />
      {/* <Footer completedTodos={completedTodos} totalTodos={totalTodos} /> */}
    </div>
  );
}
