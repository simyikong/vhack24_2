import {
    Box,
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Input,
    InputGroup,
    InputLeftElement,
    Heading,
    Button
} from '@chakra-ui/react'
import { useContext, useState } from "react"
import { DataContext } from "../../context/data.context"
import { formatCurrency } from "../../utils/formatCurrency"
import { useNavigate } from 'react-router-dom';

function Wallet() {
    const { wallet, balance } = useContext(DataContext)
    const [amountDeposit, setAmountDeposit] = useState(0)
    const [amountTransfer, setAmountTransfer] = useState(0)
    
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/calcInv');
    };

    return (
        <>
            <Box className='box'>
                <Heading className='section-title'>Wallet</Heading>
                <TableContainer border='1px solid #ccc' borderRadius='8px' p='5px' >
                    <Table variant='unstyled'>
                        <Tbody>
                            <Tr borderBottom='1px solid #f0f0f0'>
                                <Td textAlign='center'>Deposit</Td><Td textAlign='center'>{formatCurrency(wallet.deposit)}</Td>
                            </Tr>
                            <Tr borderBottom='1px solid #f0f0f0'>
                                <Td textAlign='center'>Investment</Td><Td textAlign='center'>{formatCurrency(wallet.investment)}</Td>
                            </Tr>
                            <Tr>
                                <Td textAlign='center'>Balance</Td><Td textAlign='center'>{formatCurrency(wallet.deposit - wallet.investment)}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Box display='flex' justifyContent='space-between' alignItems='center' marginTop='30px'>
                    <Box w='45%' display='flex' gap='10px' >
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='RM'
                            />
                            <Input variant='flushed' borderBottom='1px solid #ccc' flexGrow={1} onChange={(e) => setAmountDeposit(e.target.value)} w='100px' bg='#fff' type='number' min={1} max={1000000} placeholder='0' />
                        </InputGroup>
                        <Button disabled={amountDeposit < 1 ? true : false} variant='solid' colorScheme='teal'>Deposit</Button>
                    </Box>
                    <Box w='45%' display='flex' gap='10px'>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='RM'
                            />
                            <Input variant='flushed' borderBottom='1px solid #ccc' flexGrow={1} onChange={(e) => setAmountTransfer(e.target.value)} w='100px' bg='#fff' type='number' min={1} max={1000000} placeholder='0' />
                        </InputGroup>
                        <Button disabled={amountTransfer < 1 ? true : false} variant='solid' colorScheme='teal'>Transfer</Button>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='space-between' alignItems='center' marginTop='30px'>
                <Button onClick={handleButtonClick} mt={4}>
                    Budget Page
                </Button>
                </Box>
            </Box>
        </>
    )
}

export default Wallet