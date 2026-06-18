import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Sidebar from './Sidebar';
import { Bell } from 'lucide-react';

const DashboardLayout = ({ role = 'customer' }) => {
  const { user } = useAuth();

  // Generate initials from the user's full name
  const initials = user?.fullName
    ? user.fullName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '??';

  return (
    <div className="flex bg-bank-light min-h-screen">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white px-8 py-5 flex items-center justify-between border-b border-gray-100">
          <div>
            <h1 className="text-xl font-bold text-bank-dark">Overview</h1>
            <p className="text-sm text-bank-textLight mt-1">
              Welcome back, {user?.fullName || 'User'}. Here's your summary.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="relative p-2 text-bank-textLight hover:text-bank-dark hover:bg-bank-light rounded-xl transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-bank-secondary rounded-full" />
            </button>
            <div className="h-8 w-px bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-bank-dark">{user?.fullName || 'User'}</p>
                <p className="text-xs text-bank-textLight capitalize">{user?.role || role}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bank-dark to-bank-primary flex items-center justify-center text-white font-bold text-sm shadow-md shadow-bank-dark/20">
                {initials}
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
