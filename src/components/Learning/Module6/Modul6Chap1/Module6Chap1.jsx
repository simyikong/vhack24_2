import React from 'react';
import './Module6Chap1.css'; // Import the CSS file with the improved styles
import { NavLink } from 'react-router-dom';

const Module6Chap1 = () => {
    const handleTestClick = () => {
        // Implement testing logic here
        alert('Testing knowledge...');
    };

    return (
        <div className="module6-chap1-container">
            <h1>Module 6: Fixed Income: Stable Return Investment</h1>

            <section className="section" id="section1-1">
                <h2>6.1 Introduction to Fixed Income Investments</h2>
                <p>Fixed income investments are a type of investment where the borrower or issuer is obliged to make payments of a fixed amount on a fixed schedule. This includes government and corporate bonds, certificates of deposit, and preferred stock.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mZ5d604Wl4I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-2">
                <h2>6.2 Benefits of Fixed Income Investments</h2>
                <p>
                    Fixed income investments provide a steady stream of income, making them a popular choice for conservative investors and retirees. They also help to diversify a portfolio and reduce risk.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EvMHwP-rXHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-3">
                <h2>6.3 Types of Fixed Income Investments</h2>
                <p>There are several types of fixed income investments, including government bonds, corporate bonds, municipal bonds, certificates of deposit, and preferred stock. Each type has its own risk and reward profile.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PHeckNZ6NOI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-4">
                <h2>6.4 Risks of Fixed Income Investments</h2>
                <p>While fixed income investments are generally considered less risky than stocks, they do carry some risks. These include interest rate risk, credit risk, and inflation risk.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/j9CuC2R8fb0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-5">
                <h2>6.5 Conclusion</h2>
                <p>Fixed income investments can provide a stable return and are an important part of a diversified portfolio. However, like all investments, it's important to understand the risks and rewards before investing.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/K5aahpY0URI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <button className="test-button" onClick={handleTestClick}>Test Knowledge</button>
        </div>
    );
};

export default Module6Chap1;