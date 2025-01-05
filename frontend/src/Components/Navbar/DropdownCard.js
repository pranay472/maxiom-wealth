import React from 'react';

const DropdownCard = ({ icon, title, subItems, onClick }) => {
  return (
    <div className="dropdown-card">
      <div className="card-header">
        <img src={icon} alt={title} className="card-icon" />
        <h4 className="card-title">{title}</h4>
      </div>
      {subItems && (
        <div className="card-subitems">
          {subItems.map((item, index) => (
            <button key={index} className="subitem" onClick={() => onClick && onClick(item)}>
              {item.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownCard;
