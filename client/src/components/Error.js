import { Stack, Typography } from '@mui/material';
import React from 'react';

const Error = () => {
  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', mt: '100px' }}>
      <Typography sx={{ fontSize: '50px' }}>Error 404 Not Found</Typography>
    </Stack>
  );
};

export default Error;
