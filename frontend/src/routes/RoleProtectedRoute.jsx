import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Helper — returns the default dashboard path for a given role.
 */
const getDashboardByRole = (role) => {
  switch (role) {
    case 'Admin':
      return '/admin/dashboard';
    case 'Staff':
      return '/staff/dashboard';
    case 'Customer':
    default:
      return '/customer/dashboard';
  }
};

/**
 * RoleProtectedRoute — wraps routes that require specific roles.
 *
 * Props:
 *   allowedRoles: string[]  e.g. ['Admin'] or ['Staff', 'Admin']
 *
 * Behavior:
 *   - If user is NOT authenticated → redirect to /login  (shouldn't happen
 *     because ProtectedRoute is always the parent, but this is a safety net)
 *   - If user IS authenticated but lacks the required role →
 *     redirect them to their own dashboard (not a generic 403)
 *   - Otherwise → render child routes via <Outlet />
 */
const RoleProtectedRoute = ({ allowedRoles = [] }) => {
  const { isAuthenticated, role, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-bank-light flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-bank-accent/30 border-t-bank-dark animate-spin" />
            <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-b-bank-secondary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
          </div>
          <p className="text-bank-textLight text-sm font-medium animate-pulse">Checking permissions…</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to={getDashboardByRole(role)} replace />;
  }

  return <Outlet />;
};

export default RoleProtectedRoute;
