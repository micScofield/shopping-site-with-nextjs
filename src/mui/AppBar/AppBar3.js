import React, { useEffect, useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MuiAppBar from '@mui/material/AppBar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
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
// import ExpansionPanel from '@material-ui/core/ExpansionPanel'
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import {
  AppBar,
  ClickAwayListener,
  Grow,
  Hidden,
  List,
  MenuList,
  Paper,
  Popper,
  SwipeableDrawer,
  Tab,
  Tabs,
  useMediaQuery,
} from '@mui/material'
import Link from 'next/link'
import { useTheme } from '@emotion/react'

import CustomizedMenus from './Menu'

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
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: '100px',
    // marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    color: 'black',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.black,
    color: 'white',
    borderRadius: '0px',
    zIndex: 1302,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  //   drawerIcon: {
  //     height: '50px',
  //     width: '50px',
  //   },
  //   drawerIconContainer: {
  //     marginLeft: 'auto',
  //     '&:hover': {
  //       backgroundColor: 'transparent',
  //     },
  //   },
  //   drawer: {
  //     backgroundColor: theme.palette.common.black,
  //   },
  //   drawerItem: {
  //     ...theme.typography.tab,
  //     color: 'white',
  //     opacity: 0.7,
  //   },
  //   drawerItemEstimate: {
  //     backgroundColor: theme.palette.common.orange,
  //   },
  //   drawerItemSelected: {
  //     '& .MuiListItemText-root': {
  //       opacity: 1,
  //     },
  //   },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  //   expansion: {
  //     backgroundColor: theme.palette.common.black,
  //     borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  //     '&.Mui-expanded': {
  //       margin: 0,
  //       borderBottom: 0,
  //     },
  //     '&::before': {
  //       backgroundColor: 'rgba(0, 0, 0, 0)',
  //     },
  //   },
  //   expansionDetails: {
  //     padding: 0,
  //     backgroundColor: theme.palette.primary.light,
  //   },
  //   expansionSummary: {
  //     padding: '0 24px 0 16px',
  //     '&:hover': {
  //       backgroundColor: 'rgba(0, 0, 0, 0.08)',
  //     },
  //     // backgroundColor: (props) =>
  //     //   value === 1 ? 'rgba(0, 0, 0, 0.14)' : 'inherit',
  //   },
}))

