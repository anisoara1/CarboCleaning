import React from 'react';
import css from './Navbar.module.css';
import { Box, MenuList, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
/* import { MobileModal } from 'components/MobileMenu/MobileMenu'; */

export const NavBar = () => {
  return (
    <Box className={css.navbar}>
      <Link to="/about" className={css.link}>
        <Typography
          className={css.title}
          sx={{
            color: '#028900',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: '700',
            fontSize: '26px',
            letterSpacing: '0.03em',
            '@media screen and (max-width: 850px)': {
              marginLeft: '2vh',
              fontSize: '24px',
            },
          }}
        >
          <span className={css.titleBlue}>Carbo</span>Cleaning
        </Typography>
      </Link>
      <MenuList
        sx={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '400',
          fontSize: '18px',
          letterSpacing: '0.02em',
          padding: '0',
          display: 'flex',
          flexDirection: 'row',
          gap: '70px',

          '@media screen and (max-width: 600px)': {
            display: 'none',
          },
        }}
      >
        <li>
          <Link to="/studio" className={css.link}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '16px',
                letterSpacing: '0.02em',
                color: '#8d8589',
                cursor: 'pointer',
                '&:hover': {
                  color: '#ff9a00',
                },
              }}
            >
              About
            </Typography>
          </Link>
        </li>
        <li>
          <Link to="/portofolio" className={css.link}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '16px',
                letterSpacing: '0.02em',
                color: '#8d8589',
                cursor: 'pointer',
                '&:hover': {
                  color: '#ff9a00',
                },
              }}
            >
              Services
            </Typography>
          </Link>
        </li>
        <li>
          <a
            href="#footer"
            /* onClick={handleClickContact}  */ className={css.link}
          >
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '16px',
                letterSpacing: '0.02em',
                color: '#8d8589',
                cursor: 'pointer',
                '&:hover': {
                  color: '#ff9a00',
                },
              }}
            >
              Contacts
            </Typography>
          </a>
        </li>
      </MenuList>
      <Button
        /*   onClick={handleOpen} */
        sx={{
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 700,
          lineHeight: '30px',
          letterSpacing: '0.06em',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textTransform: 'none',
          bgcolor: 'none',
          width: '200px',
          height: '50px',
          borderRadius: '25px',
          border: '1px solid #ff9a00',
          color: ' #555555',
          padding: '0',
          '&:hover': {
            color: '#ffffff',
            bgcolor: '#028900',
            cursor: 'pointer',
          },
        }}
      >
        BOOK NOW
      </Button>
      <MenuIcon
        /* onClick={handleOpen} */
        sx={{
          display: 'block',
          '&:hover': {
            color: '#ff9a00',
            cursor: 'pointer',
          },
          '@media screen and (min-width: 601px)': {
            display: 'none',
          },
        }}
      />
      {/*  <MobileModal open={open} handleClose={() => setOpen(false)} /> */}
    </Box>
  );
};
