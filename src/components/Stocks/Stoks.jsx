import { useContext } from "react";
import StockTable from "./StocksComponents/StockTable";
import { DataContext } from "../../context/data.context";
import { useNavigate } from "react-router-dom";
import {Button, Flex} from "@chakra-ui/react";

function StocksList() {
    const { trendingStocks } = useContext(DataContext);
    const navigate = useNavigate();

    const learnStocksCompanies = () => {
        navigate("/stock-data-all");
    };

    return (
        <>
            <Flex justify="center">
                <Button onClick={learnStocksCompanies} colorScheme="blue" size="lg" width="430px">
                    Learn About Companies
                </Button>
            </Flex>


            <br/>
            <br/>
            <StockTable data={trendingStocks} type='trending' title='Trending Stocks' />
        </>
    );
}

export default StocksList;
