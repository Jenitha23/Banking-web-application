import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  // Mock authentication state
  const isAuthenticated = true; // In real app, this would be from context/store
  const userRole = 'customer'; // In real app, this would be from context/store

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Redirect to default dashboard based on role
    switch (userRole) {
      case 'admin':
        return <Navigate to="/admin" replace />;
      case 'staff':
        return <Navigate to="/staff" replace />;
      case 'customer':
      default:
        return <Navigate to="/customer" replace />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;
