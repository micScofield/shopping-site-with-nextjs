// import { Button as MuiButton } from '@mui/material'

// export default {
//   title: 'sample/Button',
//   component: MuiButton,
// }

// export const Button = (args) => <MuiButton {...args}>{args.label}</MuiButton>

// Button.args = {
//   label: 'Sanyam',
// }

import React from 'react'

import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui5'

import { withStyles } from '@mui/styles'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

const action = (msg) => () => console.log(msg)

const MaterialComponent = withStyles(
  (theme) => ({
    card: {
      maxWidth: 800,
      margin: 'auto',
    },
    media: {
      height: 0,
      paddingTop: '30%', // 16:9
    },
  }),
  { withTheme: true }
)(({ classes, variant }) => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image="https://source.unsplash.com/800x400?cities,nature"
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        How to use Storybook
      </Typography>
      <Typography component="p">
        $ yarn storybook # to launch Storybook
      </Typography>
      <Typography component="p">
        Select the story from the left panel
      </Typography>
      <Typography component="p">
        Ctrl-Shift-F to toggle Fullscreen mode
      </Typography>
      <Typography component="p">
        Select the theme from Material-UI addon panel dropdown
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant={variant} onClick={action('Default')}>
        Default
      </Button>
      <Button
        size="small"
        color="primary"
        variant={variant}
        onClick={action('primary')}
      >
        primary
      </Button>
      <Button
        size="small"
        color="secondary"
        variant={variant}
        onClick={action('secondary')}
      >
        secondary
      </Button>
      <Button
        size="small"
        disabled
        variant={variant}
        onClick={action('disabled')}
      >
        disabled
      </Button>
    </CardActions>
  </Card>
))

storiesOf('Card With Buttons', module)
  .addDecorator(muiTheme())
  .add('Text Buttons', () => <MaterialComponent />)
  .add('Outlined Buttons', () => <MaterialComponent variant="outlined" />)
  .add('Contained Buttons', () => <MaterialComponent variant="contained" />)
