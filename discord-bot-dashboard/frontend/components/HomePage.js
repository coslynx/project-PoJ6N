import React, { useState, useEffect } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const HomePage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Fetch user information from backend API
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error('Error fetching user information: ', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">Welcome to the Discord Bot Dashboard!</Text>
      {userInfo && (
        <Box>
          <Text>Name: {userInfo.name}</Text>
          <Text>Email: {userInfo.email}</Text>
          <Text>Level: {userInfo.level}</Text>
          {/* Add more user information as needed */}
        </Box>
      )}
      <Button colorScheme="blue">Logout</Button>
    </Box>
  );
};

export default HomePage;