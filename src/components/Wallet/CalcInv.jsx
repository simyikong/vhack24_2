import React, { useState } from 'react';
import { Box, Select, Button, Text } from '@chakra-ui/react';
import { AssetsChart } from './AssetsChart';


const generateData = () => {
    const data = [];
    const now = Date.now();
    const oneMonth = 30 * 24 * 60 * 60 * 1000; // Number of milliseconds in a month

    // Generate data for the past 6 months
    for (let i = 6; i > 0; i--) {
        const date = new Date(now - i * oneMonth);
        const amount = Math.random() * 10000; // Generate a random amount between 0 and 10000
        data.push({ date: date.toISOString(), amount });
    }

    // Generate data for the next 6 months
    for (let i = 1; i <= 6; i++) {
        const date = new Date(now + i * oneMonth);
        const amount = Math.random() * 10000; // Generate a random amount between 0 and 10000
        data.push({ date: date.toISOString(), amount });
    }

    return data;
};

export const CalcInv = () => {
    const [approach, setApproach] = useState('balanced');

    const handleApproachChange = (event) => {
        setApproach(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Calculate the recommended investment amount based on the selected approach
    };

    const assetsData = generateData(); 

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <br></br>
                <Text mb={4} fontWeight="bold">Select Approach</Text>
                <Select value={approach} onChange={handleApproachChange}>
                    <option value="balanced">Balanced</option>
                    <option value="conservative">Conservative</option>
                    <option value="aggressive">Aggressive</option>
                </Select>
            </form>
            <br></br>
            <Box width="200%">
                <AssetsChart data={assetsData} />
            </Box>
        </Box>
    );
};