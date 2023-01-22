import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import theme from 'src/styles/theme'

const useStyles = makeStyles(() => ({
  imageContainer: {
    position: 'relative',
    width: '30rem',
    height: '20rem',
  },
  image: {},
}))

function GridSection() {
  const classes = useStyles()
  console.log(theme)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ width: '95%' }}
      >
        <Grid container sm={12} md={6} item>
          <Grid item sx={{ padding: theme.spacing(3, 6) }}>
            <Typography variant="h3">Header</Typography>
            <Typography variant="h6">Sub Header</Typography>
            <Typography variant="subtitle1" sx={{ marginTop: '1rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              voluptatibus facilis error quam? Delectus amet totam excepturi
              numquam facere rem laudantium a temporibus architecto voluptatem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ex quaerat excepturi atque laudantium numquam accusamus
              ducimus nihil veniam recusandae, nesciunt, fuga autem ipsum
              maxime? Optio molestiae ipsa itaque ex dicta sed reprehenderit
              ipsam eligendi tempora! Fuga, minima in fugit aperiam qui
              molestiae quidem suscipit ipsa eaque facilis excepturi enim!
            </Typography>
          </Grid>
        </Grid>
        <Grid container md={6} item className={classes.imageContainer}>
          <Image
            className={classes.image}
            src="https://i.ibb.co/GCCdy8t/womens.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ width: '95%' }}
      >
        <Grid container md={6} item className={classes.imageContainer}>
          <Image
            className={classes.image}
            src="https://i.ibb.co/R70vBrQ/men.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Grid>
        <Grid container sm={12} md={6} item>
          <Grid item sx={{ padding: theme.spacing(3, 6) }}>
            <Typography variant="h3">Header</Typography>
            <Typography variant="h6">Sub Header</Typography>
            <Typography variant="subtitle1" sx={{ marginTop: '1rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              voluptatibus facilis error quam? Delectus amet totam excepturi
              numquam facere rem laudantium a temporibus architecto voluptatem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default GridSection
