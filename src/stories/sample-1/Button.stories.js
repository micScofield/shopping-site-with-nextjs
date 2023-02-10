import React from 'react'
import { storiesOf } from '@storybook/react'
import withMUITheme from 'src/storybook/addons/withMuiTheme'
import { Button, Grid } from '@mui/material'

storiesOf('Button', module)
  .addDecorator(withMUITheme)
  .add('Contained Button', () => (
    <Button variant="contained">My Contained</Button>
  ))
  .add('Outlined Button', () => (
    <Button variant="outlined">My Secondary</Button>
  ))
  .add('Text Button', () => <Button variant="text">My text</Button>)
  .add('Disabled Primary Button', () => (
    <Button disabled variant="contained">
      Disabled
    </Button>
  ))
  .add('Button with very long label', () => (
    <Button variant="contained">
      Do you know the muffin man the muffin man the muffin man
    </Button>
  ))
  .add('Button in a grid (To show it will truncate text)', () => (
    <Grid container spacing={1}>
      <Grid item xs={10}>
        <div>Testing what happens with long label in button</div>
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained">
          Do you know the muffin man the muffin man the muffin man
        </Button>
      </Grid>
    </Grid>
  ))
