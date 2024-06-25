import React, { useState } from 'react';
import { Button, Input, Textarea } from '@chakra-ui/react';

const Appeal = () => {
  const [reason, setReason] = useState('');
  const [appealText, setAppealText] = useState('');

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleAppealTextChange = (event) => {
    setAppealText(event.target.value);
  };

  const submitAppeal = () => {
    // Add logic to submit appeal to backend
  };

  return (
    <div>
      <Input
        placeholder="Reason for appeal"
        value={reason}
        onChange={handleReasonChange}
      />
      <Textarea
        placeholder="Enter your appeal text"
        value={appealText}
        onChange={handleAppealTextChange}
      />
      <Button onClick={submitAppeal}>Submit Appeal</Button>
    </div>
  );
};

export default Appeal;