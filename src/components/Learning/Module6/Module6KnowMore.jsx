import React from 'react';
import './Module6KnowMore.css';
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
        <NavLink to="/module6-chap1">
          <button className="start-button">View module</button>
        </NavLink>
      </div>
    </div>
  );
};

const Module6KnowMore = () => (
  <div className="container">
    <div className="cover-image-container">
      <img src="/images/stock1_cover.png" alt="Cover Image" />
    </div>
    <ModuleBox
      title="Introduction to Fixed Income Investments"
      description="Learn about the basics of fixed income investments and their types"
      progress={20}
    />
    <ModuleBox
      title="Benefits of Fixed Income Investments"
      description="Understand the benefits of investing in fixed income securities"
      progress={100}
    />
    <ModuleBox
      title="Types of Fixed Income Investments"
      description="Learn about the different types of fixed income investments"
      progress={40}
    />
    <ModuleBox
      title="Risks of Fixed Income Investments"
      description="Understand the potential risks with fixed income investments"
      progress={40}
    />
  </div>
);

export default Module6KnowMore;