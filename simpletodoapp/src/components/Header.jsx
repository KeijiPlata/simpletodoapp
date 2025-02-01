import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Header() {
  const { logout } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  // Handle logout functionality
  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <div className="flex flex-row justify-between w-full px-6 pt-10 pb-3 text-white">
      <h2 className="text-3xl text-white">SimpleToDo</h2>
      <button
        type="button"
        onClick={handleLogout} 
        className="px-4 py-1 text-center transition-all duration-500 ease-in-out bg-transparent rounded-md outline hover:outline-customYellow hover:text-customYellow"
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
