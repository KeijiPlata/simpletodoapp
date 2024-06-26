import React from "react";

function Footer({ completedTodos, totalTodos }) {
  return (
    <div className="text-white"> 
      <h1>Completed Todos: {completedTodos}</h1>
      <h2>Total Todos: {totalTodos}</h2>
    </div>
  );
}

export default Footer;
