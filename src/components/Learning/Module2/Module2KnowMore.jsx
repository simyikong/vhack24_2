import React from 'react';
import './Module2KnowMore.css';
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
        <NavLink to="/module2-chap1">
          <button className="start-button">View module</button>
        </NavLink>
      </div>
    </div>
  );
};

const Module2KnowMore = () => (
  <div className="container">
    <div className="cover-image-container">
      <img src="/images/stock2_cover.jpeg" alt="Cover Image" />
    </div>
    <ModuleBox
      title="Equities Basics"
      description="Learn more about the basics of trading and investing in equities"
      progress={20}
    />
    <ModuleBox
      title="Equity Derivatives"
      description="Learn more about derivatives products related to equities"
      progress={100}
    />
    <ModuleBox
      title="Equity Markets"
      description="Learn more about the different equity markets around the world"
      progress={40}
    />
    <ModuleBox
      title="Equity Analysis"
      description="Learn more about the techniques for analyzing equities"
      progress={40}
    />
  </div>
);

export default Module2KnowMore;

