import React, { useState } from 'react'

import { makeStyles } from '@mui/styles'
import { Fade, Slide } from '@mui/material'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
  imageWrapper: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    transition: 'transform 1s ease-in-out',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 20,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  title: {
    margin: 0,
    fontSize: 24,
  },
  description: {
    margin: 0,
    fontSize: 18,
  },
})

export default function CarouselSlide({
  image,
  title,
  description,
  isActive,
  isNext,
}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Slide direction={isNext ? 'left' : 'right'} in={isActive} timeout={1000}>
        <div className={classes.imageWrapper}>
          <Fade in={isActive} timeout={1000}>
            <img
              className={classes.image}
              src={image}
              alt={title}
              style={{
                transform: `translateX(${isNext ? 100 : -100}%) ${
                  isActive ? 'translateY(0)' : 'translateY(-100px)'
                }`,
              }}
            />
          </Fade>
        </div>
      </Slide>
      <Slide direction={isNext ? 'left' : 'right'} in={isActive} timeout={1000}>
        <div className={classes.content}>
          <Fade in={isActive} timeout={1000}>
            <h2 className={classes.title}>{title}</h2>
          </Fade>
          <Fade in={isActive} timeout={1000}>
            <p className={classes.description}>{description}</p>
          </Fade>
        </div>
      </Slide>
    </div>
  )
}
