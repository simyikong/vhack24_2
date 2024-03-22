import React from 'react';
import './LearningPage.css'; // Assuming LearningPage.css is where you'll put your CSS
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
        <NavLink to="/module1-knowmore">
          <button className="button know-more">View module</button>
        </NavLink>
      </div>
    </div>
  );
};

const Learning = () => (
  <div className="container">
    <ModuleBox
      title="Module I: Securities Foundation"
      description="This module aims to communicate basic knowledge of the Indian securities markets to the readers and all related rules and regulations. It also covers the crucial steps in financial planning process."
      progress={20} // Example progress value
    />
    <ModuleBox
      title="Module II: Equity Derivatives"
      description="This module seeks to create a common minimum knowledge benchmark for associated persons functioning as approved users and sales personnel of the trading member of an equity derivatives exchange or equity derivative segment of a recognized stock exchange."
      progress={100} // Example progress value indicating completion
    />
    <ModuleBox
      title="Module III: Currency Derivatives"
      description="This module covers basics of the currency derivatives, trading strategies using currency futures and currency options, clearing, settlement and risk management as well as the regulatory requirements in which the currency derivatives markets function in India."
      progress={40} // Example progress value
    />
    {/* Include other ModuleBoxes similarly */}
  </div>
);

export default Learning;
