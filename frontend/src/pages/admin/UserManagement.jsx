import React, { useEffect, useState } from 'react';
import Card from '../../components/common/Card';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import Button from '../../components/common/Button';
import { userService } from '../../services/api';
import { Edit2, Trash2 } from 'lucide-react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userService.getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', render: (row) => <span className="capitalize">{row.role}</span> },
    { header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
    { header: 'Joined', accessor: 'joinedDate' },
    { header: 'Actions', render: (row) => (
      <div className="flex items-center gap-2">
        <button className="p-1 rounded text-blue-600 hover:bg-blue-50 transition-colors" title="Edit">
          <Edit2 size={18} />
        </button>
        <button className="p-1 rounded text-red-600 hover:bg-red-50 transition-colors" title="Delete">
          <Trash2 size={18} />
        </button>
      </div>
    )}
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-bank-dark">User Management</h2>
          <p className="text-bank-textLight mt-1">Manage users, their roles and access levels.</p>
        </div>
        <Button>Add New User</Button>
      </div>

      <Card className="p-6">
        {loading ? (
          <div className="p-4 text-center">Loading users...</div>
        ) : (
          <DataTable columns={columns} data={users} />
        )}
      </Card>
    </div>
  );
};

export default UserManagement;
