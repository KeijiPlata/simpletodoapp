import React from "react";
import TodoItem from "./TodoItem";

function ListToDo({ todos, setTodos }) {
  // this will sort the todos
  // slice will make a copy of todos so it will not affect the original
  // sort: a-b means ascending b-a means in descending order

  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className=" lg:w-5/6 md:w-10/12 w-full justify-center items-center">
      {/* display todos using map */}
      <h2 className="text-white text-4xl py-2">To Do</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        {sortedTodos.map((item) => (
          <div
            key={item.name}
            className="bg-customBlue  w-full text-center rounded-md p-8"
          >
            <TodoItem item={item} todos={todos} setTodos={setTodos} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListToDo;
