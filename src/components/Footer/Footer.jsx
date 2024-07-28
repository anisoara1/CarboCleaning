import React from 'react';
import css from './Footer.module.css';
import { Box, Typography } from '@mui/material';
/* import MenuIcon from '@mui/icons-material/Menu'; */

export const Footer = () => {
  return (
    <Box className={css.footer}>
      <Typography>Footer=Contacts=media</Typography>
    </Box>
  );
};
