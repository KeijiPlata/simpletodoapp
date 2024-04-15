import React from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-customBg min-h-screen w-full font-Poppins p-8">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
