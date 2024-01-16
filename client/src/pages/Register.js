import React, { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useGetRequestUrl } from '../hooks/useGetRequestUrl';
import toast from 'react-hot-toast';

export default function Register() {
  // Custom hook to get the request URL
  const requestUrl = useGetRequestUrl();

  // React Router's useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // State for handling username and password input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle the form submission
  const handleSubmit = () => {
    axios
      .post(
        // Make a POST request to the signup endpoint
        `${requestUrl}/auth/signup`,
        {
          username: username,
          password: password,
        },
        { withCredentials: false }
      )
      .then(function (response) {
        // console.log(response);

        // Handle the response based on status codes
        if (response.status === 201) {
          // Display a success toast and navigate to the login page
          toast.success(response.data.message);
          navigate('/login');
        }
        if (response.status === 200) {
          // Display an error toast if registration fails
          toast.error(response.data.message);
        }
        if (response.status === 202) {
          toast.error('Username or Password is Required');
        }
      });
  };

  return (
    <Stack justifyContent="center" alignItems="center" spacing={2} mt="100px">
      {/* Register Title */}
      <Typography fontWeight="700" fontSize="30px">
        Register
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

      {/* Password input field */}
      <TextField
        variant="outlined"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      {/* Register button */}
      <Button onClick={handleSubmit} color="success" variant="contained">
        Register
      </Button>
    </Stack>
  );
}
