import React from 'react';
import './Module7Chap1.css'; // Import the CSS file with the improved styles
import { NavLink } from 'react-router-dom';

const Module7Chap1 = () => {
    const handleTestClick = () => {
        // Implement testing logic here
        alert('Testing knowledge...');
    };

    return (
        <div className="module7-chap1-container">
            <h1>Module 7: Funds: Learn about Fund Investing</h1>

            <section className="section" id="section7-1">
                <h2>7.1 Introduction to Fund Investing</h2>
                <p>Fund investing involves pooling money together with other investors to buy a collection of stocks, bonds, or other securities. This can provide diversification and professional management, but also comes with fees and other considerations.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GVSsEwxK5Ao" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section7-2">
                <h2>7.2 Types of Funds</h2>
                <p>
                    There are several types of funds, including mutual funds, index funds, and exchange-traded funds (ETFs). Each type has its own advantages and disadvantages, and the best choice depends on your individual circumstances and investment goals.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3VbGf402bwY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section7-3">
                <h2>7.3 Benefits of Fund Investing</h2>
                <p>Fund investing can provide diversification, professional management, and convenience. However, it also comes with fees and other costs, and the performance of a fund can be affected by its size, strategy, and management.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mXlobkli5tI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section7-4">
                <h2>7.4 Risks of Fund Investing</h2>
                <p>While fund investing can provide diversification and professional management, it also comes with risks. These include market risk, management risk, and the risk of high fees and expenses.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/j9CuC2R8fb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section7-5">
                <h2>7.5 Conclusion</h2>
                <p>Fund investing can be a valuable part of a diversified investment portfolio. However, like all investments, it's important to understand the risks and rewards before investing.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/95ocNa_rsjM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <button className="test-button" onClick={handleTestClick}>Test Knowledge</button>
        </div>
    );
};

export default Module7Chap1;