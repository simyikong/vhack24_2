import React from 'react';
import './LearningPage.css'; // Assuming LearningPage.css is where you'll put your CSS
import { NavLink } from 'react-router-dom'; 

const ModuleBox = ({ title, description, progress, link, colorClass }) => {
  const isCompleted = progress === 100;

  return (
    <div className={`module-box ${colorClass} ${isCompleted ? 'completed' : ''}`}>
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
      title="Shariah"
      description="Know More About Shariah-compliant Trading and Investing"
      link="/module1-knowmore"
      colorClass="pink-baby-color"
    />
    <ModuleBox
      title="Equities"
      description="Learn All About Securities and How to Build a Diversified Investment Portfolio"
      link="/module2-knowmore"
      colorClass="blue-baby-color"
    />
    <ModuleBox
      title="Derivatives"
      description="Enhance Your Trading Strategies by Cultivating Your Knowledge on Derivatives."
      link="/module3-knowmore"
      colorClass="yellow-baby-color"
    />
    <ModuleBox
      title="Sustainability"
      description="One Stop Portal for Corporate Governance, Sustainability & Responsible Investment"
      link="/module4-knowmore"
      colorClass="green-baby-color"
    />
    <ModuleBox
      title="Gold"
      description="From Saving to Investing"
      link="/module5-knowmore"
      colorClass="purple-baby-color"
    />
    <ModuleBox
      title="Fixed Income"
      description="Stable Return Investment"
      link="/module6-knowmore"
      colorClass="orange-baby-color"
    />
    <ModuleBox
      title="Funds"
      description="Learn About Fund Investing"
      link="/module7-knowmore"
      colorClass="teal-baby-color"
    />
  </div>
);

export default Learning;
