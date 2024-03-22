import { useState, useContext } from 'react';
import {
    Box,
    Heading,
    ButtonGroup,
    Button,
    TableContainer,
    Table,
    Tbody,
    Tr,
    Td,
    Image,
    Text,
    Flex
} from '@chakra-ui/react';
import {
    FaHeart,
    FaRegHeart,
} from 'react-icons/fa';
import {
    BsFillArrowDownRightCircleFill as StockDown,
    BsFillArrowUpRightCircleFill as StockUp,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../../context/data.context';

function StockTable({ data, type, title, w, h }) {
    const [showShariahCompliant, setShowShariahCompliant] = useState(false);
    const { getTrendingStocks, buttonSelected, watchlist, setWatchlist, setSearchResults, setIsSearching } = useContext(DataContext);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Number of items per page

    const handleViewDetails = (symbol) => {
        navigate(`/stocks/${symbol}`);
        resetSearch();
    };

    const resetSearch = () => {
        const searchBar = document.querySelector('#searchBar');
        searchBar.value = '';
        setSearchResults([]);
        setIsSearching(false);
    };

    const handleAddToWatchlist = (stock) => {
        setWatchlist([...watchlist, stock]);
    };

    const handleDeleteFromWatchList = (stock) => {
        const filteredArr = [...watchlist].filter(item => item.Symbol !== stock.Symbol);
        setWatchlist(filteredArr);
    };

    const hasStock = (symbol) => watchlist.some(stock => stock.Symbol === symbol);

    const filteredData = showShariahCompliant ? data.filter(stock => stock.IsShariahCompliant) : data;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = filteredData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredData.length / pageSize);

    const changePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            {data && (
                <Box className='box'>
                    <Box display='flex' justifyContent='space-between' marginBottom='20px'>
                        <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                            <Heading textAlign='left'>{title}</Heading>
                            <Text>{type === 'results' ? data.length : null}</Text>
                        </Box>
                        {type === 'trending' && (
                            <ButtonGroup variant='outline' size='sm' display='flex' justifyContent='flex-end'>
                                <Button onClick={() => setShowShariahCompliant(!showShariahCompliant)}>
                                    {showShariahCompliant ? 'Shariah Stocks' : 'All Stocks'}
                                </Button>
                                <Button onClick={() => getTrendingStocks('winners')} color={buttonSelected !== 'winners' ? 'blackAlpha.600' : '#000'} bgColor={buttonSelected === 'winners' ? 'gray.100' : null}>Winners</Button>
                                <Button onClick={() => getTrendingStocks('lossers')} color={buttonSelected !== 'lossers' ? 'blackAlpha.600' : '#000'} bgColor={buttonSelected === 'lossers' ? 'gray.100' : null}>Lossers</Button>
                            </ButtonGroup>
                        )}
                    </Box>
                    <TableContainer margin='auto' h={h ? h : 'fit-content'} w={w ? w : 'fit-content'} overflowY={h ? 'scroll' : null} overflowX='hidden'>
                        <Table>
                            <Tbody>
                                {filteredData.map((stock, index) => (
                                    <Tr
                                        backgroundColor={stock.Type === 'buy' && 'green.100' || stock.Type === 'sell' && 'red.100'}
                                        className={type === 'investments' ? null : 'stockList'}
                                        key={index}
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                    >
                                        <Td
                                            display='flex'
                                            justifyContent='space-between'
                                            alignItems='center'
                                            gap='30px'
                                            onClick={() => handleViewDetails(stock.Symbol)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <Box
                                                display='flex'
                                                justifyContent='space-between'
                                                alignItems='center'
                                                gap='30px'
                                            >
                                                <Box display={type === 'investments' ? 'flex' : 'none'} justifyContent='start' alignItems='center' gap='20px'>
                                                    <Text className='capitalize' fontWeight='600'>{stock.Type}</Text>
                                                </Box>
                                                <Box display={type === 'investments' ? 'flex' : 'none'} justifyContent='start' alignItems='center' gap='20px'>
                                                    <Text fontWeight='600'>{stock.Quantity}X</Text>
                                                </Box>

                                                <Box display='flex' justifyContent='space-between' alignItems='center' gap='20px'>
                                                    <Image w='35px' h='auto' src={stock.LogoUrl} />
                                                    <Box>
                                                        <Text w='100px' fontWeight='600'>{stock.CompanyName.length > 11 ? stock.CompanyName.slice(0, 11) + "..." : stock.CompanyName}</Text>
                                                        <span>{stock.Symbol}</span>
                                                    </Box>
                                                </Box>
                                                <Box
                                                    w='90px'
                                                    gap='10px'
                                                    display={type === 'investments' ? 'none' : 'flex'}
                                                    justifyContent='start'
                                                    className={stock.PriceChange.includes('-') ? 'stock-down' : 'stock-up'}
                                                    fontWeight='600'
                                                >
                                                    {stock.PriceChange.includes('-') ? <StockDown /> : <StockUp />}{stock.PriceChange}
                                                </Box>
                                                <Box
                                                    w='70px'
                                                    gap='10px'
                                                    display='flex'
                                                    justifyContent='start'
                                                    fontWeight='600'
                                                >
                                                    <span>{`MYR ${stock.Price}`}</span>
                                                </Box>
                                                <Box
                                                    display={type === 'investments' ? 'flex' : 'none'}
                                                    w='70px'
                                                    gap='10px'
                                                    justifyContent='start'
                                                    fontWeight='600'
                                                >
                                                    <span>{`MYR ${stock.Amount}`}</span>
                                                </Box>
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Button
                                                variant='ghost'
                                                className='stockList'
                                                style={{ cursor: 'pointer' }}
                                                onClick={hasStock(stock.Symbol) ? () => handleDeleteFromWatchList(stock) : () => handleAddToWatchlist(stock)}
                                            >
                                                {hasStock(stock.Symbol) ? <FaHeart fontSize='1.3rem' /> : <FaRegHeart fontSize='1.3rem' />}
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    {/* Pagination */}
                    <Flex justifyContent='center' alignItems='center' marginTop='20px'>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Button
                                key={i}
                                onClick={() => changePage(i + 1)}
                                colorScheme={currentPage === i + 1 ? 'blue' : 'gray'}
                                size='sm'
                                margin='5px'
                            >
                                {i + 1}
                            </Button>
                        ))}
                    </Flex>
                </Box>)} </>
    );
}

export default StockTable;
