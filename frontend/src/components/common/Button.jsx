import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-bank-secondary text-bank-dark hover:bg-bank-accent shadow-lg shadow-bank-secondary/20",
    dark: "bg-bank-dark text-white hover:bg-bank-primary",
    outline: "border-2 border-bank-secondary text-bank-secondary hover:bg-bank-secondary hover:text-bank-dark",
    ghost: "text-bank-textLight hover:text-bank-dark",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
