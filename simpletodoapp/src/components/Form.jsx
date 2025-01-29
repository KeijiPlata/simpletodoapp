import React from "react";
import { useState } from "react";
import { CirclePicker } from "react-color";
import axios from "axios"; 

function Form({ todos, setTodos }) {
  // get the user input
  const [todo, setTodo] = useState({
    name: "",
    date: new Date().toISOString().split("T")[0],
    color: "#9FDDFF",
    done: false,
  });
  const colorArrays = ["#9FDDFF", "#ABF0CF", "#FFB1EA", "#F9DC4A"];

    // Handle form submission
    async function handleSubmit(e) {
      // Prevent site from refreshing
      e.preventDefault();
  
      try {
        // Make a POST request to the backend API to add a new todo
        const response = await axios.post("http://localhost:4000/api/todos", todo);
  
        // After the todo is added, update the state (this adds the new todo to the todos array)
        setTodos([...todos, response.data]);
  
        // Clear the input fields after submission
        setTodo({
          name: "",
          date: new Date().toISOString().split("T")[0],
          color: "#9FDDFF",
          done: false,
        });
  
        console.log("Todo added:", response.data); // Optionally log the response from the server
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }

  function handleColorChange(color) {
    setTodo({
      ...todo,
      color: color.hex,
    });
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid w-full grid-cols-1 gap-5 text-white lg:w-4/5 md:w-11/12 md:grid-cols-2 lg:gap-5 md:gap-3 md:p-3"
      >
        <div className="grid grid-cols-1 gap-3 ">
          <div className="flex flex-col gap-1 pl-1 md:gap-2 group">
            <input
              type="text"
              name="task"
              title="task"
              onChange={(e) => setTodo({ ...todo, name: e.target.value })}
              value={todo.name}
              placeholder="Enter your task"
              maxLength={15}
              className="w-full p-2 text-white transition-all duration-300 ease-in-out bg-transparent border-b-2 border-white outline-none focus:border-customYellow"
              required
            />
            <label
              htmlFor="task"
              className="text-base text-white transition-all duration-300 ease-in-out group-focus-within:text-customYellow group-focus-within:text-lg"
            >
              Task
            </label>
          </div>
          <div className="flex flex-row items-center justify-center w-full lg:gap-6 gap-7">
            <div className="flex flex-col w-full gap-1 pl-1 md:gap-2 group">
              <input
                type="date"
                name="date"
                title="date"
                value={todo.date}
                onChange={(e) => setTodo({ ...todo, date: e.target.value })}
                className="w-full p-2 text-white transition-all duration-300 ease-in-out bg-transparent border-b-2 border-white outline-none focus:border-customYellow"
                required
              />
              <label
                htmlFor="date"
                className="text-base text-white transition-all duration-300 ease-in-out group-focus-within:text-customYellow group-focus-within:text-lg"
              >
                Date
              </label>
            </div>
            <div className="flex flex-col w-full gap-4 ">
              <div className="flex items-center justify-center w-full">
                <CirclePicker
                  colors={colorArrays}
                  width="100%"
                  onChange={handleColorChange}
                  circleSpacing={6}
                />
              </div>
              <p className="pl-2">Color</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center self-center justify-center w-full">
          <button
            type="submit"
            className="w-full p-2 text-center bg-transparent rounded-md md:w-7/12 outline"
          >
            {" "}
            + Create
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
