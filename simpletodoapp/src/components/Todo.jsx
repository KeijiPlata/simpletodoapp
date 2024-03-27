import React, { useState } from "react";

export default function Todo() {
  const [todo, SetTodo] = useState ("");
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => SetTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
