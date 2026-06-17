// This file serves as a placeholder for actual API calls
import { mockUser, mockTransactions, mockDepositRequests, mockUsersList } from '../mocks/data';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const authService = {
  login: async (credentials) => {
    await delay(800);
    return { token: 'mock-jwt-token', user: mockUser };
  },
  logout: async () => {
    await delay(300);
    return true;
  },
  register: async (data) => {
    await delay(1000);
    return { success: true };
  }
};

export const userService = {
  getProfile: async () => {
    await delay(500);
    return mockUser;
  },
  getAllUsers: async () => {
    await delay(600);
    return mockUsersList;
  }
};

export const transactionService = {
  getTransactions: async () => {
    await delay(600);
    return mockTransactions;
  },
  getDepositHistory: async () => {
    await delay(500);
    return mockDepositRequests.filter(req => req.userId === mockUser.id);
  },
  getAllDepositRequests: async () => {
    await delay(600);
    return mockDepositRequests;
  },
  submitDeposit: async (data) => {
    await delay(1000);
    return { success: true, message: 'Deposit request submitted successfully' };
  },
  updateDepositStatus: async (id, status) => {
    await delay(800);
    return { success: true, message: `Deposit ${status}` };
  }
};
