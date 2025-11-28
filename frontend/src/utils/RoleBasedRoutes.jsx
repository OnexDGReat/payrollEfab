// import { useAuth } from "../context/authContext.jsx";
// const RoleBasedRoutes = (children, requiredRole) => {
//     const {user, loading} = useAuth();
//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!requiredRole.includes(user.role)) {
//         <Navigate to="/unauthorized" />;
//     }

//    return user ? children : <Navigate to = "/login" />;
    
// }

// export default RoleBasedRoutes;

// ...existing code...
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";

const RoleBasedRoutes = ({ children, requiredRole }) => {
  const { user, loading } = useAuth() || {};

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  const roles = Array.isArray(requiredRole) ? requiredRole : (requiredRole ? [requiredRole] : []);
  const role = user.role || user.user?.role || null;
  if (roles.length > 0 && !roles.includes(role)) return <Navigate to="/unauthorized" replace />;

  return children;
};

export default RoleBasedRoutes;
// ...existing code...