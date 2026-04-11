import React, { useState, useEffect } from 'react';
import Card from '../../components/common/Card';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { Eye, CheckCircle, XCircle } from 'lucide-react';
import { transactionService } from '../../services/api';

const StaffDashboard = () => {
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await transactionService.getAllDepositRequests();
        setDeposits(data);
      } catch (error) {
        console.error('Failed to fetch deposit requests', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleAction = async (id, action) => {
    try {
      const status = action === 'Approve' ? 'approved' : 'rejected';
      await transactionService.updateDepositStatus(id, status);
      // Update local state optimistic UI
      setDeposits(deposits.map(dep => 
        dep.id === id ? { ...dep, status } : dep
      ));
      alert(`${action} deposit request ${id} successful`);
    } catch (error) {
      alert(`Failed to ${action.toLowerCase()} deposit ${id}`);
    }
  };

  const columns = [
    { header: 'Request ID', accessor: 'id' },
    { header: 'Customer', accessor: 'customerName' },
    { header: 'Amount', render: (row) => <span>${Math.abs(row.amount).toFixed(2)}</span> },
    { header: 'Date', render: (row) => new Date(row.date).toLocaleDateString() },
    { header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
    { header: 'Actions', render: (row) => (
      <div className="flex items-center gap-2">
        <button className="p-1 rounded text-gray-500 hover:text-bank-dark hover:bg-gray-100 transition-colors" title="View Details">
          <Eye size={18} />
        </button>
        {row.status === 'pending' && (
          <>
            <button 
              onClick={() => handleAction(row.id, 'Approve')}
              className="p-1 rounded text-green-600 hover:bg-green-50 transition-colors" title="Approve">
              <CheckCircle size={18} />
            </button>
            <button 
              onClick={() => handleAction(row.id, 'Reject')}
              className="p-1 rounded text-red-600 hover:bg-red-50 transition-colors" title="Reject">
              <XCircle size={18} />
            </button>
          </>
        )}
      </div>
    )},
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-bank-dark">Deposit Reviews</h2>
        <p className="text-bank-textLight mt-1">Review and process customer deposit requests.</p>
      </div>

      <Card className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h3 className="text-lg font-bold text-bank-dark">Pending & Recent Requests</h3>
          <div className="flex gap-2">
             <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-bank-secondary">
               <option>All Statuses</option>
               <option>Pending</option>
               <option>Approved</option>
               <option>Rejected</option>
             </select>
          </div>
        </div>
        {loading ? (
          <div className="p-4 text-center">Loading requests...</div>
        ) : (
          <DataTable columns={columns} data={deposits} />
        )}
      </Card>
    </div>
  );
};

export default StaffDashboard;
