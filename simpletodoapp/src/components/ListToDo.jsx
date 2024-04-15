import React from 'react'
import TodoItem from "./TodoItem";

function ListToDo({ todos }) {
  return (
    <div>
        {/* display todos using map */}
        {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  )
}

export default ListToDo