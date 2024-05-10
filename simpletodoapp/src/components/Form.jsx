import { useState } from "react";

function Form({ todos, setTodos }) {
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
      <form onSubmit={handleSubmit} className="text-white lg:w-3/5 md:w-10/12 w-full grid md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-3 gap-5 md:p-3">
        <div className="flex flex-col md:gap-2 gap-1 group">
        <input
          type="text"
          name="task"
          title="task"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Enter your task"
          className="bg-transparent border-b-2 outline-none text-white p-2 w-full border-white focus:border-customYellow transition-all duration-300 ease-in-out"
        />
        <label htmlFor="task" className="text-white text-base transition-all duration-300 ease-in-out group-focus-within:text-customYellow group-focus-within:text-lg">Task</label>
        </div>
        <div className="self-center flex flex-col justify-center items-center w-full">
        <button type="submit" className="bg-transparent rounded-md md:w-7/12 w-full text-center outline p-2"> + Create</button>
        </div>
      </form>
    </>
  );
}

export default Form;
