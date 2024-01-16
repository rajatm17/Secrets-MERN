import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useGetRequestUrl } from '../hooks/useGetRequestUrl';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useGetUserId } from '../hooks/useGetUserId';

export default function Compose() {
  // Custom hooks to get user information
  const userId = useGetUserId();
  const navigate = useNavigate();
  const requestUrl = useGetRequestUrl();
  const [cookies, _] = useCookies(['access_token']);

  // State for storing secret details
  const [secret, setSecret] = useState({
    title: '',
    description: '',
  });

  // Handle input changes
  const handleChange = (event) => {
    const { value, name } = event.target;
    setSecret({ ...secret, [name]: value });
  };

  // Handle secret submission
  const handleSubmit = async () => {
    try {
      // Send a POST request to compose a secret
      const response = await axios.post(
        `${requestUrl}/secret/compose`,
        {
          userId: userId,
          title: secret.title,
          description: secret.description,
        },
        {
          headers: { authorization: `Bearer ${cookies.access_token}` },
        }
      );

      // Show toast messages based on the response status
      if (response.status === 200) {
        toast.error(response.data.message);
      }
      if (response.status === 201) {
        toast.success(response.data.message);
      }

      // Navigate back to the home page
      navigate('/');
    } catch (error) {
      console.error('Error during secret submission:', error);
      // Handle error, show toast, or redirect to an error page if needed
    }
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      mt="50px"
      gap={2}
      spacing={1}
      mb="50px"
    >
      <Typography fontWeight="700" fontSize="30px">
        What's your Secret!
      </Typography>

      {/* Title input field */}
      <TextField
        variant="outlined"
        placeholder="Title"
        name="title"
        value={secret.title}
        onChange={(e) => {
          handleChange(e);
        }}
      />

      {/* Description input field */}
      <TextField
        variant="outlined"
        placeholder="Description"
        name="description"
        value={secret.description}
        onChange={(e) => {
          handleChange(e);
        }}
      />

      {/* Compose button */}
      <Button onClick={handleSubmit} variant="contained" color="success">
        Compose
      </Button>
    </Stack>
  );
}
