import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("userId");
    return token ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;