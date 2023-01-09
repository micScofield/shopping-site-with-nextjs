import { useTheme } from '@emotion/react'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Button,
  ClickAwayListener,
  Grow,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  SwipeableDrawer,
  Tab,
  Tabs,
  useMediaQuery,
} from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import makeStyles from '@mui/styles/makeStyles'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbar: {
    border: '1px solid gray',
    backgroundColor: 'white',
    color: theme.palette.primary.main,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '0.25rem',
  },
  logoContainer: {
    // border: '1px solid gray',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  logo: {
    position: 'relative',
    marginLeft: '2rem',
    height: '2.5rem',
    width: '2.5rem',
    cursor: 'pointer',
  },
  cartContainer: {
    position: 'relative',
    height: '1.5rem',
  },
  //   tabContainer: {
  //     '& .MuiTabs-indicator': {
  //       backgroundColor: 'blue',
  //       //   display: 'none',
  //     },
  //   },
  tab: {
    opacity: 0.8,
    '&:hover': {
      opacity: 1,
    },
    '&.Mui-selected': {
      color: 'black',
    },
  },
  drawer: {
    width: '30%',
  },
  drawerList: {
    // border: '1px solid red',
  },
  drawerListItem: {
    cursor: 'pointer',
    opacity: 0.8,
    '&:hover': {
      opacity: 1,
    },
  },
  // Another way to change root styles is using Mui class names. See tabContainer class for eg
  //   tabIndicator: {
  //     backgroundColor: 'blue',
  //   },
  menu: {
    border: '1px solid gray',
    borderRadius: 0,
    marginTop: '0.5rem',
    width: '150px',
    padding: '0.5rem',
  },
  menuItem: {
    opacity: 0.8,
    '&:hover': {
      backgroundColor: 'white',
      opacity: 1,
    },
  },
}))

export default function Header(props) {
  const [value, setValue] = useState(0)
  const classes = useStyles(props)
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const router = useRouter()

  const [openDrawer, setOpenDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)

  // const [previousURL, setPreviousURL] = useState('')

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }
  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const handleMenuItemClick = (e, i, link) => {
    setAnchorEl(null)
    setOpenMenu(false)
    router.push(link)
    //   setSelectedIndex(i)
  }

  const menuOptions = [
    {
      name: 'Hats',
      link: '/shop/hats',
    },
    {
      name: 'Jackets',
      link: '/shop/jackets',
    },
    {
      name: 'Test',
      link: '/test',
    },
  ]

  const path = typeof window !== 'undefined' && window.location.pathname

  useEffect(() => {
    switch (path) {
      case '/': {
        setValue(0)
        break
      }
      case '/shop': {
        setValue(1)
        break
      }
      case '/signin': {
        setValue(2)
        break
      }
      default: {
        setValue(0)
      }
    }
  }, [path])

  const routes = [
    { name: 'Home', link: '/', value: 0 },
    {
      name: 'Shop',
      link: '/shop',
      value: 1,
      //   ariaOwns: anchorEl ? 'simple-menu' : undefined,
      //   ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: 'Sign In', link: '/signin', value: 2 },
  ]

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpenMenu(false)
    }
  }

  const tabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        // indicatorColor="primary"
        value={value}
        classes={{
          indicator: classes.tabIndicator,
        }}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            label={
              <Link href={route.link} passHref>
                <Typography className={classes.tab}>{route.name}</Typography>
              </Link>
            }
            // classes={{
            //   selected: classes.tabSelected,
            // }}
            className={classes.tab}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={() => setOpenMenu(false)}
          />
        ))}
      </Tabs>
      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        placement="bottom-start"
        role={undefined}
        transition
        disablePortal
        onMouseOver={() => setOpenMenu(true)}
        onMouseLeave={handleClose}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'top left',
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  //   onMouseOver={() => setOpenMenu(true)}
                  //   onMouseLeave={handleClose}
                  disablePadding
                  autoFocusItem={false}
                  id="simple-menu"
                  onKeyDown={() => handleListKeyDown()}
                >
                  {menuOptions.map((option, i) => (
                    <MenuItem
                      divider
                      key={`${option}${i}`}
                      classes={{ root: classes.menuItem }}
                      onClick={(event) => {
                        handleMenuItemClick(event, i, option.link)
                      }}
                    >
                      {/* <Link href={option.link}>{option.name}</Link> */}
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding className={classes.drawerList}>
          {routes.map((route, index) => (
            <ListItem
              divider
              className={classes.drawerListItem}
              key={`${route}${index}`}
              onClick={() => {
                setOpenDrawer(false)
                setValue(route.value)
                router.push(route.link)
              }}
            >
              <ListItemText className={classes.drawerItem}>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.logo} />
      </IconButton>
    </>
  )

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters className={classes.toolbar}>
            <div className={classes.logoContainer}>
              <div className={classes.logo} onClick={() => router.push('/')}>
                <Image
                  src="/assets/crown.svg"
                  alt="App logo"
                  // height="2rem"
                  // width="2rem"
                  layout="fill"
                />
              </div>
            </div>
            <Hidden smDown>{tabs}</Hidden>
            <Hidden smDown>
              <Button
                onClick={() => router.push('/cart')}
                className={classes.cartContainer}
                aria-label="Shopping Bag"
              >
                <Image
                  className={classes.logo}
                  src="/assets/shopping-bag.svg"
                  layout="fill"
                  alt="Shopping Bag"
                />
              </Button>
            </Hidden>
            <Hidden smUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Push content down */}
      {/* <div className={classes.toolbarMargin} /> */}
    </>
  )
}
