import React, { useState } from 'react'

import { makeStyles } from '@mui/styles'
import { Fade, Slide } from '@mui/material'
import CarouselSlide from './CarouselSlide'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: '400px',
    width: '50%',
    overflow: 'hidden',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    zIndex: 1,
  },
  button: {
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.5s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  },
  leftButton: {
    marginLeft: 20,
  },
  rightButton: {
    marginRight: 20,
  },
})

const carouselData = [
  {
    image: 'https://i.ibb.co/GCCdy8t/womens.png',
    title: 'Slide 1',
    description: 'Description for slide 1',
  },
  {
    image: 'https://i.ibb.co/R70vBrQ/men.png',
    title: 'Slide 2',
    description: 'Description for slide 2',
  },
  {
    image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    title: 'Slide 3',
    description: 'Description for slide 3',
  },
]

const Carousel = () => {
  const classes = useStyles()
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex(
      (activeIndex - 1 + carouselData.length) % carouselData.length
    )
  }

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % carouselData.length)
  }

  return (
    <div className={classes.root}>
      {carouselData.map((slide, index) => (
        <CarouselSlide
          key={index}
          image={slide.image}
          title={slide.title}
          description={slide.description}
          isActive={index === activeIndex}
          isNext={
            index === activeIndex + 1 ||
            (index === 0 && activeIndex === carouselData.length - 1)
          }
        />
      ))}
      <div className={classes.buttonContainer}>
        <div
          className={`${classes.button} ${classes.leftButton}`}
          onClick={handlePrev}
        >
          <span>&#8249;</span>
        </div>
        <div
          className={`${classes.button} ${classes.rightButton}`}
          onClick={handleNext}
        >
          <span>&#8250;</span>
        </div>
      </div>
    </div>
  )
}

export default Carousel
