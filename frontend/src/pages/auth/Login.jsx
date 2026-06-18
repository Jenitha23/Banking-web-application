import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Home, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, AlertCircle } from 'lucide-react';

/**
 * Login Page — LankaBank blue & gold premium theme.
 *
 * Calls the real backend via AuthContext.login().
 * On success, redirects the user based on their role.
 * Preserves and restores the originally-intended URL if they were
 * redirected here by ProtectedRoute.
 */
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated, role } = useAuth();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Where to go after successful login
  const from = location.state?.from?.pathname;

  // If already logged in, redirect immediately
  if (isAuthenticated && role) {
    const dest = from || getDashboardByRole(role);
    navigate(dest, { replace: true });
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(''); // clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userData = await login({
        email: formData.email,
        password: formData.password,
      });

      // Navigate based on role
      const destination = from || getDashboardByRole(userData.role);
      navigate(destination, { replace: true });
    } catch (err) {
      let message = 'Login failed. Please check your credentials and try again.';

      if (!err.response) {
        // Network error — backend not running or unreachable
        message = 'Unable to connect to the server. Please make sure the backend is running.';
      } else {
        const data = err.response.data;
        if (data?.message) {
          message = data.message;
        } else if (data?.errors) {
          // ASP.NET model validation: { errors: { Email: ["..."], Password: ["..."] } }
          const allErrors = Object.values(data.errors).flat();
          if (allErrors.length > 0) message = allErrors[0];
        } else if (data?.title) {
          message = data.title;
        }
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* ── Left panel: decorative branding ─────────────── */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-bank-dark via-[#0d1f3c] to-[#0A1628] relative overflow-hidden items-center justify-center">
        {/* Animated background effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-bank-secondary/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-bank-secondary/10 rounded-full blur-[100px]" />

        <div className="relative z-10 px-16 max-w-lg space-y-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-tr from-bank-secondary to-bank-accent text-bank-dark p-3 rounded-2xl shadow-lg shadow-bank-secondary/30 group-hover:scale-110 transition-transform duration-300">
              <Home size={28} className="stroke-[2.5]" />
            </div>
            <span className="font-bold text-3xl tracking-tight text-white">Lanka<span className="text-bank-secondary">Bank</span></span>
          </Link>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Welcome back to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-bank-secondary to-bank-accent">
                premium banking.
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Access your accounts, manage your finances, and experience banking
              designed for the digital age.
            </p>
          </div>

          {/* Credit card promo */}
          <div className="relative">
            <img 
              src="/images/card-blue.png" 
              alt="LankaBank Premium Card" 
              className="w-64 rounded-xl shadow-2xl shadow-black/40 transform -rotate-6 hover:rotate-0 transition-transform duration-500"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
          </div>

          <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-bank-secondary/20 flex items-center justify-center shrink-0">
              <Shield className="text-bank-secondary" size={24} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Bank-Grade Security</p>
              <p className="text-gray-400 text-xs mt-0.5">256-bit AES encryption protects every transaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right panel: login form ─────────────────────── */}
      <div className="w-full lg:w-1/2 bg-bank-light flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-bank-dark to-bank-primary text-bank-secondary p-3 rounded-2xl">
                <Home size={28} />
              </div>
              <span className="font-bold text-2xl text-bank-dark">Lanka<span className="text-bank-secondary">Bank</span></span>
            </Link>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-bank-dark tracking-tight">Sign in</h1>
            <p className="mt-2 text-bank-textLight">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Error alert */}
          {error && (
            <div id="login-error" className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl animate-[slideDown_0.3s_ease-out]">
              <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-red-700 font-medium text-sm">Authentication Failed</p>
                <p className="text-red-600 text-sm mt-0.5">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="login-email" className="text-sm font-medium text-bank-text">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-bank-textLight" size={18} />
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bank-secondary focus:border-transparent transition-all text-bank-text placeholder:text-gray-400"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="login-password" className="text-sm font-medium text-bank-text">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-bank-textLight" size={18} />
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bank-secondary focus:border-transparent transition-all text-bank-text placeholder:text-gray-400"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-bank-textLight hover:text-bank-dark transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-bank-secondary focus:ring-bank-secondary"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-bank-textLight">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-sm font-medium text-bank-secondary hover:text-bank-dark transition-colors">
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full flex items-center justify-center gap-2 px-6 py-4 bg-bank-dark text-white font-semibold rounded-xl shadow-lg shadow-bank-dark/20 hover:bg-bank-primary hover:shadow-xl hover:shadow-bank-primary/25 focus:outline-none focus:ring-2 focus:ring-bank-secondary focus:ring-offset-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-bank-dark group overflow-hidden"
            >
              {/* Shine animation on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in…</span>
                </>
              ) : (
                <>
                  <span>Sign in</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-bank-light px-4 text-bank-textLight">Don't have an account?</span>
            </div>
          </div>

          {/* Register CTA */}
          <Link to="/register">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-gray-200 text-bank-dark font-semibold rounded-xl hover:border-bank-secondary hover:bg-bank-secondary/5 transition-all duration-300">
              Create new account
              <ArrowRight size={16} className="text-bank-secondary" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

/** Maps backend role strings to their dashboard URLs */
function getDashboardByRole(role) {
  switch (role) {
    case 'Admin':
      return '/admin/dashboard';
    case 'Staff':
      return '/staff/dashboard';
    case 'Customer':
    default:
      return '/customer/dashboard';
  }
}

export default Login;
