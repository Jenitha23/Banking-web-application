import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="relative z-50 w-full pt-8 pb-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group ml-6 md:ml-12">
          <div className="bg-gradient-to-tr from-bank-secondary to-bank-accent text-bank-dark p-2.5 rounded-2xl shadow-lg shadow-bank-secondary/30 group-hover:scale-105 transition-transform duration-300">
            <Home size={24} className="stroke-[2.5]" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-white">Lanka<span className="text-bank-secondary">Bank</span></span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">Home</Link>
          <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">About us</Link>
          <Link to="/services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">Services</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">Contact</Link>
        </div>

        {/* Action Button */}
        <div className="hidden md:block mr-6 md:mr-12">
          <Link to="/login">
            <Button variant="primary" className="text-sm bg-bank-secondary/90 backdrop-blur-md border border-bank-accent/30 text-bank-dark hover:bg-bank-accent shadow-lg shadow-bank-secondary/20 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300">
              Access Account
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
