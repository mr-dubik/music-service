import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ redirectPath='/', user='/home' }) {
  if (!user) {
    return <Navigate to={redirectPath} replace='true' />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
