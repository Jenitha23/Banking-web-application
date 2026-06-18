import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Route Guards
import ProtectedRoute from './ProtectedRoute';
import RoleProtectedRoute from './RoleProtectedRoute';

// Layout
import DashboardLayout from '../components/common/DashboardLayout';

// Auth Pages (new location)
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// Public
import Landing from '../pages/public/Landing';

// Customer
import CustomerDashboard from '../pages/customer/CustomerDashboard';
import DepositRequest from '../pages/customer/DepositRequest';
import TransactionHistory from '../pages/customer/TransactionHistory';
import DepositHistory from '../pages/customer/DepositHistory';
import MyAccount from '../pages/customer/MyAccount';

// Staff
import StaffDashboard from '../pages/staff/StaffDashboard';

// Admin
import AdminDashboard from '../pages/admin/AdminDashboard';
import UserManagement from '../pages/admin/UserManagement';

/**
 * AppRoutes — all application routing in one place.
 *
 * Structure:
 *   Public routes  → accessible to everyone
 *   Protected      → requires authentication (any role)
 *     Customer     → requires "Customer" role
 *     Staff        → requires "Staff" or "Admin" role
 *     Admin        → requires "Admin" role only
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* ── Public Routes ───────────────────────────────── */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ── Protected Routes (authenticated only) ───────── */}
      <Route element={<ProtectedRoute />}>

        {/* Customer Routes — "Customer" role */}
        <Route element={<RoleProtectedRoute allowedRoles={['Customer']} />}>
          <Route path="/customer" element={<DashboardLayout role="customer" />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<CustomerDashboard />} />
            <Route path="deposit" element={<DepositRequest />} />
            <Route path="transactions" element={<TransactionHistory />} />
            <Route path="deposit-history" element={<DepositHistory />} />
            <Route path="account" element={<MyAccount />} />
          </Route>
        </Route>

        {/* Staff Routes — "Staff" or "Admin" role */}
        <Route element={<RoleProtectedRoute allowedRoles={['Staff', 'Admin']} />}>
          <Route path="/staff" element={<DashboardLayout role="staff" />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<StaffDashboard />} />
            <Route path="reviews" element={<StaffDashboard />} />
          </Route>
        </Route>

        {/* Admin Routes — "Admin" role only */}
        <Route element={<RoleProtectedRoute allowedRoles={['Admin']} />}>
          <Route path="/admin" element={<DashboardLayout role="admin" />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
          </Route>
        </Route>

      </Route>

      {/* ── Catch-all → redirect to landing ─────────────── */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
