import { Box, Heading, Link as RouterLink, Image } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const Groups = () => {
    // This is just a placeholder. Replace it with your actual user data.
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com/150', // Placeholder image URL
        bankLinks: [
            { name: 'Bank A', link: 'https://bankA.com' },
            { name: 'Bank B', link: 'https://bankB.com' },
            // Add more bank links if needed
        ],
    };

    return (
        <Box className="bg-navy-blue text-white min-h-screen py-8">
            <Box className="max-w-md mx-auto text-center">
                <Heading className="text-3xl font-bold mb-4">Profile</Heading>
                <Image src={user.image} alt="Profile" borderRadius="full" boxSize="150px" className="mx-auto mb-4" />
                <Box className="text-lg mb-2"><strong>Name:</strong> {user.name}</Box>
                <Box className="text-lg mb-2"><strong>Email:</strong> {user.email}</Box>
                <Box className="text-lg mb-4"><strong>Bio:</strong> {user.bio}</Box>
                <RouterLink to="/EditProfile" className="block w-full text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-500 mb-4">
                    Edit Profile
                </RouterLink>
                <Box className="border-b border-white mb-4"></Box>
                <Box className="flex flex-col items-center">
                    {user.bankLinks.map((bank, index) => (
                        <Box key={index} className="text-lg mb-2">
                            <RouterLink href={bank.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {bank.name} <ExternalLinkIcon mx="2px" />
                            </RouterLink>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
