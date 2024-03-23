import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = '3Q1JEJYUL45YPFLZ';
const API_BASE_URL = 'https://www.alphavantage.co/query';

const StockDetail = ({stockSymbol}) => {
    const [stockDetail, setStockDetail] = useState(null);
    const [stock, setStock] = useState(null);

    useEffect(() => {
        const viewStockDetail = () => {
            axios.get(`${API_BASE_URL}`, {
                params: {
                    function: 'OVERVIEW',
                    symbol: stockSymbol,
                    apikey: API_KEY
                }
            }).then(json => {
                setStock(stockSymbol);
                setStockDetail(json.data);
            })
        }
        if (stockSymbol && stockSymbol !== stock) {
            viewStockDetail();
        }
    }, [stockSymbol, stockDetail, stock]);

    return (
        // eslint-disable-next-line no-prototype-builtins
        (stockDetail?.hasOwnProperty('Description')) ? (
                <div className='stock-detail-container'>
                    <div className='stock-detail-basic text-black font-bold'>{stockSymbol.toUpperCase()} ({stockDetail.Exchange})</div>
                    <div className='stock-detail-basic text-black'>{stockDetail.Sector} | {stockDetail.Industry} | {stockDetail.Country}</div>
                    <p className='text-black'>{stockDetail && stockDetail.Description}</p>
                    <table className='stock-detail-table border-b-2 border-blue-900 mx-auto my-4 border-collapse border'>
                        <tbody>
                        <tr><td className='colSpan-2 border-b-2 border-blue-900 font-bold text-black' colSpan={2}>Key stats</td></tr>
                        <tr><td className='border-b-2 border-blue-900 text-black'>Market Cap: </td><td className='border-b-2 border-blue-900 text-black'>{stockDetail.MarketCapitalization}</td></tr>
                        <tr><td className='border-b-2 border-blue-900 text-black'>EBITDA: </td><td className='border-b-2 border-blue-900 text-black'>{stockDetail.EBITDA}</td></tr>
                        <tr><td className='border-b-2 border-blue-900 text-black'>P/E: </td><td className='border-b-2 border-blue-900 text-black'>{stockDetail.PERatio}</td></tr>
                        <tr><td className='border-b-2 border-blue-900 text-black'>EPS: </td><td className='border-b-2 border-blue-900 text-black'>{stockDetail.EPS}</td></tr>
                        <tr><td className='border-b-2 border-blue-900 text-black'>dividend: </td><td className='border-b-2 border-blue-900 text-black'>{stockDetail.DividendPerShare}</td></tr>
                        <tr><td className='border-b-2 border-blue-900 text-black'>Shs Outstand: </td><td className='border-b-2 border-blue-900 text-black'>{stockDetail.SharesOutstanding}</td></tr>
                        <tr><td className='border-b-2 border-blue-900 text-black'>Shs Float: </td><td className='border-b-2 border-blue-900 text-black'>{stockDetail.SharesFloat}</td></tr>
                        <tr><td className='border-b-2 border-blue-900 text-black'>52 Wk High: </td><td className='border-b-2 border-blue-900 text-black'>{stockDetail['52WeekHigh']}</td></tr>
                        <tr><td className='border-b-2 border-blue-900 text-black'>52 Wk Low: </td><td className='border-b-2 border-blue-900 text-black'>{stockDetail['52WeekLow']}</td></tr>
                        </tbody>

                    </table>

                </div>
            )
            : (stockSymbol && (
                <p className='errorTxt'>
                    <span>Please ensure that you key in the correct stock.&#128517;</span> <br />
                </p>
            ))
    )
}

export default StockDetail;