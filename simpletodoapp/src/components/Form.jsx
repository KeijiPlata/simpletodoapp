import React from "react";
import { useState } from "react";
import { CirclePicker } from "react-color";
import { v4 as uuidv4 } from "uuid";

function Form({ todos, setTodos }) {
  // get the user input
  const [todo, setTodo] = useState({
    id: uuidv4(),
    name: "",
    date: new Date().toISOString().split("T")[0],
    color: "#9FDDFF",
    done: false,
  });
  const colorArrays = ["#9FDDFF", "#ABF0CF", "#FFB1EA", "#F9DC4A"];

  function handleSubmit(e) {
    // this will prevent site from refreshing
    e.preventDefault();

    // using spread operator, create new array with the new input
    setTodos([...todos, todo]);

    // empty the input when submit
    setTodo({
      id: uuidv4(),
      name: "",
      date: new Date().toISOString().split("T")[0],
      color: "#9FDDFF",
      done: false,
    });
    console.log(todo);
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
        className="text-white lg:w-4/5 md:w-11/12 w-full grid md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-3 gap-5 md:p-3"
      >
        <div className=" grid grid-cols-1 gap-3">
          <div className="flex flex-col md:gap-2 gap-1 group pl-1">
            <input
              type="text"
              name="task"
              title="task"
              onChange={(e) => setTodo({ ...todo, name: e.target.value })}
              value={todo.name}
              placeholder="Enter your task"
              className="bg-transparent border-b-2 outline-none text-white p-2 w-full border-white focus:border-customYellow transition-all duration-300 ease-in-out"
              required
            />
            <label
              htmlFor="task"
              className="text-white text-base transition-all duration-300 ease-in-out group-focus-within:text-customYellow group-focus-within:text-lg"
            >
              Task
            </label>
          </div>
          <div className="w-full flex flex-row justify-center items-center lg:gap-6 gap-7">
            <div className="w-full flex flex-col md:gap-2 gap-1 group pl-1">
              <input
                type="date"
                name="date"
                title="date"
                value={todo.date}
                onChange={(e) => setTodo({ ...todo, date: e.target.value })}
                className="bg-transparent border-b-2 outline-none text-white p-2 w-full border-white focus:border-customYellow transition-all duration-300 ease-in-out"
                required
              />
              <label
                htmlFor="date"
                className="text-white text-base transition-all duration-300 ease-in-out group-focus-within:text-customYellow group-focus-within:text-lg"
              >
                Date
              </label>
            </div>
            <div className="w-full flex flex-col gap-4 ">
              <div className="w-full flex justify-center items-center">
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
        <div className="self-center flex flex-col justify-center items-center w-full">
          <button
            type="submit"
            className="bg-transparent rounded-md md:w-7/12 w-full text-center outline p-2"
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
