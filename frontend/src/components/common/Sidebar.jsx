import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, CreditCard, History, User, LogOut, FileText, Home } from 'lucide-react';

const Sidebar = ({ role }) => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const customerLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/customer/dashboard' },
    { name: 'Deposit Funds', icon: CreditCard, path: '/customer/deposit' },
    { name: 'Transaction History', icon: History, path: '/customer/transactions' },
    { name: 'Deposit History', icon: FileText, path: '/customer/deposit-history' },
    { name: 'My Account', icon: User, path: '/customer/account' },
  ];

  const staffLinks = [
    { name: 'Staff Dashboard', icon: LayoutDashboard, path: '/staff/dashboard' },
    { name: 'Deposit Reviews', icon: FileText, path: '/staff/reviews' },
  ];

  const adminLinks = [
    { name: 'Admin Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'Manage Users', icon: User, path: '/admin/users' },
  ];

  const links = role === 'admin' ? adminLinks : role === 'staff' ? staffLinks : customerLinks;

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  // User initials
  const initials = user?.fullName
    ? user.fullName.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : '??';

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-full sticky top-0">
      {/* Brand Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-bank-dark to-bank-primary text-bank-secondary p-2 rounded-xl shadow-md">
            <Home size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-bank-dark leading-tight">
              Lanka<span className="text-bank-secondary">Bank</span>
            </h2>
            <p className="text-xs text-bank-textLight capitalize">{role} Portal</p>
          </div>
        </div>
      </div>

      {/* User Card */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 p-3 bg-bank-light rounded-xl">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-bank-dark to-bank-primary flex items-center justify-center text-white font-bold text-xs shadow-md">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-bank-dark truncate">{user?.fullName || 'User'}</p>
            <p className="text-xs text-bank-textLight truncate">{user?.email || ''}</p>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path.endsWith('/dashboard')}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                isActive 
                  ? 'bg-gradient-to-r from-bank-dark to-bank-primary text-white shadow-md shadow-bank-dark/20' 
                  : 'text-bank-textLight hover:bg-bank-light hover:text-bank-text'
              }`
            }
          >
            <link.icon size={20} />
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-medium"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
