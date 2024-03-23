import React from 'react';
import './LearningPage.css'; // Assuming LearningPage.css is where you'll put your CSS
import { NavLink } from 'react-router-dom'; 

const ModuleBox = ({ title, description, progress, link }) => {
  const isCompleted = progress === 100;

  return (
    <div className={`module-box ${isCompleted ? 'completed' : ''}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button-container">
        <NavLink to={link}>
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
      link="/module2-knowmore"
    />
    <ModuleBox
      title="Derivatives"
      description="Enhance Your Trading Strategies by Cultivating Your Knowledge on Derivatives."
      link="/module3-knowmore"
    />
    <ModuleBox
      title="Shariah"
      description="Know More About Shariah-compliant Trading and Investing"
      link="/module1-knowmore"
    />
    <ModuleBox
      title="Sustainability"
      description="One Stop Portal for Corporate Governance, Sustainablitity & Responsible Investment"
      link="/module4-knowmore"
    />
    <ModuleBox
      title="Gold"
      description="From Saving to Investing"
      link="/module5-knowmore"
    />
    <ModuleBox
      title="Fixed Income"
      description="Stable Return Investment"
      link="/module6-knowmore"
    />
    <ModuleBox
      title="Funds"
      description="Learn About Fund Investing"
      link="/module7-knowmore"
    />
  </div>
);

export default Learning;
