import React, { useState } from 'react';
import { Box, Heading, Image, Input, Button, Checkbox, Text, Spacer, Textarea } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const [state, setState] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com/150',
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
        <Box className="bg-navy-blue text-white min-h-screen py-8">
            <Box className="max-w-md mx-auto text-center">
                <Heading className="text-3xl font-bold mb-4">Edit Profile</Heading>
                <Image src={state.image} alt="Profile" borderRadius="full" boxSize="150px" className="mx-auto mb-4" />
                <form onSubmit={handleSubmit}>
                    <Box className="text-lg mb-2">
                        <strong>Name:</strong>
                        <Input type="text" name="name" value={state.name} onChange={handleInputChange} />
                    </Box>
                    <Box className="text-lg mb-2">
                        <strong>Email:</strong>
                        <Input type="email" name="email" value={state.email} onChange={handleInputChange} />
                    </Box>
                    <Box className="text-lg mb-2">
                        <strong>Bio:</strong>
                        <Textarea 
                            name="bio" 
                            value={state.bio} 
                            onChange={handleInputChange} 
                            size="lg" 
                            fontSize="1rem" 
                        />
                    </Box>
                    <Box className="text-lg mb-4">
                        <Text display="inline-block"><strong>Are you a Muslim?</strong></Text>
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
        </Box>
    );
}

export default EditProfile;

