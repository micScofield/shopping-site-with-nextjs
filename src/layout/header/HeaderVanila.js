import { useTheme } from '@emotion/react'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Hidden, IconButton, SwipeableDrawer } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import makeStyles from '@mui/styles/makeStyles'
import Image from 'next/image'
import Link from 'src/common/Link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { KeyboardArrowRight } from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    zIndex: 1000,
    position: 'relative',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    // border: '0.1px solid red',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabWrapper: {
    boxSizing: 'border-box',
    padding: '1rem 1.5rem',
    '&:hover': {
      borderBottom: '2px solid orange',
      '& $menu': {
        visibility: 'visible',
      },
      '&  ~$backdrop': {
        display: 'block',
      },
    },
  },
  tab: {
    padding: '1rem 0.25rem',
    '&:hover': {
      // color: 'orange',
      // borderBottom: '2px solid orange',
    },
  },
  menu: {
    visibility: 'hidden',
    background: '#F8F8F8',
    minHeight: '220px',
    width: '100%',
    position: 'absolute',
    top: '3.85rem',
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
    padding: '0.25rem 3rem',
    cursor: 'pointer',
    fontSize: '0.8rem',
    '&:hover': {
      color: 'orange',
    },
    display: 'flex',
    justifyContent: 'flex-start',
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
    padding: '0.25rem 0rem',
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
  hamburgerIcon: {
    position: 'relative',
    marginLeft: '0.5rem',
    height: '2.5rem',
    width: '2.5rem',
    cursor: 'pointer',
  },
  drawer: {
    width: '40%',
  },
  drawerTabContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  drawerTabWrapper: {
    padding: '1rem 1.5rem',
  },
  drawerTab: {
    padding: '1rem 0.25rem',
    '&:hover': {
      color: 'orange',
    },
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

export default function HeaderVanila(props) {
  const classes = useStyles(props)
  const router = useRouter()

  const [openDrawer, setOpenDrawer] = useState(false)

  const iOS =
    typeof window !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

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
          link: '/shop/men',
          subMenu: [
            {
              name: 'i18n',
              link: '/test/i18n',
            },
            {
              name: 'Lazy Loading',
              link: '/test/lazy-loading',
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
          link: '/shop/womens',
          subMenu: [
            {
              name: 'Test',
              link: '/test',
            },
            {
              name: 'i18n',
              link: '/test/i18n',
            },
            {
              name: 'Lazy Loading',
              link: '/test/lazy-loading',
            },
            {
              name: 'Test',
              link: '/test',
            },
          ],
          subMenuImages: [
            {
              src: 'https://i.ibb.co/px2tCc3/jackets.png',
              alt: 'Shop Jackets',
            },
          ],
        },
        {
          name: 'Mens',
          link: '/shop/men',
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
          name: 'A long menu item \n name to test width',
          link: '/test',
        },
        {
          name: 'Hats',
          link: '/shop/hats',
          subMenu: [
            {
              name: 'Sub Menu Item 1',
              link: '/test',
            },
            {
              name: 'Item2',
              link: '/test',
            },
          ],
          subMenuImages: [
            {
              src: 'https://i.ibb.co/cvpntL1/hats.png',
              alt: 'Shop Hats',
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
        <div className={classes.drawerTabContainer}>
          {routes.map((route, i) => (
            <div className={classes.drawerTabWrapper} key={i}>
              <Link key={i} className={classes.drawerTab} href={route.link}>
                {route.name}
              </Link>
            </div>
          ))}
        </div>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.hamburgerIcon} />
      </IconButton>
    </>
  )

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="sticky" className={classes.appbar}>
          <Toolbar disableGutters className={classes.toolbar}>
            <Hidden smDown>
              <div className={classes.tabContainer}>
                {routes.map((route, i) => (
                  <div key={i}>
                    <div className={classes.tabWrapper}>
                      <Link
                        key={i}
                        className={classes.tab}
                        href={route.link}
                        // sx={{
                        //   borderBottom:
                        //     router.pathname === route.link && '2px solid orange',
                        // }}
                      >
                        {route.name}
                      </Link>
                      {route.menu && (
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
                                <div
                                  className={classes.menuItem}
                                  onClick={() => router.push(option.link)}
                                >
                                  {option.name}
                                  {option.subMenu && <KeyboardArrowRight />}
                                </div>
                                {option.subMenu && (
                                  <div className={classes.subMenu}>
                                    <div className={classes.subMenuColumn}>
                                      {option.subMenu.map(
                                        (subMenuItem, index2) => (
                                          <div
                                            className={classes.subMenuItem}
                                            key={index2}
                                            onClick={() =>
                                              router.push(subMenuItem.link)
                                            }
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
                      )}
                    </div>
                    <div className={classes.backdrop} />
                  </div>
                ))}
              </div>
            </Hidden>
            <Hidden smUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {/* <div className={classes.toolbarMargin} /> */}
    </>
  )
}
