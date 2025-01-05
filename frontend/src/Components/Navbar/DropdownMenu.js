import React from 'react';
import DropdownCard from './DropdownCard';

const DropdownMenu = ({ items, onItemClick }) => {
  const gridClass = items.length === 3 ? 'three-items' : 'two-items';
  
  return (
    <div className="card-style-dropdown">
      <div className={`dropdown-grid ${gridClass}`}>
        {items.map((item, index) => (
          <DropdownCard
            key={index}
            title={item.title}
            subItems={item.subItems}
            onClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
