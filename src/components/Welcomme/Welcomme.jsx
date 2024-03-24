import { Grid, GridItem, Box, Heading, Image, Input, Button, FormLabel, InputGroup, InputLeftElement, Text, Link as Anchor } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { DataContext } from "../../context/data.context"
import Logo from "../Logo/Logo"
import styles from './Welcomme.module.css'
import { useNavigate } from 'react-router-dom'

export const Welcomme = () => {
    const navigate = useNavigate()
    const { wallet, setWallet, setUser, setBalance } = useContext(DataContext)
    const [name, setName] = useState('')
    const [initialDeposit, setInitialDeposit] = useState(6000)
    const [validationMessage, setValidationMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        validateName(name)
        navigate('/overview')
    }

    const validateName = (name) => {
        if (name.length > 2 && name.match(/^[a-zA-Z]/)) {
            setWallet({ ...wallet, deposit: initialDeposit })
            setUser({ userName: name })
            setBalance(initialDeposit)
        } else {
            setValidationMessage('Name field should contain at least 3 characteres')
        }
    }

    return (
        <Box className={styles.bg} >
            <Grid className={styles.mainGrid}>
                <GridItem className={styles.leftGrid} colSpan={10} p='3%'>
                    <Box className={styles.logo} w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                        <Logo size='3rem' />
                    </Box>
                    <Box h='70%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='40px'>

                        <form className="bg-white bg-opacity-95 p-4 rounded shadow-md" onSubmit={(e) => handleSubmit(e)}>
                            <Box textAlign='center'>
                                <Heading display='inline' fontWeight='500'>
                                    {`Get started now and`} <br/>
                                    {`master the art of trading with investZERO ! `}
                                </Heading>
                                <Text fontSize='1rem' display='inline'>**</Text>
                            </Box>
                            <FormLabel w='100%'><br/>Name:
                                <Input name="name" isRequired onChange={(e) => setName(e.currentTarget.value)} value={name} type='text' placeholder='Your Name' />
                                <span style={{ color: "red" }}>{validationMessage}</span>
                            </FormLabel>
                            <FormLabel w='100%'>Deposit:
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                        children='RM'
                                    />
                                    <Input name='deposit' isRequired onChange={(e) => setInitialDeposit(e.currentTarget.value)} value={initialDeposit} type='number' max={1000000} min={100}>
                                    </Input>
                                </InputGroup>
                            </FormLabel>
                            <br/>
                            <Button
                                variant='solid'
                                colorScheme='pink'
                                type='submit'
                                w='100%'
                            >
                                Start
                            </Button>
                        </form>
                        {/* <Text class="font-medium" fontSize='0.60em'>
                            {`** This is a Real Time Stock Simulator.`}
                        </Text> */}
                    </Box>

                </GridItem>
                {/*<GridItem className={styles.rightGri‰d} colSpan={6} display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='40px' >*/}
                {/*        <Image w='500px' marginTop='100px' marginBottom='-1.5px' src="/images/dashboard-color-secondary.svg" />*/}
                {/*    <Text className={styles.welcommeInfo}>*/}
                {/*        {`Manage your finance and learn trading today with investZER0. `}*/}
                {/*    </Text>*/}
                {/*</GridItem>*/}
            </Grid>
        </Box>
    )
}