import React from 'react';
import './Module5KnowMore.css';
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

const Module5KnowMore = () => (
  <div className="container">
    <div className="cover-image-container">
      <img src="/images/gold_cover.jpeg" alt="Cover Image" />
    </div>
    <ModuleBox
      title="Introduction to Gold"
      description="Learn about the history and value of gold as an asset"
      progress={20}
    />
    <ModuleBox
      title="Saving in Gold"
      description="Understand how gold can be a secure way to protect your wealth"
      progress={100}
    />
    <ModuleBox
      title="Investing in Gold"
      description="Gold, gold ETFs, gold mining stocks, and gold futures"
      progress={40}
    />
    <ModuleBox
      title="Risks and Rewards of Gold Investment"
      description="Understand the potential risks and rewards of investing in gold"
      progress={40}
    />
  </div>
);

export default Module5KnowMore;

