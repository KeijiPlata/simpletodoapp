import React from "react";
import TodoItem from "./TodoItem";
import EmptyList from "./EmptyList";

function ListToDo({ todos, setTodos }) {
  // this will sort the todos
  // slice will make a copy of todos so it will not affect the original
  // sort: a-b means ascending b-a means in descending order

  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className=" lg:w-5/6 md:w-10/12 w-full flex flex-col justify-center gap-5 items-center">
      {/* display todos using map */}
      <h2 className="text-white text-4xl self-start">To Do</h2>

      {sortedTodos.length > 0 ? (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full">
          {sortedTodos.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.color }}
              className="w-full text-center rounded-md p-8"
            >
              <TodoItem item={item} todos={todos} setTodos={setTodos} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default ListToDo;
