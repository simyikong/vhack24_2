import React from 'react';
import './LearningPage.css'; // Assuming styles.css is where you'll put your CSS

const ModuleBox = ({ title, description }) => (
  <div className="module-box">
    <h2>{title}</h2>
    <p>{description}</p>
    <div className="button-container">
      <button>Know more</button>
      <button>Take a test</button>
    </div>
  </div>
);

const Learning = () => (
  <div className="container">
    <ModuleBox
      title="Module I: Securities Foundation"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <ModuleBox
      title="Module II: Equity Derivatives"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <ModuleBox
      title="Module III: Currency Derivatives"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <ModuleBox
      title="Module IV: Mutual Funds Distributors"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <ModuleBox
      title="Module V: Investment Advisors"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <ModuleBox
      title="Module VI: Research Analyst"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  </div>
);

export default Learning;
