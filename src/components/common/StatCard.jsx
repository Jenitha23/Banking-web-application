import React from 'react';
import Card from './Card';

const StatCard = ({ title, value, icon: Icon, trend }) => {
  return (
    <Card className="p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-full bg-bank-secondary/20 flex items-center justify-center text-bank-dark">
          {Icon && <Icon size={24} />}
        </div>
        {trend && (
          <span className={`text-sm font-semibold ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <div>
        <h3 className="text-bank-textLight text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold text-bank-dark">{value}</p>
      </div>
    </Card>
  );
};

export default StatCard;
