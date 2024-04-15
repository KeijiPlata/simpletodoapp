import { useState } from "react";

function Form({ todos, setTodos}) {
  // get the user input
  const [todo, setTodo] = useState("");
  

  function handleSubmit(e) {
    // this will prevent site from refreshing
    e.preventDefault();

    // using spread operator, create new array with the new input
    setTodos([...todos, todo]);

    // empty the input when submit
    setTodo("");
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Form;
