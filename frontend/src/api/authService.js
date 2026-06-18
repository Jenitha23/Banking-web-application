import apiClient from './apiClient';

/**
 * Authentication service — all auth-related API calls live here.
 * Components should never call Axios directly; they go through this layer.
 */
const authService = {
  /**
   * Register a new user account.
   * POST /api/auth/register
   * @param {{ fullName: string, email: string, password: string, confirmPassword: string }} data
   * @returns {Promise<{ message: string, data: { token: string, userId: number, fullName: string, email: string, role: string } }>}
   */
  register: async (data) => {
    const response = await apiClient.post('/auth/register', data);
    return response.data;
  },

  /**
   * Log in with existing credentials.
   * POST /api/auth/login
   * @param {{ email: string, password: string }} credentials
   * @returns {Promise<{ message: string, data: { token: string, userId: number, fullName: string, email: string, role: string } }>}
   */
  login: async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  },

  /**
   * Fetch the currently authenticated user's profile.
   * GET /api/users/me  (requires Bearer token)
   * @returns {Promise<{ id: number, fullName: string, email: string, role: string, isActive: boolean }>}
   */
  getCurrentUser: async () => {
    const response = await apiClient.get('/users/me');
    return response.data;
  },
};

export default authService;
