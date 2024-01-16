import React, { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useGetRequestUrl } from '../hooks/useGetRequestUrl';
import toast from 'react-hot-toast';

export default function Login() {
  // Custom hook to get the request URL
  const requestUrl = useGetRequestUrl();

  // Cookies hook for setting access_token
  const [_, setCookies] = useCookies(['access_token']);

  // React Router's useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // State for handling username and password input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle the form submission
  const handleSubmit = () => {
    axios
      .post(
        // Make a POST request to the login endpoint
        `${requestUrl}/auth/login`,
        {
          username: username,
          password: password,
        },
        { withCredentials: false } // Ensure credentials are not sent with the request
      )
      .then(function (response) {
        // Handle the response based on status codes
        if (response.status === 200) {
          // Display an error toast if login fails
          toast.error('Username or Password is Invalid');
        }
        if (response.status === 201) {
          // If login is successful:
          // Set the access_token cookie
          setCookies('access_token', response.data.token);

          // Store the user ID in localStorage
          window.localStorage.setItem('userId', response.data.user._id);

          // Navigate to the home page
          navigate('/');

          // Display a success toast
          toast.success('Logged in Successfully');
        }
        if (response.status === 202) {
          toast.error('Username or Password is Required');
        }
      });
  };

  return (
    <Stack justifyContent="center" alignItems="center" spacing={2} mt="100px">
      {/* Login Title */}
      <Typography fontWeight="700" fontSize="30px">
        Login
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

      {/* Login button */}
      <Button onClick={handleSubmit} variant="contained" color="success">
        Login
      </Button>

      {/* Link to Register page */}
      <Link
        to="/register"
        style={{ textDecoration: 'underline', color: 'white' }}
      >
        Don't have an account? Register here
      </Link>

      {/* Link to Password Recovery page */}
      <Link
        to="/recovery"
        style={{ textDecoration: 'underline', color: 'white' }}
      >
        Forget Password? Click here
      </Link>
    </Stack>
  );
}
