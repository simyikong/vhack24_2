import { Box, Text } from "@chakra-ui/react"
import { FcAreaChart } from "react-icons/fc"

function Logo(props) {
    const { size } = props
    return (
        <Box
            display='flex'
            alignItems='center'
            fontSize={size ? size : '4rem'}
            fontFamily='Kodchasan'
            fontWeight='bold'
            color='var(--color-primary)'
        >
            <FcAreaChart />
            <Text
                bgGradient='linear(to-l, var(--color-primary) 10%, var(--color-secondary))'
                bgClip='text'
            >
                investZER0
            </Text>
        </Box>
    )
}

export default Logo