import React from 'react';
import './Module5Chap1.css'; // Import the CSS file with the improved styles
import { NavLink } from 'react-router-dom';

const Module5Chap1 = () => {
    const handleTestClick = () => {
        // Implement testing logic here
        alert('Testing knowledge...');
    };

    return (
        <div className="module1-chap1-container">
            <h1>Module 5: Gold</h1>

            <section className="section" id="section1-1">
                <h2>5.1 Introduction to Gold as an Investment</h2>
                <p>Gold has been a valuable and highly sought-after precious metal for coinage, jewelry, and other arts since long before the beginning of recorded history. Gold also has various uses in fields like electronics and dentistry. Despite these uses, most of the gold ever mined has been made into jewelry.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mZ5d604Wl4I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-2">
                <h2>5.2 Saving in Gold</h2>
                <p>
                    Saving in gold can be a secure way to protect your wealth against inflation. Gold is a physical asset that has intrinsic value, unlike paper currency or digital assets. It's a good way to preserve wealth over the long term, although it doesn't pay interest or dividends.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EvMHwP-rXHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-3">
                <h2>5.3 Investing in Gold</h2>
                <p>Investing in gold can be done in several ways, including buying physical gold, gold ETFs, gold mining stocks, or gold futures. Each method has its own advantages and disadvantages, and the best choice depends on your individual circumstances and investment goals.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PHeckNZ6NOI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-4">
                <h2>5.4 Risks and Rewards of Gold Investment</h2>
                <p>While gold can be a safe haven investment during times of economic uncertainty, it also has risks. The price of gold can be volatile in the short term. It can also be a poor investment when real interest rates are high. However, over the long term, gold has been a store of value and a hedge against inflation.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/j9CuC2R8fb0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-5">
                <h2>5.5 Conclusion</h2>
                <p>Gold can be a valuable part of a diversified investment portfolio. It can provide a hedge against inflation and currency risk. However, like all investments, it's important to understand the risks and rewards before investing in gold.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/K5aahpY0URI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <button className="test-button" onClick={handleTestClick}>Test Knowledge</button>
        </div>
    );
};

export default Module5Chap1;

