import React from 'react';
import './Module7KnowMore.css';
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
        <NavLink to="/module7-chap1">
          <button className="start-button">View module</button>
        </NavLink>
      </div>
    </div>
  );
};

const Module7KnowMore = () => (
  <div className="container">
    <div className="cover-image-container">
      <img src="/images/funds_cover.jpeg" alt="Cover Image" />
    </div>
    <ModuleBox
      title="Introduction to Fund Investing"
      description="Learn about the basics of fund investing and their types"
      progress={20}
    />
    <ModuleBox
      title="Benefits of Fund Investing"
      description="Understand the benefits of investing in funds"
      progress={100}
    />
    <ModuleBox
      title="Types of Funds"
      description="Learn about the different types of funds"
      progress={40}
    />
    <ModuleBox
      title="Risks of Fund Investing"
      description="Understand the potential risks with fund investing"
      progress={40}
    />
  </div>
);

export default Module7KnowMore;