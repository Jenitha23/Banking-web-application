import React from 'react';

const FormInput = ({ label, id, type = 'text', className = '', ...props }) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-bank-text">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bank-secondary focus:border-transparent transition-all"
        {...props}
      />
    </div>
  );
};

export default FormInput;
