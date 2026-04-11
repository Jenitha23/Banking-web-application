import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';
import { Wallet } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/login');
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
          Create an account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="py-8 px-6 sm:px-10">
          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="grid grid-cols-2 gap-4">
               <FormInput label="First Name" id="firstName" required placeholder="John" />
               <FormInput label="Last Name" id="lastName" required placeholder="Doe" />
            </div>
            <FormInput label="Email address" id="email" type="email" required placeholder="you@example.com" />
            <FormInput label="Password" id="password" type="password" required placeholder="••••••••" />
            <FormInput label="Confirm Password" id="confirmPassword" type="password" required placeholder="••••••••" />
            
            <Button type="submit" className="w-full text-white bg-bank-dark hover:bg-bank-primary">
              Register Account
            </Button>
          </form>

          <div className="mt-6 text-center">
             <span className="text-sm text-bank-textLight">Already have an account? </span>
             <Link to="/login" className="text-sm font-medium text-bank-secondary hover:text-bank-primary">Sign in</Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;
