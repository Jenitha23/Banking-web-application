import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Home, Mail, Lock, User, Eye, EyeOff, ArrowRight, Shield, CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * Register Page — LankaBank blue & gold premium theme.
 *
 * Calls the real backend via AuthContext.register().
 * On success, auto-logs the user in and redirects to customer dashboard.
 * Validates password match on the client before calling the API.
 */
const Register = () => {
  const navigate = useNavigate();
  const { register: registerUser, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Already authenticated? Redirect away.
  if (isAuthenticated) {
    navigate('/customer/dashboard', { replace: true });
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  // ── Client-side validation ────────────────────────────────
  const validate = () => {
    if (!formData.fullName.trim()) {
      setError('Full name is required.');
      return false;
    }
    if (formData.fullName.trim().length < 2) {
      setError('Full name must be at least 2 characters.');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required.');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validate()) return;

    setLoading(true);
    try {
      const userData = await registerUser({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      // After registration, redirect based on role (usually Customer)
      const destination = getDashboardByRole(userData.role);
      navigate(destination, { replace: true });
    } catch (err) {
      let message = 'Registration failed. Please try again.';

      if (!err.response) {
        // Network error — backend not running or unreachable
        message = 'Unable to connect to the server. Please make sure the backend is running.';
      } else {
        const data = err.response.data;
        if (data?.message) {
          message = data.message;
        } else if (data?.errors) {
          // ASP.NET model validation: { errors: { FullName: ["..."], Email: ["..."] } }
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

  // Password strength indicators
  const passwordChecks = [
    { label: 'At least 6 characters', met: formData.password.length >= 6 },
    { label: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
    { label: 'Contains a number', met: /\d/.test(formData.password) },
    { label: 'Contains special character', met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password) },
  ];

  return (
    <div className="min-h-screen flex">
      {/* ── Left panel: decorative branding ─────────────── */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-bank-dark via-[#0d1f3c] to-[#0A1628] relative overflow-hidden items-center justify-center">
        {/* Animated background blurs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bank-secondary/15 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-bank-secondary/10 rounded-full blur-[100px]" />

        <div className="relative z-10 px-16 max-w-lg space-y-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-tr from-bank-secondary to-bank-accent text-bank-dark p-3 rounded-2xl shadow-lg shadow-bank-secondary/30 group-hover:scale-110 transition-transform duration-300">
              <Home size={28} className="stroke-[2.5]" />
            </div>
            <span className="font-bold text-3xl tracking-tight text-white">Lanka<span className="text-bank-secondary">Bank</span></span>
          </Link>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Start your journey to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-bank-secondary to-bank-accent">
                financial freedom.
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Join thousands of customers who trust LankaBank for secure,
              modern, and intelligent banking services.
            </p>
          </div>

          {/* Credit card visual */}
          <div className="relative">
            <img 
              src="/images/card-gold.png" 
              alt="LankaBank Gold Card" 
              className="w-64 rounded-xl shadow-2xl shadow-black/40 transform rotate-3 hover:rotate-0 transition-transform duration-500"
              style={{ animation: 'floatReverse 5s ease-in-out infinite' }}
            />
          </div>

          {/* Benefits list */}
          <div className="space-y-4">
            {[
              'No hidden fees, ever',
              'Instant account activation',
              '24/7 dedicated customer support',
              'Bank-grade AES-256 encryption',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <CheckCircle2 className="text-bank-secondary shrink-0" size={20} />
                <span className="text-gray-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right panel: register form ──────────────────── */}
      <div className="w-full lg:w-1/2 bg-bank-light flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-7">
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
            <h1 className="text-3xl font-bold text-bank-dark tracking-tight">Create Account</h1>
            <p className="mt-2 text-bank-textLight">
              Fill in the details below to open your LankaBank account
            </p>
          </div>

          {/* Error alert */}
          {error && (
            <div id="register-error" className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl animate-[slideDown_0.3s_ease-out]">
              <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-red-700 font-medium text-sm">Registration Error</p>
                <p className="text-red-600 text-sm mt-0.5">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="register-fullName" className="text-sm font-medium text-bank-text">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-bank-textLight" size={18} />
                <input
                  id="register-fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bank-secondary focus:border-transparent transition-all text-bank-text placeholder:text-gray-400"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="register-email" className="text-sm font-medium text-bank-text">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-bank-textLight" size={18} />
                <input
                  id="register-email"
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
              <label htmlFor="register-password" className="text-sm font-medium text-bank-text">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-bank-textLight" size={18} />
                <input
                  id="register-password"
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

              {/* Password strength indicators */}
              {formData.password.length > 0 && (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {passwordChecks.map((check, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full transition-colors ${check.met ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <span className={`text-xs transition-colors ${check.met ? 'text-green-600' : 'text-gray-400'}`}>
                        {check.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label htmlFor="register-confirmPassword" className="text-sm font-medium text-bank-text">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-bank-textLight" size={18} />
                <input
                  id="register-confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-12 py-3.5 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-bank-secondary focus:border-transparent transition-all text-bank-text placeholder:text-gray-400 ${
                    formData.confirmPassword && formData.password !== formData.confirmPassword
                      ? 'border-red-300 bg-red-50/50'
                      : formData.confirmPassword && formData.password === formData.confirmPassword
                      ? 'border-green-300 bg-green-50/50'
                      : 'border-gray-200'
                  }`}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-bank-textLight hover:text-bank-dark transition-colors"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                id="agree-terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-bank-secondary focus:ring-bank-secondary"
              />
              <label htmlFor="agree-terms" className="text-sm text-bank-textLight">
                I agree to the{' '}
                <button type="button" className="text-bank-secondary hover:text-bank-dark font-medium">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button type="button" className="text-bank-secondary hover:text-bank-dark font-medium">
                  Privacy Policy
                </button>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full flex items-center justify-center gap-2 px-6 py-4 bg-bank-dark text-white font-semibold rounded-xl shadow-lg shadow-bank-dark/20 hover:bg-bank-primary hover:shadow-xl hover:shadow-bank-primary/25 focus:outline-none focus:ring-2 focus:ring-bank-secondary focus:ring-offset-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-bank-dark group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Creating account…</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Sign-in link */}
          <p className="text-center text-sm text-bank-textLight">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-bank-secondary hover:text-bank-dark transition-colors"
            >
              Sign in
            </Link>
          </p>
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

export default Register;
