import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Stack } from '@mui/material';
import SecretCard from '../components/SecretCard';
import { useGetRequestUrl } from '../hooks/useGetRequestUrl';

export default function Home() {
  // Custom hook to get the request URL
  const requestUrl = useGetRequestUrl();

  // Get cookies for authentication
  const [cookies, _] = useCookies(['access_token']);

  // State to store secrets retrieved from the server
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    // Function to fetch secrets from the server
    const getSecrets = async () => {
      try {
        // Make a GET request to fetch secrets
        const response = await axios.get(
          `${requestUrl}/secret/`,
          { headers: { 'Content-Type': 'application/json' } },
          { withCredentials: false }
        );

        // Update the state with the fetched secrets
        setSecrets(response.data);
      } catch (error) {
        console.error('Error fetching secrets:', error);
        // Handle error, show toast, or redirect to an error page if needed
      }
    };

    // Set a timeout to delay the initial fetching of secrets
    setTimeout(() => {
      getSecrets();
    }, 500);
  }, [secrets, requestUrl]); // Dependency array to re-run the effect when 'secrets' or 'requestUrl' changes

  return (
    <Stack
      ml={{ xs: '0px', sm: '0px', md: '88px', lg: '88px' }}
      mr={{ xs: '0px', sm: '0px', md: '88px', lg: '88px' }}
      pb="40px"
      justifyContent="center"
    >
      {/* Stack to display the list of secret cards */}
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'column' }}
        justifyContent={{
          xs: 'center',
          sm: 'center',
          md: 'center',
          lg: 'center',
        }}
        flexWrap="wrap"
        alignItems="center"
        gap={2}
        mt={{ xs: '10px', sm: '10px', md: '20px', lg: '60px' }}
      >
        {/* Map through the 'secrets' array and render a 'SecretCard' component for each secret */}
        {secrets.map((secret) => (
          <SecretCard secret={secret} key={secret._id} />
        ))}
      </Stack>
    </Stack>
  );
}
