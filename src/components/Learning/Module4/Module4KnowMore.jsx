import React from 'react';
import './Module4KnowMore.css';
import { NavLink } from 'react-router-dom'; 

const ModuleBox = ({ title, description, progress }) => {
  const isCompleted = progress === 100;

  return (
    <div className={`module-box ${isCompleted ? 'completed' : ''}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="button-container">
        <NavLink to="/module4-chap1">
          <button className="start-button">View module</button>
        </NavLink>
      </div>
    </div>
  );
};

const Module4KnowMore = () => (
  <div className="container">
    <div className="cover-image-container">
      <img src="/images/sustain_cover.png" alt="Cover Image" />
    </div>
    <ModuleBox
      title="Corporate Governance"
      description="Learn about company rules and processes"
      progress={20}
    />
    <ModuleBox
      title="Sustainability in Business"
      description="Understand long-term value and environmental interaction"
      progress={100}
    />
    <ModuleBox
      title="Responsible Investment"
      description="Learn about financial and sustainable value generation"
      progress={40}
    />
    <ModuleBox
      title="Sustainability Reporting"
      description="Understand accountability towards sustainable development"
      progress={40}
    />
  </div>
);

export default Module4KnowMore;

