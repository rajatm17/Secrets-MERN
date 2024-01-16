import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useGetRequestUrl } from '../hooks/useGetRequestUrl';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Recovery() {
  // Custom hook to get the request URL
  const requestUrl = useGetRequestUrl();

  // State for storing the recovered password and the username input
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // Handle the form submission
  const handleSubmit = async () => {
    try {
      // Make a POST request to the password recovery endpoint
      const response = await axios.post(
        `${requestUrl}/auth/recovery`,
        {
          username: username,
        },
        { withCredentials: false }
      );

      // console.log(response);

      // Handle the response based on status codes
      if (response.status === 201) {
        // Update the state with the recovered password
        setPassword(response.data.password);

        // Display a success toast
        toast.success('Password Recovered Successfully');
      } else if (response.status === 200) {
        // Display an error toast if the username is not found
        toast.error('Username not found');
      } else {
        // Display an error toast for unexpected errors
        toast.error('Unexpected error occurred');
      }
    } catch (error) {
      console.error('Error during password recovery:', error);
      // Handle error, show toast, or redirect to an error page if needed
    }
  };

  return (
    <Stack justifyContent="center" alignItems="center" spacing={2} mt="100px">
      {/* Password Recovery Title */}
      <Typography fontWeight="700" fontSize="30px">
        Password Recovery
      </Typography>

      {/* Username input field */}
      <TextField
        variant="outlined"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      {/* Recover Password button */}
      <Button onClick={handleSubmit} variant="contained" color="success">
        Recover Password
      </Button>

      {/* Display recovered password */}
      <Typography>Password: {password}</Typography>
    </Stack>
  );
}
