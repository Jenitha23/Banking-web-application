import React from 'react';

const StatusBadge = ({ status }) => {
  const getStyles = () => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'approved':
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
      case 'failed':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStyles()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
