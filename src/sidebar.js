
import React from 'react';

const Sidebar = ({ title, description }) => {
  return (
    <div className="sidebar">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  );
};

export default Sidebar;
