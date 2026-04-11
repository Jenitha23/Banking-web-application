import React from 'react';
import StatCard from '../../components/common/StatCard';
import Card from '../../components/common/Card';
import { Users, DollarSign, Activity, FileText } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-bank-dark">Admin Overview</h2>
        <p className="text-bank-textLight mt-1">System-wide statistics and management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="1,245" icon={Users} trend={12.5} />
        <StatCard title="Total Deposits" value="$4.2M" icon={DollarSign} trend={8.2} />
        <StatCard title="Daily Transactions" value="8,432" icon={Activity} trend={5.1} />
        <StatCard title="Pending Reviews" value="24" icon={FileText} trend={-2.4} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-lg font-bold text-bank-dark mb-4">System Health</h3>
          <div className="space-y-4">
             <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
               <span className="font-medium text-bank-text">API Server</span>
               <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Online</span>
             </div>
             <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
               <span className="font-medium text-bank-text">Database</span>
               <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Online</span>
             </div>
             <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
               <span className="font-medium text-bank-text">Payment Gateway</span>
               <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Online</span>
             </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
