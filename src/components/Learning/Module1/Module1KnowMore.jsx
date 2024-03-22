import React from 'react';
import './Module1KnowMore.css'; // Import the CSS file with the improved styles
import { NavLink } from 'react-router-dom';

const Module1KnowMore = () => {
  // Module data
  const moduleInfo = {
    title: "Module I: Securities Foundation",
    description: "This module aims to communicate basic knowledge of the Indian securities markets to the readers and all related rules and regulations. It also covers the crucial steps in the financial planning process.",
    objectives: [
      "Introduce the Indian securities market.",
      "Detail the various rules and regulations governing the market.",
      "Outline the steps in the financial planning process.",
    ],
    chapters: [
      { name: "Chapter 1: Introduction to Securities Market", completed: true },
      { name: "Chapter 2: Market Regulations", completed: false },
      { name: "Chapter 3: Financial Planning", completed: true },
    ]
  };

  return (
    <div className="module-detail-container">
      <div className="module-details">
        <h1>{moduleInfo.title}</h1>
        <p>{moduleInfo.description}</p>
      </div>
      <div className="chapters-objectives">
        <div className="chapters">
          <h2>Chapters</h2>
          <ol>
            {moduleInfo.chapters.map((chapter, index) => (
              <li key={index}>
                {chapter.completed && (
                  <span className="tick-mark">&#10003;</span>
                )}
                {chapter.name}
                <NavLink to={`/module1-chap${index + 1}`}>
                  <button className="start-button">Start</button>
                </NavLink>
              </li>
            ))}
          </ol>
        </div>
        <div className="objectives">
          <h2>Objectives</h2>
          <ul>
            {moduleInfo.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Module1KnowMore;
