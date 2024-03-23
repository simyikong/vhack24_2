import React from 'react';
import './Module3KnowMore.css';
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
        <NavLink to="/module3-chap1">
          <button className="start-button">View module</button>
        </NavLink>
      </div>
    </div>
  );
};

const Module3KnowMore = () => (
  <div className="container">
    <div className="cover-image-container">
      <img src="/images/deriv_cover.jpg" alt="Cover Image" />
    </div>
    <ModuleBox
      title="Introduction to Derivatives"
      description="Learn about the basics of derivatives and their types"
      progress={20}
    />
    <ModuleBox
      title="Trading Derivatives"
      description="Understand how to trade derivatives and strategies involved"
      progress={100}
    />
    <ModuleBox
      title="Risk Management with Derivatives"
      description="Learn how derivatives can be used for managing risk"
      progress={40}
    />
    <ModuleBox
      title="Regulation of Derivatives"
      description="Understand the legal and regulatory aspects of derivatives"
      progress={40}
    />
  </div>
);

export default Module3KnowMore;

