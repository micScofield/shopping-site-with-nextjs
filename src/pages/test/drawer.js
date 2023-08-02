import { useState } from 'react'
import { Drawer, Fade } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    opacity: 0,
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerPaperVisible: {
    opacity: 1,
  },
  nestedDrawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  nestedDrawerPaper: {
    width: drawerWidth,
    opacity: 0,
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  nestedDrawerPaperVisible: {
    opacity: 1,
  },
}))

function MyComponent() {
  const classes = useStyles()
  const [outerOpen, setOuterOpen] = useState(false)
  const [innerOpen, setInnerOpen] = useState(false)

  const handleOuterToggleDrawer = () => {
    setOuterOpen(!outerOpen)
  }

  const handleInnerToggleDrawer = () => {
    setInnerOpen(!innerOpen)
  }

  return (
    <div>
      <button onClick={handleOuterToggleDrawer}>Toggle Outer Drawer</button>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: `${classes.drawerPaper} ${
            outerOpen ? classes.drawerPaperVisible : ''
          }`,
        }}
        open={outerOpen}
        variant="persistent"
        anchor="left"
      >
        <h1>Outer Drawer Content</h1>
        <button onClick={handleInnerToggleDrawer}>Toggle Inner Drawer</button>
        <Drawer
          className={classes.nestedDrawer}
          classes={{
            paper: `${classes.nestedDrawerPaper} ${
              innerOpen ? classes.nestedDrawerPaperVisible : ''
            }`,
          }}
          transitionDuration={{ enter: 300, exit: 300 }}
          TransitionComponent={Fade}
          open={innerOpen}
          variant="persistent"
          anchor="left"
        >
          <h1>Inner Drawer Content</h1>
        </Drawer>
      </Drawer>
    </div>
  )
}

export default MyComponent
