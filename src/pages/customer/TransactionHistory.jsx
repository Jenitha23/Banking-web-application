import React, { useEffect, useState } from 'react';
import Card from '../../components/common/Card';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { transactionService } from '../../services/api';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await transactionService.getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Failed to fetch transactions', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Date', render: (row) => new Date(row.date).toLocaleDateString() },
    { header: 'Type', accessor: 'type', render: (row) => <span className="capitalize">{row.type}</span> },
    { header: 'Amount', render: (row) => <span className={row.amount > 0 ? 'text-green-600' : 'text-red-600'}>{row.amount > 0 ? '+' : ''}${Math.abs(row.amount).toFixed(2)}</span> },
    { header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
    { header: 'Reference', accessor: 'reference' }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-bank-dark">Transaction History</h2>
        <p className="text-bank-textLight mt-1">View all your past transactions.</p>
      </div>

      <Card className="p-6">
        {loading ? (
          <div className="p-4 text-center">Loading transactions...</div>
        ) : (
          <DataTable columns={columns} data={transactions} />
        )}
      </Card>
    </div>
  );
};

export default TransactionHistory;
