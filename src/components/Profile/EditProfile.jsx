import React, { Component } from 'react';
import { Box, Heading, Image, Input, Button } from '@chakra-ui/react';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/150',
            bankLinks: [
                { name: 'Bank A', link: 'https://bankA.com' },
                { name: 'Bank B', link: 'https://bankB.com' },
            ],
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
    }

    render() {
        return (
            <Box className="bg-navy-blue text-white min-h-screen py-8">
                <Box className="max-w-md mx-auto text-center">
                    <Heading className="text-3xl font-bold mb-4">Edit Profile</Heading>
                    <Image src={this.state.image} alt="Profile" borderRadius="full" boxSize="150px" className="mx-auto mb-4" />
                    <form onSubmit={this.handleSubmit}>
                        <Box className="text-lg mb-2">
                            <strong>Name:</strong>
                            <Input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                        </Box>
                        <Box className="text-lg mb-2">
                            <strong>Email:</strong>
                            <Input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                        </Box>
                        <Box className="text-lg mb-4">
                            <strong>Bio:</strong>
                            <Input type="text" name="bio" value={this.state.bio} onChange={this.handleInputChange} />
                        </Box>
                        <Button type="submit" className="block w-full text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-500 mb-4">
                            Save Changes
                        </Button>
                    </form>
                </Box>
            </Box>
        );
    }
}

export default EditProfile;

// lulz 