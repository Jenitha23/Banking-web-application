import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Guards
import ProtectedRoute from '../guards/ProtectedRoute';

// Layout
import DashboardLayout from '../components/common/DashboardLayout';

// Public
import Landing from '../pages/public/Landing';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';

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

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Customer Routes */}
      <Route element={<ProtectedRoute allowedRoles={['customer']} />}>
        <Route path="/customer" element={<DashboardLayout role="customer" />}>
          <Route index element={<CustomerDashboard />} />
          <Route path="deposit" element={<DepositRequest />} />
          <Route path="transactions" element={<TransactionHistory />} />
          <Route path="deposit-history" element={<DepositHistory />} />
          <Route path="account" element={<MyAccount />} />
        </Route>
      </Route>

      {/* Staff Routes */}
      <Route element={<ProtectedRoute allowedRoles={['staff']} />}>
        <Route path="/staff" element={<DashboardLayout role="staff" />}>
          <Route index element={<div className="p-4 text-2xl font-bold">Welcome to Staff Portal</div>} />
          <Route path="reviews" element={<StaffDashboard />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
