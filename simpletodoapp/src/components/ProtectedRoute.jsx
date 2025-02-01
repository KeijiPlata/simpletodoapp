import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function ProtectedRoute({ element }) {
  const { user } = useContext(AuthContext);

  // Avoid redirecting before user state is properly restored
  if (user === null) {
    return <div>Loading...</div>; // Temporary loading state
  }

  return user ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
