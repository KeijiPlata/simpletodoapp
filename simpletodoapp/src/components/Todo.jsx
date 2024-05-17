import React, { useState } from "react";

import Form from "./Form";
import ListToDo from "./ListToDo";



export default function Todo() {
  // store to do items here
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <Form setTodos={setTodos} todos={todos}/>
      <ListToDo todos={todos} setTodos={setTodos}/>
    </div>
  );
}
