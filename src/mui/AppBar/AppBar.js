import React, { useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MuiAppBar from '@mui/material/AppBar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Image from 'next/image'
import { useRouter } from 'next/router'
import makeStyles from '@mui/styles/makeStyles'
import { styled, alpha } from '@mui/material/styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import Divider from '@mui/material/Divider'
import ArchiveIcon from '@mui/icons-material/Archive'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
  Tab,
  Tabs,
} from '@mui/material'
import Link from 'next/link'
import CustomizedMenus from './Menu'

const useStyles = makeStyles((theme) => ({
  appBar: {
    border: '1px solid red',
    backgroundColor: 'lightgray',
  },
  logo: {
    position: 'relative',
    height: '1.75rem',
    // width: '1.75rem', // of the button container, svg's width can't be changed from here
    border: '1px solid red',
  },
  options: {
    border: '1px solid red',
  },
  popperMenuList: {
    border: '1px solid red',
    padding: theme.spacing(1),
    marginTop: '0.5rem', // to cover the appbar margin. appbar by default has 0.5 rem margin on bottom probably
  },
  popper: {
    // marginLeft: '2rem',
    border: '1px solid red',
  },
}))

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0, // elevate as soon as user starts scrolling
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

function AppBar(props) {
  const { setValue, value, setSelectedIndex, selectedIndex, menuOptions } =
    props
  const classes = useStyles()

  const [openDrawer, setOpenDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const routes = [
    {
      name: 'Test',
      link: '/test',
      type: 'standard',
      // activeIndex: 0,
      // ariaOwns: anchorEl ? 'simple-menu' : undefined,
      // ariaPopup: anchorEl ? 'true' : undefined,
      // mouseOver: (event) => handleClick(event),
    },
    {
      name: 'Test2',
      link: '/test2',
      // activeIndex: 1,
      // ariaOwns: anchorEl ? 'simple-menu' : undefined,
      // ariaPopup: anchorEl ? 'true' : undefined,
      // mouseOver: (event) => handleClick(event),
    },
  ]

  const shoppingBagClickHandler = (e) => {
    e.preventDefault()

    // open a modal screen (for cart)
  }

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClick = (e) => {
    console.log('open')
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleClose = (e) => {
    console.log('Close')
    setAnchorEl(null)
    setOpenMenu(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpenMenu(false)
    }
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    setSelectedIndex(i)
  }

  const router = useRouter()
  return (
    <div>
      <ElevationScroll {...props}>
        <MuiAppBar
          position="fixed"
          color="inherit"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar variant="regular">
            <Button onClick={() => router.push('/')} className={classes.logo}>
              <Image
                src="/assets/crown.svg"
                // height="30"
                // width="30"
                layout="fill"
                alt="App logo"
              />
            </Button>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                cursor: 'pointer',
                border: '1px solid red',
                textTransform: 'uppercase',
                letterSpacing: '0.04rem',
                paddingLeft: '1rem',
              }}
              onClick={() => router.push('/')}
            >
              Crown Clothing
            </Typography>
            <Button color="inherit" onClick={() => router.push('/shop')}>
              Shop
            </Button>
            {/* <CustomizedMenus /> */}
            <div>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
              >
                {routes.map((route, index) => (
                  <Link href={route.link} passHref key={route.link}>
                    <Tab
                      className={classes.popper}
                      key={`${route}${index}`}
                      label={route.name}
                      aria-owns={route.ariaOwns}
                      aria-haspopup={route.ariaPopup}
                      onMouseOver={route.mouseOver}
                      onMouseLeave={() => setOpenMenu(false)}
                    />
                  </Link>
                ))}
              </Tabs>
            </div>
            <Button color="inherit" onClick={() => router.push('/signin')}>
              Sign In
            </Button>
            <Button onClick={() => shoppingBagClickHandler()}>
              <Image
                src="/assets/shopping-bag.svg"
                height="25"
                width="25"
                alt="App logo"
              />
            </Button>
            <Popper
              open={openMenu}
              anchorEl={anchorEl}
              placement="bottom-start"
              role={undefined}
              transition
              disablePortal
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
                        onMouseOver={() => setOpenMenu(true)}
                        onMouseLeave={handleClose}
                        disablePadding
                        className={classes.popperMenuList}
                        autoFocusItem={false}
                        id="simple-menu"
                        onKeyDown={() => handleListKeyDown()}
                      >
                        {menuOptions.map((option, i) => (
                          <div key={i}>
                            <Link href={option.link} passHref>
                              <MenuItem
                                key={`${option}${i}`}
                                classes={{ root: classes.menuItem }}
                                onClick={(event) => {
                                  handleMenuItemClick(event, i)
                                  setValue(1)
                                  handleClose()
                                }}
                                selected={
                                  i === selectedIndex &&
                                  value === 1 &&
                                  window.location.pathname !== '/services'
                                }
                              >
                                {option.name}
                              </MenuItem>
                            </Link>
                            <Divider sx={{ my: 0.2 }} />
                          </div>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Toolbar>
        </MuiAppBar>
      </ElevationScroll>
    </div>
  )
}

export default AppBar
