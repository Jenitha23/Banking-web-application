import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = ({ role = 'customer' }) => {
  return (
    <div className="flex bg-bank-light min-h-screen">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header can go here if needed, keeping simple for now */}
        <header className="bg-white px-8 py-5 flex items-center justify-between border-b border-gray-100">
          <div>
            <h1 className="text-xl font-bold text-bank-dark">Overview</h1>
            <p className="text-sm text-bank-textLight mt-1">Welcome back, check your summary.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-bank-secondary flex items-center justify-center text-bank-dark font-bold">
              TX
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
