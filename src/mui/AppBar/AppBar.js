import React, { useState } from 'react'
import { Button, IconButton, Toolbar, Typography } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'
// import ShoppingBag from 'public/assets/shopping-bag.svg'
import { useRouter } from 'next/router'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginTop: theme.spacing(2),
    border: '1px solid lightgray',
  },
  logo: {
    position: 'relative',
    height: '1.75rem',
    // width: '1.75rem', // of the button container, svg's width can't be changed from here
    border: '1px solid lightgray',
  },
}))

function AppBar() {
  const classes = useStyles()

  const [showModal, setShowModal] = useState(false)

  const shoppingBagClickHandler = (e) => {
    e.preventDefault()

    // open a modal screen (for cart)
  }

  const router = useRouter()
  return (
    <div>
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
              // border: '1px solid lightgray',
              textTransform: 'uppercase',
              letterSpacing: '0.04rem',
              paddingLeft: '1rem',
            }}
            onClick={() => router.push('/')}
          >
            Crown Clothing
          </Typography>
          <div>
            <Button color="inherit" onClick={() => router.push('/shop')}>
              Shop
            </Button>
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
          </div>
        </Toolbar>
      </MuiAppBar>
    </div>
  )
}

export default AppBar
