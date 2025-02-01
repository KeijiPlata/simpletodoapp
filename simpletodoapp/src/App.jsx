import React from "react";
import Todo from "./components/Todo";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="w-full min-h-screen bg-customBg font-Poppins">
          <Routes>
            <Route path="/" element={<ProtectedRoute element={<Todo />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
