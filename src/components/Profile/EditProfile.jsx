import React, { useState } from 'react';
import { Box, Heading, Image, Input, Button, Checkbox, Text, Spacer, Textarea } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const [state, setState] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: './public/images/Above+Avalon+Neil+Cybart.png',
        isMuslim: false,
        bankLinks: [
            { name: 'Bank A', link: 'https://bankA.com' },
            { name: 'Bank B', link: 'https://bankB.com' },
        ],
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        
        // After form submission, navigate back to the profile page
        navigate('/profile');
    }

    return (
        <Box className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mx-auto text-center p-8">
            <Heading className="text-xl font-bold mb-4 text-left">Edit Profile</Heading>
            <Image src={state.image} alt="Profile" borderRadius="full" boxSize="90px" className="mx-auto mb-4" />
            <form onSubmit={handleSubmit}>
                <Box className="text-xs text-left mb-2">
                    <strong className='text-sm font-bold mb-4 text-left'>Name:</strong>
                    <Input type="text" name="name" className='text-sm text-left mb-2 border border-grey border-opacity-25 p-3 rounded-lg shadow-sm flex-grow' value={state.name} onChange={handleInputChange} />
                </Box>
                <Box className="text-xs text-left mb-2">
                    <strong className='text-sm font-bold mb-4 text-left'>Email:</strong>
                    <Input type="email" name="email" className='text-sm text-left mb-2 border border-grey border-opacity-25 p-3 rounded-lg shadow-sm flex-grow' value={state.email} onChange={handleInputChange} />
                </Box>
                <Box className="text-xs text-left mb-2">
                    <strong className='text-sm font-bold mb-4 text-left'>Bio:</strong>
                    <Textarea
                        className='text-sm text-left mb-2 border border-grey border-opacity-25 p-3 rounded-lg shadow-sm flex-grow'
                        name="bio"
                        value={state.bio}
                        onChange={handleInputChange}
                        size="xs"
                        fontSize="1.0rem"
                    />
                </Box>
                <Box className="text-xs text-left mb-4 flex">
                    <strong className='text-sm font-bold text-left'>Are you a Muslim?</strong>
                    <Spacer />
                    <Checkbox
                        size="lg"
                        colorScheme="blue"
                        name="isMuslim"
                        isChecked={state.isMuslim}
                        onChange={handleInputChange}
                    />
                </Box>
                <Button type="submit" className="block w-full text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-500 mb-4">
                    Save Changes
                </Button>
            </form>
        </Box>
    );
}

export default EditProfile;

