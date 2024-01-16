import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useGetUserId } from '../hooks/useGetUserId';

export default function Navbar({ token, setToken }) {
  const userId = useGetUserId();
  const [cookies, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  // Click handler for home button
  const homeClickHandler = () => {
    navigate('/');
  };

  const handleLogout = () => {
    setCookies('access_token', '');
    window.localStorage.setItem('userId', null);
    navigate('/login');
  };

  return (
    <Box
      p="10px"
      sx={{
        backgroundColor: '#1E1E1E',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
        opacity: 0.9,
      }}
    >
      {/* Navbar content */}
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo */}
        <Box
          justifyContent={{
            sm: 'center',
            xs: 'center',
            md: 'flex-start',
            lg: 'flex-start',
          }}
          alignItems="center"
          onClick={homeClickHandler}
          sx={{
            cursor: 'pointer',
            ml: { xs: '0px', sm: '0px', md: '109px', lg: '109px' },
          }}
        >
          <Typography fontWeight="700" color="#008170">
            Secrets
          </Typography>
        </Box>

        {/* Navigation buttons */}
        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
          justifyContent={{
            xs: 'center',
            sm: 'center',
            md: 'flex-end',
            lg: 'flex-end',
          }}
          alignItems="center"
          gap={2}
          mt={{ xs: '10px', sm: '10px', md: '0px', lg: '0px' }}
          mr={{ xs: '0px', sm: '0px', md: '109px', lg: '109px' }}
        >
          {/* User button */}
          {!cookies.access_token && (
            <Button
              onClick={() => {
                navigate('/login');
              }}
              className="nav-btn"
              variant="contained"
              color="success"
            >
              Login
            </Button>
          )}

          {cookies.access_token && (
            <Stack
              direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
              justifyContent={{
                xs: 'center',
                sm: 'center',
                md: 'flex-end',
                lg: 'flex-end',
              }}
              alignItems="center"
              alignContent="center"
              gap={2}
              mr={{ xs: '0px', sm: '0px', md: '109px', lg: '109px' }}
            >
              <Button
                onClick={() => {
                  navigate('/compose');
                }}
                className="nav-btn"
                variant="contained"
                color="success"
              >
                Compose
              </Button>

              <Button
                onClick={handleLogout}
                className="nav-btn"
                variant="contained"
                color="success"
                p="10px"
              >
                Logout
              </Button>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
