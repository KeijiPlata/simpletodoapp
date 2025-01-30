import React from "react";

function Signup() {
  return (
    <form className="flex items-center justify-center w-full h-screen text-white ">
      <div className="flex flex-col items-center justify-center gap-5 md:w-1/2 lg:w-1/3">
        <div className="flex flex-col items-center justify-center gap-1 pb-7">
          <h1 className="text-5xl">SimpleToDo</h1>
          <p>Register and start your task.</p>
        </div>
        <div className="flex flex-col w-full gap-7">
          <div className="flex flex-col gap-1 pl-1 md:gap-2 group">
            <input
              type="email"
              name="email"
              title="email"
              placeholder="example@email.com"
              className="w-full p-2 text-white transition-all duration-300 ease-in-out bg-transparent border-b-2 border-white outline-none focus:border-customYellow"
              required
            />
            <label
              htmlFor="email"
              className="text-base text-white transition-all duration-300 ease-in-out group-focus-within:text-customYellow group-focus-within:text-lg"
            >
              Email
            </label>
          </div>
          <div className="flex flex-col gap-1 pl-1 md:gap-2 group">
            <input
              type="password"
              name="password"
              title="password"
              placeholder="Password"
              className="w-full p-2 text-white transition-all duration-300 ease-in-out bg-transparent border-b-2 border-white outline-none focus:border-customYellow"
              required
            />
            <label
              htmlFor="password"
              className="text-base text-white transition-all duration-300 ease-in-out group-focus-within:text-customYellow group-focus-within:text-lg"
            >
              Password
            </label>
          </div>
          <div className="flex flex-col gap-1 pl-1 md:gap-2 group">
            <input
              type="password"
              name="confirmPassword"
              title="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-2 text-white transition-all duration-300 ease-in-out bg-transparent border-b-2 border-white outline-none focus:border-customYellow"
              required
            />
            <label
              htmlFor="confirmPassword"
              className="text-base text-white transition-all duration-300 ease-in-out group-focus-within:text-customYellow group-focus-within:text-lg"
            >
              Confirm Password
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5 pt-5">
          {" "}
          <button
            type="submit"
            className="w-full p-3 text-center bg-transparent rounded-md outline"
          >
            {" "}
            Login
          </button>
          <p>
            Already have an account? <a href="">Click here</a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Signup;
