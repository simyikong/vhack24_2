import React from 'react';
import './Module1KnowMore.css';
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
        <NavLink to="/module1-chap1">
          <button className="start-button">View module</button>
        </NavLink>
      </div>
    </div>
  );
};

const Module1KnowMore = () => (
  <div className="container">
    <div className="cover-image-container">
      <img src="/images/module_cover.jpg" alt="Cover Image" />
    </div>
    <ModuleBox
      title="Shariah Equities"
      description="Learn more about Shariah-compliant trading and investing"
      progress={20}
    />
    <ModuleBox
      title="Shariah Derivatives"
      description="Learn more about Shariah-compliant derivatives products"
      progress={100}
    />
    <ModuleBox
      title="Bursa Suq As-Sila’"
      description="Learn more about the commodity platform for Islamic Finance"
      progress={40}
    />
    <ModuleBox
      title="Islamic Social Finance"
      description="Learn more about the socioeconomic importance in Islamic Finance"
      progress={40}
    />
  </div>
);

export default Module1KnowMore;

