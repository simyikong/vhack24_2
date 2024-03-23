import React from 'react';
import './Module1Chap1.css'; // Import the CSS file with the improved styles
import { NavLink } from 'react-router-dom';

const Module1Chap1 = () => {
    const handleTestClick = () => {
        // Implement testing logic here
        alert('Testing knowledge...');
    };

    return (
        <div className="module1-chap1-container">
            <h1>Module 1: Shariah Equities</h1>

            <section className="section" id="section1-1">
                <h2>1.1 Introduction to Shariah-Compliant Investing</h2>
                <p>Shariah-compliant investing adheres to the principles of Islamic law, or Shariah. It prohibits investments in certain industries and activities considered haram (forbidden) in Islam, such as alcohol, gambling, pork, and interest-bearing financial instruments. Instead, Shariah-compliant investments focus on ethical and socially responsible businesses that align with Islamic values.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mZ5d604Wl4I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-2">
                <h2>1.2 Key Principles</h2>
                <p>
                    1. Prohibition of Riba (Interest): Shariah-compliant investments avoid interest-based transactions, as interest is considered exploitative and unjust. Instead, investments should involve profit-sharing or asset-backed financing arrangements.

                    2. Avoidance of Haram (Forbidden) Activities: Investments in businesses involved in activities such as alcohol, gambling, pork, and unethical industries are prohibited.

                    3. Adherence to Ethical Standards: Shariah-compliant investments prioritize ethical conduct, fair treatment of stakeholders, and adherence to Islamic principles of justice and equality.

                    4. Risk-Sharing: Investments should involve sharing both profits and losses between investors and entrepreneurs, promoting a sense of partnership and mutual responsibility.</p>
                    <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EvMHwP-rXHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-3">
                <h2>1.3 Screening Process</h2>
                <p>To ensure compliance with Shariah principles, investments undergo a rigorous screening process. This typically involves:

                    1. Business Activities Screening: Companies are evaluated to ensure they do not derive a significant portion of their revenue from haram activities.

                    2. Financial Ratio Screening: Financial ratios are assessed to ensure compliance with Shariah guidelines, including debt-to-assets ratios and interest income thresholds.

                    3. Debt Screening: Companies with excessive debt levels or involved in interest-bearing transactions are excluded.</p>
                    <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PHeckNZ6NOI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-4">
                <h2>1.4 Investment Options</h2>
                <p>Shariah-compliant investors have a range of investment options, including:

                    1. Equities: Investing in Shariah-compliant stocks of companies that meet Islamic ethical standards.

                    2. Islamic Mutual Funds: Funds managed in accordance with Shariah principles, offering diversified portfolios of Shariah-compliant investments.

                    3. Sukuk (Islamic Bonds): Debt instruments that comply with Islamic finance principles, typically based on asset-backed financing arrangements.</p>
                    <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/j9CuC2R8fb0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="section" id="section1-5">
                <h2>1.5 Conclusion</h2>
                <p>Shariah-compliant investing offers a unique approach to financial markets, combining ethical considerations with investment objectives. By adhering to Islamic principles, investors can align their financial activities with their religious and ethical beliefs while participating in global financial markets.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/K5aahpY0URI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <button className="test-button" onClick={handleTestClick}>Test Knowledge</button>
        </div>
    );
};

export default Module1Chap1;

