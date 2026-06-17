import React from 'react';
import StatCard from '../../components/common/StatCard';
import DataTable from '../../components/common/DataTable';
import Card from '../../components/common/Card';
import { DollarSign, ArrowUpRight, ArrowDownRight, CreditCard, Activity } from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';

const CustomerDashboard = () => {
  const recentTransactions = [
    { id: '1', date: 'Oct 24, 2026', description: 'Grocery Store', type: 'Debit', amount: '-$120.50', status: 'Completed' },
    { id: '2', date: 'Oct 22, 2026', description: 'Salary Deposit', type: 'Credit', amount: '+$3,400.00', status: 'Completed' },
    { id: '3', date: 'Oct 20, 2026', description: 'Coffee Shop', type: 'Debit', amount: '-$5.40', status: 'Pending' },
    { id: '4', date: 'Oct 19, 2026', description: 'Electric Bill', type: 'Debit', amount: '-$89.00', status: 'Completed' },
  ];

  const columns = [
    { header: 'Date', accessor: 'date' },
    { header: 'Description', accessor: 'description' },
    { header: 'Type', render: (row) => (
      <span className={row.type === 'Credit' ? 'text-green-600' : 'text-red-600'}>
        {row.type}
      </span>
    )},
    { header: 'Amount', accessor: 'amount' },
    { header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Balance" value="$12,450.00" icon={DollarSign} trend={4.5} />
        <StatCard title="Monthly Income" value="$4,200.00" icon={ArrowUpRight} trend={2.1} />
        <StatCard title="Monthly Expenses" value="$1,850.40" icon={ArrowDownRight} trend={-1.2} />
        <StatCard title="Active Cards" value="3" icon={CreditCard} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
               <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-bank-dark">Recent Transactions</h3>
                  <button className="text-sm font-medium text-bank-secondary hover:underline">View All</button>
               </div>
               <DataTable columns={columns} data={recentTransactions} />
            </Card>
         </div>

         <div className="space-y-6">
            <Card className="p-6 bg-bank-dark text-white border-transparent">
               <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">Quick Actions</h3>
                  <Activity size={20} className="text-bank-secondary" />
               </div>
               <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl font-medium">Send Money</button>
                  <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl font-medium">Pay Bills</button>
                  <button className="w-full text-left px-4 py-3 bg-bank-secondary text-bank-dark hover:bg-white transition-colors rounded-xl font-bold">Deposit Funds</button>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
