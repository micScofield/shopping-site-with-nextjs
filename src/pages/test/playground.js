import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Box, Typography } from '@mui/material'

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    height: '100%',
  },
  img: {
    border: '1px solid red',
    maxWidth: '100%',
    height: 'auto',
  },
  text: {
    border: '1px solid red',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'flex-start',
  },
})

const images = [
  {
    src: 'image1.jpg',
    alt: 'Image 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: 'image2.jpg',
    alt: 'Image 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, sem sed suscipit sagittis.',
  },
  {
    src: 'image3.jpg',
    alt: 'Image 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, sem sed suscipit sagittis, libero sapien ultricies ex, ac malesuada eros velit vel nulla.',
  },
]

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className={classes.box}>
              <Box className={classes.text}>
                <Typography variant="body1">{image.text}</Typography>
              </Box>
              <Box component="span" className={classes.img}>
                <img src={image.src} alt={image.alt} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
