import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import authService from '../api/authService';

const AuthContext = createContext(null);

/**
 * Custom hook for consuming AuthContext.
 * Throws if used outside <AuthProvider>.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

/**
 * AuthProvider — wraps the app and provides authentication state + actions.
 *
 * State exposed:
 *   user, token, role, isAuthenticated, loading
 *
 * Actions exposed:
 *   login(), register(), logout(), checkAuth()
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Derived state
  const role = user?.role || null;
  const isAuthenticated = !!token && !!user;

  // ── Persist auth data to localStorage ─────────────────────
  const saveAuth = (authData) => {
    const { token: authToken, userId, fullName, email, role: userRole } = authData;

    localStorage.setItem('token', authToken);
    localStorage.setItem('user', JSON.stringify({ userId, fullName, email, role: userRole }));

    setToken(authToken);
    setUser({ userId, fullName, email, role: userRole });
  };

  const clearAuth = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  // ── Login ─────────────────────────────────────────────────
  const login = async (credentials) => {
    const response = await authService.login(credentials);
    saveAuth(response.data);
    return response.data; // caller uses role for redirect
  };

  // ── Register ──────────────────────────────────────────────
  const register = async (data) => {
    const response = await authService.register(data);
    saveAuth(response.data);
    return response.data;
  };

  // ── Logout ────────────────────────────────────────────────
  const logout = () => {
    clearAuth();
  };

  // ── Check Auth on Mount ───────────────────────────────────
  // Validates the stored token by calling GET /users/me.
  // If the token is expired or invalid, we clear it silently.
  const checkAuth = useCallback(async () => {
    const storedToken = localStorage.getItem('token');

    if (!storedToken) {
      setLoading(false);
      return;
    }

    try {
      const currentUser = await authService.getCurrentUser();
      setUser({
        userId: currentUser.id,
        fullName: currentUser.fullName,
        email: currentUser.email,
        role: currentUser.role,
      });
      setToken(storedToken);
    } catch {
      // Token expired or invalid — clear everything silently
      clearAuth();
    } finally {
      setLoading(false);
    }
  }, []);

  // Verify authentication status on initial mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const value = {
    user,
    token,
    role,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
