import { useTheme } from '@emotion/react'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Grid,
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
import Link from 'src/common/Link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    zIndex: 1000,
    position: 'relative',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    // marginBottom: '0.25rem',
  },
  tabContainer: {
    // border: '0.1px solid red',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabWrapper: {
    // border: '0.1px solid green',
    padding: '1rem 1.5rem',
    '&:hover': {
      '& $menu': {
        visibility: 'visible',
      },
      '&  $backdrop': {
        display: 'block',
      },
    },
  },
  tab: {
    padding: '1rem 0.25rem',
    '&:hover': {
      color: 'orange',
    },
  },
  menu: {
    visibility: 'hidden',
    background: '#F8F8F8',
    minHeight: '220px',
    width: '100%',
    position: 'absolute',
    top: '3.75rem',
    left: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    overflow: 'scroll',
    zIndex: 900,
  },
  menuColumn: {
    width: '33%',
    position: 'relative',
    // zIndex: 1,
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  menuItemWrapper: {
    '&:hover': {
      '& $subMenu': {
        visibility: 'visible',
      },
    },
  },
  menuItem: {
    textAlign: 'left',
    padding: '0.15rem 5rem',
    cursor: 'pointer',
    fontSize: '0.8rem',
    '&:hover': {
      color: 'orange',
    },
  },
  subMenu: {
    visibility: 'hidden',
    position: 'absolute',
    left: '100%',
    top: '0',
    display: 'flex',
    height: '100%',
    width: '200%',
    gap: '1rem',
  },
  subMenuColumn: {
    // border: '0.1px solid green',
    position: 'relative',
    textAlign: 'center',
    padding: '0.15rem 2rem',
    overflow: 'scroll',
    flexGrow: 1,
  },
  subMenuImageColumn: {
    position: 'relative',
    textAlign: 'center',
    height: '100%',
    flexGrow: 2,
  },
  subMenuItem: {
    fontSize: '0.8rem',
    cursor: 'pointer',
    padding: '0.15rem 0rem',
    '&:hover': {
      color: 'orange',
    },
  },
  backdrop: {
    display: 'none',
    position: 'fixed',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    left: 0,
    top: 150,
    zIndex: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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

export default function HeaderVanilla(props) {
  const classes = useStyles(props)
  const router = useRouter()

  const routes = [
    {
      name: 'Home',
      link: '/',
      value: 0,
    },
    {
      name: 'Shop',
      link: '/shop',
      value: 1,
      menu: [
        {
          name: 'Mens',
          link: '/shop/jackets',
          subMenu: [
            {
              name: 'Sub Menu Item',
              link: '/test',
            },
            {
              name: 'Item2',
              link: '/test',
            },
            {
              name: 'Item3',
              link: '/test',
            },
          ],
        },
        {
          name: 'Test',
          link: '/test',
        },
        {
          name: '404',
          link: '/notfoundpage',
        },
      ],
    },
    {
      name: 'Test',
      link: '/test',
      value: 2,
      menu: [
        {
          name: 'Womens',
          link: '/shop/hats',
          subMenu: [
            {
              name: 'Sub Menu Item',
              link: '/test',
            },
            {
              name: 'Item2',
              link: '/test',
            },
            {
              name: 'Item3',
              link: '/test',
            },
            {
              name: 'Sub Menu Item',
              link: '/test',
            },
          ],
          subMenuImages: [
            {
              src: 'https://i.ibb.co/GCCdy8t/womens.png',
              alt: 'Shop Women',
            },
          ],
        },
        {
          name: 'Mens',
          link: '/shop/jackets',
        },
        {
          name: 'Test',
          link: '/test',
        },
        {
          name: '404',
          link: '/notfoundpage',
        },
        {
          name: 'A very long menu item name to test containerr width',
          link: '/shop/hats',
        },
        {
          name: 'Mens',
          link: '/shop/jackets',
          subMenu: [
            {
              name: 'Sub Menu Item',
              link: '/test',
            },
            {
              name: 'Item2',
              link: '/test',
            },
          ],
          subMenuImages: [
            {
              src: 'https://i.ibb.co/R70vBrQ/men.png',
              alt: 'Shop Men',
            },
            {
              src: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              alt: 'Shop Sneakers',
            },
          ],
        },
        {
          name: 'Test',
          link: '/test',
        },
        {
          name: '404',
          link: '/notfoundpage',
        },
      ],
    },
  ]

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="sticky" className={classes.appbar}>
          <Toolbar disableGutters className={classes.toolbar}>
            <Hidden smDown>
              <div className={classes.tabContainer}>
                {routes.map((route, i) => (
                  <div className={classes.tabWrapper} key={i}>
                    <Link
                      key={i}
                      className={classes.tab}
                      href={route.link}
                      sx={{
                        borderBottom:
                          router.pathname === route.link && '2px solid orange',
                      }}
                    >
                      {route.name}
                    </Link>
                    {route.menu && (
                      <>
                        <div className={classes.menu}>
                          <div
                            className={classes.menuColumn}
                            style={{ borderRight: '1px solid orange' }}
                          >
                            {route.menu.map((option, index) => (
                              <div
                                key={index}
                                className={classes.menuItemWrapper}
                              >
                                <span className={classes.menuItem}>
                                  {option.name}
                                  {option.subMenu && <span> &gt;</span>}
                                </span>
                                {option.subMenu && (
                                  <div className={classes.subMenu}>
                                    <div className={classes.subMenuColumn}>
                                      {option.subMenu.map(
                                        (subMenuItem, index2) => (
                                          <div
                                            className={classes.subMenuItem}
                                            key={index2}
                                          >
                                            {subMenuItem.name}
                                          </div>
                                        )
                                      )}
                                    </div>
                                    {option.subMenuImages?.map(
                                      (subMenuImage, index3) => (
                                        <div
                                          className={classes.subMenuImageColumn}
                                          key={index3}
                                        >
                                          <Image
                                            src={subMenuImage.src}
                                            layout="fill"
                                            alt={subMenuImage.alt}
                                            style={{ cursor: 'pointer' }}
                                          />
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* <div className={classes.backdrop} /> */}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {/* <div className={classes.toolbarMargin} /> */}
    </>
  )
}
