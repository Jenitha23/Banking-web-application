export const mockUser = {
  id: 'usr_123',
  name: 'John Doe',
  email: 'john.doe@example.com',
  accountNumber: '1004567890',
  balance: 15420.50,
  status: 'active',
  role: 'customer'
};

export const mockTransactions = [
  {
    id: 'tx_001',
    date: '2026-04-10T10:30:00Z',
    type: 'deposit',
    amount: 5000,
    status: 'completed',
    reference: 'Salary'
  },
  {
    id: 'tx_002',
    date: '2026-04-09T14:20:00Z',
    type: 'withdrawal',
    amount: -120.50,
    status: 'completed',
    reference: 'Grocery'
  },
  {
    id: 'tx_003',
    date: '2026-04-08T09:15:00Z',
    type: 'transfer',
    amount: -500,
    status: 'completed',
    reference: 'Rent Payment'
  }
];

export const mockDepositRequests = [
  {
    id: 'dep_001',
    userId: 'usr_123',
    customerName: 'John Doe',
    amount: 1000,
    date: '2026-04-11T09:00:00Z',
    status: 'pending',
    evidenceUrl: 'mock_evidence_1.jpg'
  },
  {
    id: 'dep_002',
    userId: 'usr_456',
    customerName: 'Alice Smith',
    amount: 2500,
    date: '2026-04-11T08:30:00Z',
    status: 'approved',
    evidenceUrl: 'mock_evidence_2.jpg'
  },
  {
    id: 'dep_003',
    userId: 'usr_789',
    customerName: 'Bob Johnson',
    amount: 50000,
    date: '2026-04-10T15:45:00Z',
    status: 'rejected',
    evidenceUrl: 'mock_evidence_3.jpg'
  }
];

export const mockUsersList = [
  {
    id: 'usr_123',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'customer',
    status: 'active',
    joinedDate: '2025-01-15'
  },
  {
    id: 'usr_456',
    name: 'Alice Smith',
    email: 'alice@example.com',
    role: 'customer',
    status: 'active',
    joinedDate: '2025-06-20'
  },
  {
    id: 'usr_999',
    name: 'Staff Member 1',
    email: 'staff1@bank.com',
    role: 'staff',
    status: 'active',
    joinedDate: '2024-11-01'
  }
];
