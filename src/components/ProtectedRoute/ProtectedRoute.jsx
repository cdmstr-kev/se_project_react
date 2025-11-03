import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AppContext from "../../contexts/AppContext.js";

function ProtectedRoute({ children, anonymous = false }) {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { isLoggedIn, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (anonymous && isLoggedIn) {
    return <Navigate to={from} replace />;
  }

  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/" state={{ from }} replace />;
  }

  return children;
}

export default ProtectedRoute;
