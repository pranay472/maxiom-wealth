import React from 'react';

const DropdownCard = ({ icon, title, description, onClick }) => {
  return (
    <div className="dropdown-card" onClick={onClick}>
      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DropdownCard;
