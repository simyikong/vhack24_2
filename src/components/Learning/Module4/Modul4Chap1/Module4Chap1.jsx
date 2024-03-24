import React from 'react';
import './Module4Chap1.css'; // Import the CSS file with the improved styles
import { NavLink } from 'react-router-dom';

const Module4Chap1 = () => {
    const handleTestClick = () => {
        // Implement testing logic here
        alert('Testing knowledge...');
    };

    return (
        <div className="module1-chap1-container">
            <h1>Module 4: Sustainability</h1>

            <section className="section" id="section1-1">
                <h2>4.1 Introduction to Sustainability in Business</h2>
                <p>Sustainability in business refers to the practice of conducting business without negatively impacting the environment, community, or society as a whole. This involves implementing strategies that drive economic growth, while improving the quality of life for all stakeholders, and preserving the environment.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ecGzrUHFJpg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-2">
                <h2>4.2 Corporate Governance and Sustainability</h2>
                <p>
                    Corporate governance plays a crucial role in sustainability. Good corporate governance ensures that companies are managed in a way that is ethical, socially responsible, and aligned with long-term shareholder interests. This includes transparency, accountability, and consideration of stakeholders in decision making.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QNYMsCpX7Rw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-3">
                <h2>4.3 Responsible Investment</h2>
                <p>Responsible investment is an approach to investing that includes environmental, social, and governance (ESG) factors in investment decisions. This approach aims to generate sustainable, long-term returns and reduce risk.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/L0DL1A1aG2c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-4">
                <h2>4.4 Sustainability Reporting</h2>
                <p>Sustainability reporting is the practice of measuring and disclosing a company's economic, environmental, and social impact. This helps stakeholders assess a company's performance and commitment to sustainable business practices.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oyMJQXLW_e8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-5">
                <h2>4.5 Conclusion</h2>
                <p>Sustainability in business is no longer a choice, but a necessity. It requires a commitment to ethical behavior, social responsibility, and long-term value creation. By integrating sustainability into their strategies, companies can achieve better growth and create value for all stakeholders.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7VJEPimye_E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <button className="test-button" onClick={handleTestClick}>Test Knowledge</button>
        </div>
    );
};

export default Module4Chap1;

