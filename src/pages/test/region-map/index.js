import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Grid } from '@mui/material'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    marginTop: '15rem',
    position: 'relative',
  },
  imagePiece: {
    position: 'absolute',
    height: '100px',
    width: '100px',
  },
  piece1: {
    top: 0,
    left: 0,
  },
  piece3: {
    top: 0,
    right: 0,
  },
  piece2: {
    bottom: 0,
    left: 0,
  },
  piece4: {
    bottom: 0,
    right: 0,
  },
}))

const YourComponent = () => {
  const classes = useStyles()

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <div className={classes.imageContainer}>
          <img
            src="/assets/map/main-post.png"
            className={`${classes.imagePiece} ${classes.piece1}`}
            alt="Piece 1"
          />
          <img
            src="/assets/map/golden-gate.png"
            className={`${classes.imagePiece} ${classes.piece2}`}
            alt="Piece 2"
          />
          <img
            src="/assets/map/crissy-field.png"
            className={`${classes.imagePiece} ${classes.piece3}`}
            alt="Piece 3"
          />
          <img
            src="/assets/map/southern-wild.png"
            className={`${classes.imagePiece} ${classes.piece4}`}
            alt="Piece 4"
          />
        </div>
      </Grid>
    </Grid>
  )
}

export default YourComponent