export default function Header(props) {
  const {
    setValue,
    value,
    setSelectedIndex,
    selectedIndex,
    // routes,
    // menuOptions,
  } = props
  const classes = useStyles(props)
  const theme = useTheme()
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  // const [openDrawer, setOpenDrawer] = useState(false)
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

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const menuOptions = [
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: 'iOS/Android App Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Website Development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 2,
    },
  ]

  const routes = [
    { name: 'Home', link: '/' },
    {
      name: 'Services',
      link: '/services',
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: 'The Revolution', link: '/revolution' },
  ]

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpenMenu(false)
    }
  }

  // function checkPath() {
  //   ;[...menuOptions, ...routes].forEach((route) => {
  //     switch (window.location.pathname) {
  //       case `${route.link}`:
  //         if (value !== route.activeIndex) {
  //           setValue(route.activeIndex)
  //           if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
  //             setSelectedIndex(route.selectedIndex)
  //           }
  //         }
  //         break
  //       case '/estimate':
  //         if (value !== false) {
  //           setValue(false)
  //         }

  //         break
  //       default:
  //         break
  //     }
  //   })
  // }

  const router = useRouter()

  useEffect(() => {
    // if (previousURL !== window.location.pathname) {
    //   setPreviousURL(window.location.pathname)
    //   //   ReactGA.pageview(window.location.pathname + window.location.search)
    // }
    // if (window.performance) {
    //   if (performance.navigation.type == 1) {
    //     checkPath()
    //   }
    // }
  }, [value, menuOptions, selectedIndex, routes, props])

  //   Router.events.on('routeChangeComplete', (url) => {
  //     checkPath()
  //   })

  const tabs = (
    <>
      <Tabs className={classes.tabContainer} indicatorColor="primary">
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            value="0"
            label={
              <Link href={route.link} passHref>
                <Typography
                  className={classes.tab}
                  component="a"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                >
                  {route.name}
                </Typography>
              </Link>
            }
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
                  autoFocusItem={false}
                  id="simple-menu"
                  onKeyDown={() => handleListKeyDown()}
                >
                  {menuOptions.map((option, i) => (
                    <MenuItem
                      key={`${option}${i}`}
                      //   component={Link}
                      //   href={option.link}
                      classes={{ root: classes.menuItem }}
                      onClick={(event) => {
                        // handleMenuItemClick(event, i)
                        setValue(1)
                        handleClose()
                      }}
                      //   selected={
                      //     i === selectedIndex &&
                      //     value === 1 &&
                      //     window.location.pathname !== '/services'
                      //   }
                    >
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

  //   const drawer = (
  //     <>
  //       <SwipeableDrawer
  //         disableBackdropTransition={!iOS}
  //         disableDiscovery={iOS}
  //         open={openDrawer}
  //         onClose={() => setOpenDrawer(false)}
  //         onOpen={() => setOpenDrawer(true)}
  //         classes={{ paper: classes.drawer }}
  //       >
  //         <div className={classes.toolbarMargin} />
  //         <List disablePadding>
  //           {routes.map((route) =>
  //             route.name === 'Services' ? (
  //               <ExpansionPanel
  //                 elevation={0}
  //                 key={route.name}
  //                 classes={{ root: classes.expansion }}
  //               >
  //                 <ExpansionPanelSummary
  //                   classes={{ root: classes.expansionSummary }}
  //                   expandIcon={<ExpandMoreIcon color="secondary" />}
  //                 >
  //                   <ListItemText
  //                     className={classes.drawerItem}
  //                     disableTypography
  //                     style={{ opacity: value === 1 ? 1 : null }}
  //                     onClick={() => {
  //                       setOpenDrawer(false)
  //                       setValue(route.activeIndex)
  //                     }}
  //                   >
  //                     <Link href={route.link} color="inherit">
  //                       {route.name}
  //                     </Link>
  //                   </ListItemText>
  //                 </ExpansionPanelSummary>
  //                 <ExpansionPanelDetails
  //                   classes={{ root: classes.expansionDetails }}
  //                 >
  //                   <Grid container direction="column">
  //                     {menuOptions.map((route) => (
  //                       <Grid item>
  //                         <ListItem
  //                           divider
  //                           key={`${route}${route.seleselectedIndex}`}
  //                           button
  //                           component={Link}
  //                           href={route.link}
  //                           selected={
  //                             selectedIndex === route.selectedIndex &&
  //                             value === 1 &&
  //                             window.location.pathname !== '/services'
  //                           }
  //                           classes={{ selected: classes.drawerItemSelected }}
  //                           onClick={() => {
  //                             setOpenDrawer(false)
  //                             setSelectedIndex(route.selectedIndex)
  //                           }}
  //                         >
  //                           <ListItemText
  //                             className={classes.drawerItem}
  //                             disableTypography
  //                           >
  //                             {route.name
  //                               .split(' ')
  //                               .filter((word) => word !== 'Development')
  //                               .join(' ')}
  //                             <br />
  //                             <span style={{ fontSize: '0.75rem' }}>
  //                               Development
  //                             </span>
  //                           </ListItemText>
  //                         </ListItem>
  //                       </Grid>
  //                     ))}
  //                   </Grid>
  //                 </ExpansionPanelDetails>
  //               </ExpansionPanel>
  //             ) : (
  //               <ListItem
  //                 divider
  //                 key={`${route}${route.activeIndex}`}
  //                 button
  //                 component={Link}
  //                 href={route.link}
  //                 selected={value === route.activeIndex}
  //                 classes={{ selected: classes.drawerItemSelected }}
  //                 onClick={() => {
  //                   setOpenDrawer(false)
  //                   setValue(route.activeIndex)
  //                 }}
  //               >
  //                 <ListItemText className={classes.drawerItem} disableTypography>
  //                   {route.name}
  //                 </ListItemText>
  //               </ListItem>
  //             )
  //           )}
  //           <ListItem
  //             onClick={() => {
  //               setOpenDrawer(false)
  //               setValue(false)
  //               ReactGA.event({
  //                 category: 'Estimate',
  //                 action: 'Mobile Header Pressed',
  //               })
  //             }}
  //             divider
  //             button
  //             component={Link}
  //             classes={{
  //               root: classes.drawerItemEstimate,
  //               selected: classes.drawerItemSelected,
  //             }}
  //             href="/estimate"
  //             selected={value === 5}
  //           >
  //             <ListItemText className={classes.drawerItem} disableTypography>
  //               Free Estimate
  //             </ListItemText>
  //           </ListItem>
  //         </List>
  //       </SwipeableDrawer>
  //       <IconButton
  //         className={classes.drawerIconContainer}
  //         onClick={() => setOpenDrawer(!openDrawer)}
  //         disableRipple
  //       >
  //         <MenuIcon className={classes.drawerIcon} />
  //       </IconButton>
  //     </>
  //   )

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              //   component={Link}
              //   href="/"
              disableRipple
              onClick={() => setValue(0)}
              className={classes.logoContainer}
              style={{ textDecoration: 'none' }}
            >
              <svg
                className={classes.logo}
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 139"
              >
                <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight:300}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
                <path className="st0" d="M-1 139h479.92v.01H-1z" />
                <text
                  transform="translate(261.994 65.233)"
                  className="st1 st2"
                  fontSize="57"
                >
                  Arc
                </text>
                <text
                  transform="translate(17.692 112.015)"
                  className="st1 st2"
                  fontSize="54"
                >
                  Development
                </text>
                <path
                  className="st0"
                  d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
                />
                <path
                  d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                  fill="#0b72b9"
                />
                <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                <g id="Group_186" transform="translate(30.153 11.413)">
                  <g id="Group_185">
                    <g id="Words">
                      <path
                        id="Path_59"
                        className="st1"
                        d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st0"
                  d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
                />
              </svg>
            </Button>
            <Hidden mdDown>{tabs}</Hidden>
            {/* <Hidden lgUp>{drawer}</Hidden> */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
