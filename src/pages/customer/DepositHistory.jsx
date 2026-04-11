import React, { useEffect, useState } from 'react';
import Card from '../../components/common/Card';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { transactionService } from '../../services/api';

const DepositHistory = () => {
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        const data = await transactionService.getDepositHistory();
        setDeposits(data);
      } catch (error) {
        console.error('Failed to fetch deposits', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDeposits();
  }, []);

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Date', render: (row) => new Date(row.date).toLocaleDateString() },
    { header: 'Amount', render: (row) => <span className="text-green-600">+${Math.abs(row.amount).toFixed(2)}</span> },
    { header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-bank-dark">Deposit History</h2>
        <p className="text-bank-textLight mt-1">Track the status of your deposit requests.</p>
      </div>

      <Card className="p-6">
        {loading ? (
          <div className="p-4 text-center">Loading deposits...</div>
        ) : (
          <DataTable columns={columns} data={deposits} />
        )}
      </Card>
    </div>
  );
};

export default DepositHistory;
