import React, { useState } from 'react'
import { Button, IconButton, Toolbar, Typography } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'
import ShoppingBag from 'assets/shopping-bag.svg'
import Logo from 'assets/crown.svg'
import { useRouter } from 'next/router'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginTop: theme.spacing(2),
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
          <Button
            onClick={() => router.push('/')}
            sx={{
              cursor: 'pointer',
              fontSize: '3rem',
            }}
          >
            <Image src="/assets/crown.svg" height="2rem" width="2rem" />
            {/* <Logo /> */}
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
            <Button
              sx={{
                fontSize: '2rem',
                cursor: 'pointer',
              }}
              onClick={() => shoppingBagClickHandler()}
            >
              <ShoppingBag />
            </Button>
          </div>
        </Toolbar>
      </MuiAppBar>
    </div>
  )
}

export default AppBar
