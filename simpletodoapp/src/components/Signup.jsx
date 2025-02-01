import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/api/auth/signup", {
        email: formData.email,
        password: formData.password,
      });

      console.log("Signup successful:", res.data);
      navigate("/login"); 
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center w-full h-screen text-white"
    >
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
              placeholder="example@email.com"
              className="w-full p-2 text-white transition-all duration-300 ease-in-out bg-transparent border-b-2 border-white outline-none focus:border-customYellow"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label className="text-base text-white transition-all duration-300 ease-in-out group-focus-within:text-customYellow">
              Email
            </label>
          </div>
          <div className="flex flex-col gap-1 pl-1 md:gap-2 group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 text-white transition-all duration-300 ease-in-out bg-transparent border-b-2 border-white outline-none focus:border-customYellow"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <label className="text-base text-white transition-all duration-300 ease-in-out group-focus-within:text-customYellow">
              Password
            </label>
          </div>
          <div className="flex flex-col gap-1 pl-1 md:gap-2 group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-2 text-white transition-all duration-300 ease-in-out bg-transparent border-b-2 border-white outline-none focus:border-customYellow"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label className="text-base text-white transition-all duration-300 ease-in-out group-focus-within:text-customYellow">
              Confirm Password
            </label>
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Show error if exists */}
        <div className="flex flex-col items-center justify-center w-full gap-5 pt-5">
          <button
            type="submit"
            className="w-full p-3 text-center bg-transparent rounded-md outline"
          >
            Signup
          </button>
          <p>
            Already have an account? <a href="/login" className="transition-all duration-500 ease-in-out hover:text-customYellow hover:underline">Click here</a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Signup;
