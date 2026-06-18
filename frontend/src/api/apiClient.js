import axios from 'axios';

/**
 * Axios instance pre-configured with:
 * - Base URL from environment variable
 * - Automatic JWT token attachment via request interceptor
 * - Global 401 handling via response interceptor (excluding auth endpoints)
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ── Request Interceptor ──────────────────────────────────────
// Attaches JWT token to every outgoing request automatically
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response Interceptor ─────────────────────────────────────
// Handles 401 Unauthorized globally — clears stale auth and
// redirects to login so the user can re-authenticate.
//
// IMPORTANT: Auth endpoints (/auth/login, /auth/register) are excluded
// because a 401 on login is an expected "bad credentials" response,
// not a stale session. We let the Login component handle that error.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const requestUrl = error.config?.url || '';

      // Don't auto-redirect for auth endpoints — let the component handle the error
      const isAuthEndpoint =
        requestUrl.includes('/auth/login') ||
        requestUrl.includes('/auth/register');

      if (!isAuthEndpoint) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Only redirect if we're not already on /login to avoid loops
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
