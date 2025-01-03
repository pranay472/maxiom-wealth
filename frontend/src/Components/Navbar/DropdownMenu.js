import React from 'react';
import DropdownCard from './DropdownCard';

const DropdownMenu = ({ items, onItemClick }) => {
  return (
    <div className="card-style-dropdown">
      <div className="dropdown-grid">
        {items.map((item, index) => (
          <DropdownCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            onClick={() => onItemClick && onItemClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
