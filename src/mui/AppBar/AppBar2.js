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
  Box,
  ClickAwayListener,
  Fade,
  Grow,
  MenuList,
  Paper,
  Popper,
  Tab,
  Tabs,
} from '@mui/material'
import Link from 'next/link'
import CustomizedMenus from './Menu'

const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
    appBar: {
      // border: '1px solid red',
      backgroundColor: 'lightgray',
    },
    logo: {
      position: 'relative',
      height: '2.5rem',
      // width: '3rem',
      // border: '1px solid red',
    },
    popperMenuList: {
      border: '1px solid red',
      padding: theme.spacing(1),
      marginTop: '0.5rem', // to cover the appbar margin. appbar by default has 0.5 rem margin on bottom probably
    },
    tab: {
      // marginLeft: '2rem',
      //   border: '1px solid red',
    },
    tabText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
    appBarTypography: {
      // flexGrow: 1,
      cursor: 'pointer',
      // border: '1px solid red',
      textTransform: 'uppercase',
      letterSpacing: '0.04rem',
      paddingLeft: '1rem',
    },
    appBarIcon: {
      height: '1.5rem',
      // width: '1.5rem',
    },
    active: {
      //   border: '1px solid red',
      borderBottom: '1px solid black',
      borderRadius: 0,
    },
    popper: {
      border: '1px solid gray',
      background: 'white',
      zIndex: 1,
      position: 'absolute',
      top: '12rem',
      left: '12rem',
    },
  }
})

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

const AppBar2 = (props) => {
  const {
    setValue,
    value,
    setSelectedIndex,
    selectedIndex,
    routes,
    menuOptions,
  } = props
  const classes = useStyles()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(!openMenu)
  }

  const handleClose = (e) => {
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
  }

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
            {routes.map((route) => {
              switch (route.type) {
                case 'logo':
                  return (
                    <Button
                      key={route.type}
                      className={classes.logo}
                      onClick={() => router.push(route.link)}
                      disableRipple
                    >
                      <Image src={route.path} layout="fill" alt="App logo" />
                    </Button>
                  )
                case 'typography':
                  return (
                    <Typography
                      key={route.type}
                      variant="h6"
                      component="div"
                      className={classes.appBarTypography}
                      sx={{
                        flexGrow: route.grow && 1, // pushes rest of the routes to the right
                      }}
                      onClick={() => router.push(route.link)}
                    >
                      {route.name}
                    </Typography>
                  )
                case 'standard': // Active thing is working, but we are not using value key which is a required prop with tabs, hence moving to Button or Typography
                  //   return (
                  // <Tabs
                  //   key={route.type}
                  //   //   value={value}
                  //   //   onChange={handleChange}
                  //   indicatorColor="primary"
                  // >
                  //   {route.routes.map((standardRoute, index) => (
                  //     // Following Code breaks compatibility between Tabs and Tab
                  //     /*
                  //     <Link
                  //       key={standardRoute.link}
                  //       href={standardRoute.link}
                  //       passHref
                  //       //   value={standardRoute.value}
                  //     >
                  //       <Tab
                  //         className={classes.popper}
                  //         key={`${standardRoute}${index}`}
                  //         label={standardRoute.name}
                  //         aria-owns={standardRoute.ariaOwns}
                  //         aria-haspopup={standardRoute.ariaPopup}
                  //         // onMouseOver={standardRoute.mouseOver}
                  //         // onMouseLeave={() => setOpenMenu(false)}
                  //       />
                  //     </Link>
                  //     */
                  //     <Tab
                  //       key={`${standardRoute}${index}`}
                  //       //   value={standardRoute.value}
                  //       className={[
                  //         classes.tab,
                  //         router.pathname === standardRoute.link &&
                  //           classes.active,
                  //       ]}
                  //       label={
                  //         <Link href={standardRoute.link} passHref>
                  //           <Typography
                  //             className={classes.tabText}
                  //             component="a"
                  //             sx={{
                  //               position: 'absolute',
                  //               top: 0,
                  //               left: 0,
                  //               right: 0,
                  //               bottom: 0,
                  //             }}
                  //           >
                  //             {standardRoute.name}
                  //           </Typography>
                  //         </Link>
                  //       }
                  //       aria-owns={standardRoute.ariaOwns}
                  //       aria-haspopup={standardRoute.ariaPopup}
                  //       // onMouseOver={standardRoute.mouseOver}
                  //       // onMouseLeave={() => setOpenMenu(false)}
                  //     />
                  //   ))}
                  // </Tabs>
                  //   )
                  // Version 2: Commenting as we are moving to customised menu again
                  return route.routes.map((standardRoute) =>
                    standardRoute.hasMenuList ? (
                      //   <>
                      //     <Button
                      //       color="inherit"
                      //       className={
                      //         router.pathname === standardRoute.link
                      //           ? classes.active
                      //           : null
                      //       }
                      //       disableRipple
                      //       //   onClick={handleClick}
                      //       onMouseOver={() => setOpenMenu(true)}
                      //       sx={{ position: 'relative' }}
                      //     >
                      //       {standardRoute.name}
                      //     </Button>
                      //     <Popper
                      //       id="test"
                      //       open={openMenu}
                      //       anchorEl={anchorEl}
                      //       transition
                      //       className={classes.popper}
                      //     >
                      //       {({ TransitionProps }) => (
                      //         <Fade {...TransitionProps} timeout={150}>
                      //           <Box>
                      //             <ClickAwayListener onClickAway={handleClose}>
                      //               <MenuList
                      //                 disablePadding
                      //                 autoFocusItem={false}
                      //                 onMouseLeave={handleClose}
                      //               >
                      //                 {standardRoute.menuOptions.map(
                      //                   (menuItem) => (
                      //                     <Link href={menuItem.link} passHref>
                      //                       <MenuItem
                      //                         onClick={(event) => {
                      //                           handleMenuItemClick(event)
                      //                           handleClose()
                      //                         }}
                      //                       >
                      //                         {menuItem.name}
                      //                       </MenuItem>
                      //                     </Link>
                      //                   )
                      //                 )}
                      //               </MenuList>
                      //             </ClickAwayListener>
                      //           </Box>
                      //         </Fade>
                      //       )}
                      //     </Popper>
                      //   </>
                      <CustomizedMenus option={standardRoute} />
                    ) : (
                      <Button
                        color="inherit"
                        onClick={() => router.push(standardRoute.link)}
                        className={[
                          router.pathname === standardRoute.link &&
                            classes.active,
                        ]}
                        disableRipple
                      >
                        {standardRoute.name}
                      </Button>
                    )
                  )

                case 'action':
                  return (
                    <Button
                      color="inherit"
                      onClick={() => router.push(route.link)}
                      className={[
                        router.pathname === route.link && classes.active,
                      ]}
                      disableRipple
                    >
                      {route.name}
                    </Button>
                  )
                case 'icon':
                  return (
                    <Button
                      onClick={() => route.onClick()}
                      className={classes.appBarIcon}
                    >
                      <Image src={route.path} layout="fill" alt={route.alt} />
                    </Button>
                  )
                default:
                  return null
              }
            })}
          </Toolbar>
        </MuiAppBar>
      </ElevationScroll>
    </div>
  )
}

export default AppBar2
