import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function SecretCard({ secret }) {
  return (
    <Box sx={{ width: { xs: '300px', sm: '500px', md: '800px', lg: '900px' } }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{secret.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{secret.description}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
