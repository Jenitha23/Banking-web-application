import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CreditCard, History, User, LogOut, FileText } from 'lucide-react';

const Sidebar = ({ role }) => {
  const customerLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/customer' },
    { name: 'Deposit Funds', icon: CreditCard, path: '/customer/deposit' },
    { name: 'Transaction History', icon: History, path: '/customer/transactions' },
    { name: 'Deposit History', icon: FileText, path: '/customer/deposit-history' },
    { name: 'My Account', icon: User, path: '/customer/account' },
  ];

  const staffLinks = [
    { name: 'Staff Dashboard', icon: LayoutDashboard, path: '/staff' },
    { name: 'Deposit Reviews', icon: FileText, path: '/staff/reviews' },
  ];

  const adminLinks = [
    { name: 'Admin Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Manage Users', icon: User, path: '/admin/users' },
  ];

  const links = role === 'admin' ? adminLinks : role === 'staff' ? staffLinks : customerLinks;

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-full sticky top-0">
      <div className="p-6">
        <h2 className="text-xl font-bold text-bank-dark flex items-center gap-2">
          {role === 'customer' ? 'My Portal' : role === 'staff' ? 'Staff Portal' : 'Admin Panel'}
        </h2>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/customer' || link.path === '/staff' || link.path === '/admin'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                isActive 
                  ? 'bg-bank-dark text-white shadow-md' 
                  : 'text-bank-textLight hover:bg-gray-50 hover:text-bank-text'
              }`
            }
          >
            <link.icon size={20} />
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-100">
        <NavLink to="/login" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-medium">
          <LogOut size={20} />
          Logout
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
