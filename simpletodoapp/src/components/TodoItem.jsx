import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck, FaSpinner } from "react-icons/fa6";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";

export default function TodoItem({ item, todos, setTodos }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_URL_ENV = import.meta.env.VITE_API_URL;

  const API_URL = `${API_URL_ENV}/api/todos`;
  const token = localStorage.getItem("token");

  // modal before delete
  function confirmDelete() {
    confirmAlert({
      overlayClassName: "bg-black/70 backdrop-blur-sm fixed inset-0",
      customUI: ({ onClose }) => {
        return (
          <div className="bg-customBg text-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-auto font-['Poppins']">
            <h1 className="text-2xl font-semibold">Delete Todo</h1>
            <p className="mt-2 text-gray-300">
              Are you sure you want to delete{" "}
              <span className="font-bold">{item.name}</span>?
            </p>
            <div className="flex justify-end mt-4 space-x-3">
              <button
                className="px-4 py-2 text-white transition rounded-lg bg-customFr hover:bg-gray-500"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white transition bg-red-600 rounded-lg hover:bg-red-500"
                onClick={() => {
                  handleDelete();
                  onClose();
                }}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        );
      },
    });
  }

  // Delete a todo item from the database
  async function handleDelete() {
    try {
      setLoading(true);
      await axios.delete(`${API_URL}/${item._id}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      setTodos(todos.filter((todo) => todo._id !== item._id));
    } catch (error) {
      setError("Failed to delete todo. Try again.");
    } finally {
      setLoading(false);
    }
  }

  // Change the status done to the database
  async function handleClick() {
    try {
      setLoading(true);
      const response = await axios.put(
        `${API_URL}/${item._id}`,
        { done: !item.done },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      setTodos(
        todos.map((todo) =>
          todo._id === item._id ? { ...todo, done: response.data.done } : todo
        )
      );
    } catch (error) {
      setError("Failed to update todo. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <h3
          className={`lg:text-2xl md:text-xl text-lg text-start ${
            item.done ? "line-through" : "no-underline"
          }`}
        >
          {item.name}
        </h3>
        <h3 className="text-sm text-start">{item.date}</h3>
      </div>
      <div className="flex flex-row gap-2">
        <div className="text-3xl cursor-pointer">
          {loading ? (
            <span className="animate-spin">
              <FaSpinner />
            </span>
          ) : (
            <FaCheck onClick={handleClick} />
          )}
        </div>
        <div className="text-3xl cursor-pointer">
          {loading ? (
            <span className="animate-spin">
              <FaSpinner />
            </span>
          ) : (
            <AiOutlineDelete onClick={confirmDelete} />
          )}
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
