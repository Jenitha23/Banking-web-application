import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';
import { Wallet } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('customer');

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'admin') navigate('/admin');
    else if (role === 'staff') navigate('/staff');
    else navigate('/customer');
  };

  return (
    <div className="min-h-screen bg-bank-light flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-bank-dark text-white p-3 rounded-2xl">
              <Wallet size={32} />
            </div>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-bank-dark">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="py-8 px-6 sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <FormInput label="Email address" id="email" type="email" required placeholder="you@example.com" />
            <FormInput label="Password" id="password" type="password" required placeholder="••••••••" />
            
            <div>
              <label className="text-sm font-medium text-bank-text mb-2 block">Login As (Demo)</label>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bank-secondary"
              >
                <option value="customer">Customer</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-bank-secondary focus:ring-bank-secondary" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-bank-textLight">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-bank-secondary hover:text-bank-primary">Forgot password?</a>
              </div>
            </div>

            <Button type="submit" className="w-full shadow-lg shadow-bank-secondary/30 text-white bg-bank-dark hover:bg-bank-primary">
              Sign in
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-bank-textLight">Don't have an account?</span>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/register">
                <Button variant="outline" className="w-full bg-white">
                  Create new account
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
