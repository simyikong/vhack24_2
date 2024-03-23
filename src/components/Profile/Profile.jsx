import { Box, Heading, Link as RouterLink, Image } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export const Profile = () => {
    // This is just a placeholder. Replace it with your actual user data.
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: './public/images/Above+Avalon+Neil+Cybart.png', // Placeholder image URL
        isMuslim: false,
        bankLinks: [
            { name: 'Bank A', link: 'https://bankA.com' },
            { name: 'Bank B', link: 'https://bankB.com' },
            // Add more bank links if needed
        ],
    };

    return (
        <Box className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto text-center p-8">
            <Heading className="text-2xl font-bold mb-4 text-left">Profile</Heading>
            <Image src={user.image} alt="Profile" borderRadius="full" boxSize="90px" className="mx-auto mb-4" />

            <div className="flex items-center">
                <strong className='text-sm text-left mb-2 mr-2 w-16'>Name :</strong>
                <Box className="text-sm text-left mb-2 border border-grey border-opacity-25 p-3 rounded-lg shadow-sm flex-grow">{user.name}</Box>
            </div>

            <div className="flex items-center">
                <strong className='text-sm text-left mb-2 mr-2 w-16'>Email :</strong>
                <Box className="text-sm text-left mb-2 border border-grey border-opacity-25 p-3 rounded-lg shadow-sm flex-grow">{user.email}</Box>
            </div>

            <div className="flex items-center">
                <strong className='text-sm text-left mb-2 mr-2 w-16'>Bio :</strong>
                <Box className="text-sm text-left mb-2 border border-grey border-opacity-25 p-3 rounded-lg shadow-sm flex-grow">{user.bio}</Box>
            </div>

            <div className="flex items-center">
                <strong className='text-sm text-left mb-2 mr-2 w-16'>Muslim :</strong>
                <Box className="text-sm text-left mb-2 border border-grey border-opacity-25 p-3 rounded-lg shadow-sm flex-grow">{user.isMuslim ? 'Yes' : 'No'}</Box>
            </div>



            <Link to="/editProfile" className="block w-full text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-500 mb-4">
                Edit Profile
            </Link>
            <Box className="border-b border-gray-300 mb-4"></Box>
            <Box className="flex flex-col items-center">
                {user.bankLinks.map((bank, index) => (
                    <Box key={index} className="text-sm mb-2 text-left">
                        <RouterLink href={bank.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {bank.name} <ExternalLinkIcon mx="2px" />
                        </RouterLink>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
