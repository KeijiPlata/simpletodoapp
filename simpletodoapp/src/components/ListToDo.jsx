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
    <div className="flex flex-col items-center justify-center w-full gap-5  lg:w-5/6 md:w-10/12">
      {/* display todos using map */}
      <h2 className="self-start text-4xl text-white">To Do</h2>

      {sortedTodos.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
          {sortedTodos.map((item) => (
            <div
              key={item._id}
              style={{ backgroundColor: item.color }}
              className="w-full p-5 text-center rounded-md lg:p-8 md:p-6"
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
