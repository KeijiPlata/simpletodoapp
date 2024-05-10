import React from "react";
import TodoItem from "./TodoItem";

function ListToDo({ todos }) {
  return (
    <div className=" lg:w-5/6 md:w-10/12 w-full justify-center items-center">
      {/* display todos using map */}
      <h2 className="text-white text-4xl py-2">To Do</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
      {todos.map((item) => (
        <div className="bg-customBlue  w-full text-center rounded-md p-5">
          <TodoItem key={item} item={item} />
        </div>
      ))}
      </div>
    </div>
  );
}

export default ListToDo;
