import { Box, Grid, GridItem, Button, ButtonGroup, Heading, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../../context/data.context";
import Balance from "../Charts/Balance";
import PieChart from "../Charts/PieChart";
import BreakingNews from "../News/BreakingNews";
import StockDetails from "../Stocks/StocksComponents/StockDetails";
import StockTable from "../Stocks/StocksComponents/StockTable";
import styles from "./Overview.module.css";
import { useNavigate } from "react-router-dom";

function Overview() {
    const { trendingStocks } = useContext(DataContext);
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const isFirstVisit = localStorage.getItem('isFirstVisit');
        // Uncomment this block to show the alert dialog only on the first visit
        // if (!isFirstVisit) { 
        //     setIsOpen(true);
        //     localStorage.setItem('isFirstVisit', 'no');
        // }
        setIsOpen(true);
    }, []);

    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Welcome!
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            It looks like it's your first time here. Would you like to edit your profile?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                No, thanks
                            </Button>
                            <Button colorScheme="blue" onClick={() => { 
                                    onClose();
                                    navigate("/editProfile");
                                    }} ml={3}>
                                Yes, let's do it
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>

            <Grid className={styles.manGrid}>
                <GridItem className={styles.leftGrid}>
                    <StockDetails w='100%' title='Stock of the Week' symbol2={'IBM'} />
                    <StockTable w='100%' h='400px' data={trendingStocks} type='trending' title='Trending Stocks' />
                </GridItem>
                <GridItem className={styles.rightGrid}>
                    <Box display='flex' gap='20px'>
                        <Balance />
                        <PieChart />
                    </Box>
                    <BreakingNews h='620px' />
                </GridItem>
            </Grid>
        </>
    )
}

export default Overview