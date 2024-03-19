import { useEffect, useState } from 'react';
import SearchInput from "./SearchInput.jsx";
import StockDetail from "./stockDetail.jsx";

const AllStocks = () => {
    const [stock, setStock] = useState('');

    useEffect(() => {
        seeStockDetail(stock);
    }, [stock]);

    const seeStockDetail = (symbol) => {
        setStock(symbol);
    }
    return (
        <div className="App">
            <SearchInput seeStockDetail={seeStockDetail} selectedStock={stock} />
            <StockDetail stockSymbol={stock} />
        </div>
    );
}

export default AllStocks;