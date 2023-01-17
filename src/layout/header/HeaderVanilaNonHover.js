import { useTheme } from '@emotion/react'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Hidden,
  IconButton,
  SwipeableDrawer,
  TextField,
  Typography,
} from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import { styled, alpha } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import makeStyles from '@mui/styles/makeStyles'
import Image from 'next/image'
import InputBase from '@mui/material/InputBase'
import Link from 'src/common/Link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Search } from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: 'white',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    margin: '0 auto',
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    zIndex: 100,
    position: 'relative',
    padding: '0 1rem',
  },
  logo: {},
  tabContainer: {
    // outline: '0.1px solid green',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
  },
  tabWrapper: {
    // border: '0.1px solid blue',
    boxSizing: 'border-box',
    padding: '0.5rem 1.5rem',
  },
  tab: {
    // border: '0.1px solid purple',
    cursor: 'pointer',
    padding: '0rem 0.25rem',
    '&:hover': {
      color: 'orange',
    },
  },
  actions: {
    // border: '0.1px solid purple',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    cursor: 'pointer',
  },
  searchbar: {
    border: 'none',
    padding: '0.5rem 0 0.5rem 0.5rem',
    fontSize: '1rem',
    outline: 'none',
    '&:focus': {
      outline: 'none',
      border: 'none',
    },
  },
  menu: {
    background: '#F8F8F8',
    minHeight: '350px',
    width: '100%',
    position: 'absolute',
    top: '4rem',
    left: 0,
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'scroll',
    zIndex: 100,
    padding: '2rem',
    flexWrap: 'wrap',
    columnGap: '2rem',
  },
  menuColumn: {
    flex: 1,
  },
  menuColumnHeader: {
    marginBottom: '1.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid orange',
  },
  menuItem: {
    cursor: 'pointer',
    fontSize: '0.8rem',
    '&:hover': {
      color: 'orange',
    },
  },
  menuImageColumn: {
    border: '0.1px solid orange',
    position: 'relative',
    // width: '320px',
    // height: '240px',
    width: 'auto',
    height: '100%',
    aspectRatio: 'attr(width) / attr(height)',
    overflow: 'hidden',
  },
  menuCardColumn: {
    flex: 1,
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

export default function HeaderVanilaNonHover(props) {
  const classes = useStyles(props)
  const router = useRouter()

  const [openMenu, setOpenMenu] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuItems, setMenuItems] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

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
              height: '320',
              width: '480',
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
              height: '271',
              width: '400',
              alt: 'Shop Hats',
            },
            {
              src: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              alt: 'Shop Sneakers',
              height: '320',
              width: '480',
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

  const handleTabClick = (e, route) => {
    console.log(route.menu)

    if (anchorEl === e.target) {
      setOpenMenu(!openMenu)
      setMenuItems(route.menu)
      return
    }

    if (route.menu && route.menu.length !== 0) {
      setOpenMenu(true)
      setAnchorEl(e.target)
      setMenuItems(route.menu)
    } else {
      setOpenMenu(false)
      setAnchorEl(null)
      setMenuItems(null)
    }
    // setAnchorEl(e)
  }

  return (
    <ElevationScroll {...props}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar disableGutters className={classes.toolbar}>
          <Hidden smDown>
            <div className={classes.logo} onClick={() => router.push('/')}>
              <Image
                src="/assets/crown.svg"
                alt="App logo"
                // layout="fill"
                height="40"
                width="40"
                priority
              />
            </div>
            <div className={classes.tabContainer}>
              {routes.map((route, i) => (
                <div key={i}>
                  <div className={classes.tabWrapper}>
                    <span
                      key={i}
                      className={classes.tab}
                      onClick={(e) => handleTabClick(e, route)}
                    >
                      {route.name}
                    </span>
                  </div>
                  {openMenu && menuItems && (
                    <div className={classes.menu}>
                      {new Array(3).fill().map((el, index) => (
                        <div className={classes.menuColumn} key={index}>
                          <div className={classes.menuColumnHeader}>Header</div>
                          <div className={classes.menuColumnContent}>
                            <div className={classes.menuItem}>Menu Item</div>
                            <div className={classes.menuItem}>Menu Item</div>
                            <div className={classes.menuItem}>Menu Item</div>
                            <div className={classes.menuItem}>Menu Item</div>
                            <div className={classes.menuItem}>Menu Item</div>
                          </div>
                        </div>
                      ))}
                      {/* <div className={classes.menuImageColumn}>
                        <Image
                          src="https://i.ibb.co/cvpntL1/hats.png"
                          height={203}
                          width={300}
                          // layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                          alt="Shop Hats"
                          style={{
                            cursor: 'pointer',
                          }}
                        />
                      </div> */}
                      <div className={classes.menuCardColumn}>
                        {' '}
                        <Card sx={{ maxWidth: 250 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image="https://i.ibb.co/cvpntL1/hats.png"
                              alt="Shop Hats"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                              >
                                Hats
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ maxHeight: 80, overflow: 'scroll' }}
                              >
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Eligendi quis in omnis magni
                                quisquam beatae enim impedit ipsam facilis
                                reiciendis voluptas, perspiciatis distinctio
                                molestias ex numquam incidunt provident ipsum
                                dolorem adipisci ab nam voluptatem rem.
                                Consectetur id natus fugiat maiores mollitia
                                pariatur explicabo provident soluta, numquam at
                                laborum facilis animi consequuntur aperiam
                                quaerat dicta nisi voluptas accusantium illum
                                atque. Ducimus nesciunt ipsum, nisi magnam et
                                distinctio quisquam qui placeat voluptas optio
                                nam quam iusto laborum dicta, exercitationem
                                quia praesentium accusantium culpa possimus. Eos
                                accusantium sapiente repellat est earum commodi
                                laboriosam voluptate! Dignissimos, minus? Dicta
                                aliquam cumque doloremque sit, ipsam atque.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small" color="primary">
                              Explore
                            </Button>
                          </CardActions>
                        </Card>
                      </div>

                      {/* {JSON.stringify(menuItems)} */}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={classes.actions}>
              <div className={classes.searchContainer}>
                <Search
                  onClick={() => console.log({ searchTerm })}
                  className={classes.searchIcon}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className={classes.searchbar}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className={classes.callToAction}>
                <Button variant="outlined" disableRipple>
                  Explore
                </Button>
              </div>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
