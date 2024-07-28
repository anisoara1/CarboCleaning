import React from 'react';
import css from './Hero.module.css';
import { Box } from '@mui/material';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [css.BgImg1, css.BgImg2, css.BgImg3];

export const Hero = () => {
  return (
    <Box className={css.hero}>
      <div className={css.slideContainer}>
        <Fade>
          {fadeImages.map((bgClass, index) => (
            <div className={`${css.eachFade} ${bgClass}`} key={index}></div>
          ))}
        </Fade>
      </div>
    </Box>
  );
};
