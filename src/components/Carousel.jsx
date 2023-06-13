import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  carousel: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '300px', // Set the desired height of the carousel
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease-in-out',
  },
  slide1: {
    background: '#FFC371',
  },
  slide2: {
    background: '#64B5F6',
  },
  slide3: {
    background: '#FF9800',
  },
});

const Carousel = ({ slides }) => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Set the desired time interval for slide transition

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <Box className={classes.carousel}>
      {slides.map((slide, index) => (
        <Paper
          key={index}
          className={`${classes.slide} ${classes[`slide${index + 1}`]}`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <Typography variant="h4">{slide}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Carousel;
