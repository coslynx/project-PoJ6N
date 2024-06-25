import React from 'react';
import { Button, Text } from '@chakra-ui/react';

const Bump = () => {
  const handleBump = () => {
    // Logic to handle bump functionality
  };

  return (
    <div>
      <Text fontWeight="bold" fontSize="xl">
        Bump Your Server
      </Text>
      <Button colorScheme="blue" onClick={handleBump}>
        Bump Server
      </Button>
    </div>
  );
};

export default Bump;