import React,
{
    useState,
    useEffect
} from 'react';
import Plot
    from 'react-plotly.js';
import axios from 'axios';

function StockChart() {
    const [stockData, setStockData] = useState({});

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const API_KEY= '3Q1JEJYUL45YPFLZ';
                let StockSymbol = 'AAPL';
                const response = await axios.get(
                    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&apikey=${API_KEY}`
                );
                setStockData(
                    response.data['Time Series (Daily)']
                );
            } catch (error) {
                console.error('Error fetching stock data:', error);
            }
        };

        fetchStockData();
    }, []);

    // Check if stockData exists before accessing its keys
    const dates =
        stockData ? Object.keys(stockData) : [];
    const closingPrices =
        dates.map(
            date =>
                parseFloat(
                    stockData[date]['4. close'] || 0
                )
        );

    return (
        <center>
            <h1>Stock Market Predictions</h1>
            <Plot
                data={[
                    {
                        x: dates,
                        y: closingPrices,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'turquoise' },
                    }
                ]}
                layout={
                    {
                        width: 800,
                        height: 500,
                        title: 'Apple Inc.'
                    }
                }
            />
        </center>
    );
}

export default StockChart;
