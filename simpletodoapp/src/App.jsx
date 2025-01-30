import React from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="w-full min-h-screen p-6 bg-customBg font-Poppins">
      {/* <Header />
      <Todo /> */}
      <Login />
    </div>
  );
}

export default App;
