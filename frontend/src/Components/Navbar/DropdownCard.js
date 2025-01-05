import React from 'react';

const DropdownCard = ({ title, subItems, onClick }) => {
  return (
    <div className="dropdown-card">
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
      </div>
      {subItems && (
        <div className="card-subitems">
          {subItems.map((item, index) => (
            <button 
              key={index} 
              className="subitem slide-in"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => onClick && onClick(item)}
            >
              {item.icon && <img src={item.icon} alt="" className="subitem-icon" />}
              {item.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownCard;
