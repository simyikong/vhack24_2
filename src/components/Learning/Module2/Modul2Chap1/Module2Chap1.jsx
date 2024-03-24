import React from 'react';
import './Module2Chap1.css'; // Import the CSS file with the improved styles
import { NavLink } from 'react-router-dom';

const Module2Chap1 = () => {
    const handleTestClick = () => {
        // Implement testing logic here
        alert('Testing knowledge...');
    };

    return (
        <div className="module1-chap1-container">
            <h1>Module 2: Equities</h1>

            <section className="section" id="section1-1">
                <h2>2.1 Introduction to Equities</h2>
                <p>Equities represent ownership interest in a company and constitute a claim on part of the company's assets and earnings. There are two main types of equities: common and preferred. Investing in equities can generate returns through capital gains and dividends.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Q1z395u60xU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-2">
                <h2>2.2 Key Principles of Investing in Equities</h2>
                <p>
                    1. Diversification: Don't put all your eggs in one basket. Diversify your portfolio across different companies, sectors, and geographical locations.

                    2. Long-Term Perspective: Investing in equities should be viewed as a long-term commitment. It's important to be patient and avoid panic selling during market downturns.

                    3. Regular Investing: Regularly investing a fixed amount can help average out the cost of equities over time, a strategy known as dollar-cost averaging.

                    4. Research: Before investing in a company, it's important to understand its business model, financial health, and the industry it operates in.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qIw-yFC-HNU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-4">
                <h2>2.3 Investment Strategies</h2>
                <p>Investors have a range of strategies when it comes to investing in equities, including:

                    1. Value Investing: This strategy involves buying stocks that appear to be undervalued by the market.

                    2. Growth Investing: Growth investors seek companies that offer strong growth potential.

                    3. Income Investing: This strategy focuses on stocks that provide regular income in the form of dividends.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PEPrpSCZkeU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-5">
                <h2>2.4 Conclusion</h2>
                <p>Investing in equities offers the potential for high returns but also comes with risks. It's important to do your research, diversify your portfolio, and consider your risk tolerance and investment goals when investing in equities.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pauNeCmWcVQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <button className="test-button" onClick={handleTestClick}>Test Knowledge</button>
        </div>
    );
};

export default Module2Chap1;

