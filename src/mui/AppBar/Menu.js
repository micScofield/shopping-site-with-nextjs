import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { alpha, styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'src/common/Link'

const useStyles = makeStyles((theme) => ({
  options: {
    border: '0.25px solid gray',
    margin: '1rem',
  },
  menuGrid: {
    border: '1px solid red',
  },
}))

function CustomizedMenus({ option }) {
  const classes = useStyles()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const handleClick = (event) => {
    console.log('mouse enter')
    setAnchorEl(event.currentTarget)
    setOpen(!open)
  }
  const handleClose = (link) => {
    console.log('mouse leave')
    if (link) {
      router.push(link, null, { scroll: false })
    }
    setAnchorEl(null)
    setOpen(false)
  }

  const handleMenuItemMouseOver = (e) => {
    console.log(e, e.target)
  }

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        disableElevation
        disableRipple
        className={classes.options}
        onClick={handleClick}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        MenuListProps={{
          'aria-labelledby': 'customized-button',
          // onMouseLeave: handleClose,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {option.map((menuItem, i) => (
          <MenuItem
            key={i}
            component={Link}
            href={menuItem.link}
            onClick={() => handleClose(menuItem.link)}
            onMouseOver={(e) => handleMenuItemMouseOver(e)}
            disableRipple
          >
            {menuItem.name}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  )
}

export default CustomizedMenus

const StyledMenu = styled((props) => (
  <Menu
    // elevation={1}
    // anchorOrigin={{
    //   vertical: 'bottom',
    //   horizontal: 'left',
    // }}
    // transformOrigin={{
    //   vertical: 'top',
    //   horizontal: 'left',
    // }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 0,
    marginTop: theme.spacing(1),
    minWidth: '100%',
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}))
