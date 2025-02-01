import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";
import AuthContext from "../context/AuthContext";

function ProtectedRoute({ element }) {
  const { user } = useContext(AuthContext);
  const [checkingUser, setCheckingUser] = useState(true);

  useEffect(() => {
    // if there is no user for 1 second, redirect to login
    const timer = setTimeout(() => {
      setCheckingUser(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (checkingUser) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen gap-5 text-white">
        <div className="text-5xl animate-spin">
          <FaSpinner />
        </div>
        <h1 className="text-3xl">Loading ...</h1>
      </div>
    );
  }

  return user ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
