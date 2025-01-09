import React from 'react';
import { Link } from 'react-router-dom';

const CalculatorCard = ({ title, description, Icon, path }) => {
  return (
    <Link 
      to={path} 
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform"
    >
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600 stroke-[1.5]" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

export default CalculatorCard;
