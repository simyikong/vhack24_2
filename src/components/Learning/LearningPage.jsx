import React from 'react';
import './LearningPage.css'; // Assuming LearningPage.css is where you'll put your CSS
import { NavLink } from 'react-router-dom'; 

const ModuleBox = ({ title, description, progress }) => {
  const isCompleted = progress === 100;

  return (
    <div className={`module-box ${isCompleted ? 'completed' : ''}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button-container">
        <NavLink to="/module1-knowmore">
          <button className="button viewmodule">View module</button>
        </NavLink>
      </div>
    </div>
  );
};

const Learning = () => (
  <div className="container">
    <ModuleBox
      title="Equities"
      description="Learn All About Securities and How to Build a Diversified Investment Portfolio"
      
    />
    <ModuleBox
      title="Derivatives"
      description="Enhance Your Trading Strategies by Cultivating Your Knowledge on Derivatives."
    />
    <ModuleBox
      title="Shariah"
      description="Know More About Shariah-compliant Trading and Investing"
    />
    <ModuleBox
      title="Sustain"
      description="One Stop Portal for Corporate Governance, Sustainablitity & Responsible Investment"
    />
    <ModuleBox
      title="Gold"
      description="From Saving to Investing"
    />
    <ModuleBox
      title="Fixed Income"
      description="Stable Return Investment"
    />
    <ModuleBox
      title="Funds"
      description="Learn About Fund Investing"
    />
  </div>
);

export default Learning;
