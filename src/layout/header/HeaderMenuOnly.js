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
    position: 'relative',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    // marginBottom: '0.25rem',
  },
  tab: {
    opacity: 0.8,
    '&:hover': {
      opacity: 1,
      color: 'orange',
    },
    '&.Mui-selected': {
      color: 'black',
    },
  },
  latestMenu: {
    background: '#F8F8F8',
    width: '100%',
    position: 'absolute',
    top: '4rem',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  latestMenuColumn: {
    position: 'relative',
    zIndex: 1,
    padding: '0 5rem',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  latestMenuItem: {
    fontSize: '0.8rem',
    padding: '0.15rem',
    cursor: 'pointer',
    '&:hover': {
      color: 'orange',
    },
  },
  latestMenuDynamicColumn: {
    display: 'flex',
    position: 'relative',
  },
  backdrop: {
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

export default function HeaderMenuOnly(props) {
  const [value, setValue] = useState(0)
  const [openMenu, setOpenMenu] = useState(false)
  const [menuList, setMenuList] = useState(false)
  const classes = useStyles(props)
  const theme = useTheme()
  const router = useRouter()

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
      case '/test': {
        setValue(2)
        break
      }
      default: {
        setValue(0)
      }
    }
  }, [path])

  const handleTabMouseOver = (e, items) => {
    console.log('Over')
    if (items) {
      setOpenMenu(true)
      setMenuList(items)
    } else {
      setOpenMenu(false)
      setMenuList(null)
    }
  }

  const handleTabMouseLeave = (e) => {
    console.log('Out')
    setOpenMenu(false)
    // setMenuList(null)
  }

  const routes = [
    {
      name: 'Home',
      link: '/',
      value: 0,
      mouseOver: (event, items) => handleTabMouseOver(event, items),
    },
    {
      name: 'Shop',
      link: '/shop',
      value: 1,
      mouseOver: (event, items) => handleTabMouseOver(event, items),
      menu: [
        {
          name: 'Womens',
          link: '/shop/hats',
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
          name: 'Womens',
          link: '/shop/hats',
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
              name: 'Test',
              link: '/test',
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
          name: 'Womens',
          link: '/shop/hats',
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
      ],
      mouseOver: (event, items) => handleTabMouseOver(event, items),
    },
  ]

  const tabs = (
    <Tabs
      className={classes.tabContainer}
      // indicatorColor="primary"
      value={value}
      classes={{
        indicator: classes.tabIndicator,
      }}
    >
      {routes.map((route, index) => {
        if (route.mouseOver) {
          return (
            <Tab
              key={`${route}${index}`}
              LinkComponent={Link}
              href={route.link}
              label={route.name}
              className={classes.tab}
              aria-owns={route.ariaOwns}
              aria-haspopup={route.ariaPopup}
              onMouseOver={(e) => route.mouseOver(e, route.menu)}
              onMouseLeave={(e) => handleTabMouseLeave(e)}
            />
          )
        }
        return null
      })}
    </Tabs>
  )

  return (
    <>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar disableGutters className={classes.toolbar}>
          <Hidden smDown>
            {tabs}
            {menuList && (
              <>
                <div className={classes.latestMenu}>
                  <div
                    className={classes.latestMenuColumn}
                    style={{ borderRight: '1px solid orange' }}
                  >
                    {menuList.map((option, i) => (
                      <div key={i} className={classes.latestMenuItem}>
                        {option.name}
                      </div>
                    ))}
                  </div>
                  <div className={classes.latestMenuDynamicColumn}>
                    <div className={classes.latestMenuColumn}>
                      <div className={classes.latestMenuItem}>Womens</div>
                    </div>
                    <div className={classes.latestMenuColumn}>
                      <Image
                        src="https://i.ibb.co/GCCdy8t/womens.png"
                        layout="fill"
                        alt="Shop Women"
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={classes.backdrop}
                  onClick={() => handleTabMouseLeave()}
                />
              </>
            )}
          </Hidden>
        </Toolbar>
      </AppBar>
      {/* <div className={classes.toolbarMargin} /> */}
    </>
  )
}
