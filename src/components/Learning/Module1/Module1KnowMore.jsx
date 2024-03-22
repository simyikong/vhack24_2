import React from 'react';
import './Module1KnowMore.css'; // Assuming LearningPage.css is where you'll put your CSS
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
    <div className="cover-image">
      <img src="path_to_your_image.jpg" alt="Cover Image" />
    </div>
    <ModuleBox
      title="Shariah Equities"
      description="Learn more about Shariah-compliant trading and investing"
      progress={20} // Example progress value
    />
    <ModuleBox
      title="Shariah Derivatives"
      description="Learn more about Shariah-compliant derivatives products"
      progress={100} // Example progress value indicating completion
    />
    <ModuleBox
      title="Bursa Suq As-Sila’"
      description="Learn more about the commodity platform for Islamic Finance"
      progress={40} // Example progress value
    />
    <ModuleBox
      title="Islamic Social Finance"
      description="Learn more about the socioeconomic importance in Islamic Financeyyy"
      progress={40} // Example progress value
    />
  </div>
);

export default Module1KnowMore;
