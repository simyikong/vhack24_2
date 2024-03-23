import React from 'react';
import './Module3Chap1.css'; // Import the CSS file with the improved styles
import { NavLink } from 'react-router-dom';

const Module3Chap1 = () => {
    const handleTestClick = () => {
        // Implement testing logic here
        alert('Testing knowledge...');
    };

    return (
        <div className="module1-chap1-container">
            <h1>Module 3: Derivatives</h1>

            <section className="section" id="section1-1">
                <h2>3.1 Introduction to Derivatives</h2>
                <p>Derivatives are financial contracts that derive their value from an underlying asset. These could be stocks, bonds, commodities, currencies, interest rates, or market indexes. Derivatives are primarily used for hedging risk, but can also be used for speculative trading.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mZ5d604Wl4I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-2">
                <h2>3.2 Types of Derivatives</h2>
                <p>
                    1. Futures: A futures contract is an agreement to buy or sell an asset at a future date at an agreed-upon price.

                    2. Options: An options contract gives the buyer the right, but not the obligation, to buy or sell an asset at an agreed-upon price during a certain period of time or on a specific date.

                    3. Swaps: A swap is a derivative contract through which two parties exchange financial instruments, such as interest rates, commodities, or foreign exchange.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EvMHwP-rXHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-3">
                <h2>3.3 Trading Derivatives</h2>
                <p>Trading derivatives involves a high level of risk and is not suitable for all investors. Before trading derivatives, it's important to understand the contract specifications, pricing mechanisms, and risk management techniques.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PHeckNZ6NOI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-4">
                <h2>3.4 Hedging with Derivatives</h2>
                <p>One of the main uses of derivatives is to hedge risk. For example, an investor who owns a stock can use a put option to protect against a decrease in the stock's price. Similarly, a company that expects to receive payment in a foreign currency in the future can use a currency future to hedge against currency risk.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/j9CuC2R8fb0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-5">
                <h2>3.5 Conclusion</h2>
                <p>Derivatives are powerful financial instruments that can be used for hedging risk and speculative trading. However, they also involve a high level of risk and require a deep understanding of financial markets.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/K5aahpY0URI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <button className="test-button" onClick={handleTestClick}>Test Knowledge</button>
        </div>
    );
};

export default Module3Chap1;

