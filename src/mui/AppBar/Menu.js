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
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
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

const useStyles = makeStyles((theme) => ({
  options: {
    border: '1px solid gray',
    margin: '1rem',
  },
}))

function CustomizedMenus({ option }) {
  const classes = useStyles()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    console.log('mouse enter')
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (e, link) => {
    e.preventDefault()
    console.log('mouse leave')
    if (link) {
      router.push(link, null, { scroll: false })
    }
    setAnchorEl(null)
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
        onMouseOver={handleClick}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        {option.name}
      </Button>
      <StyledMenu
        id="customized-menu"
        MenuListProps={{
          'aria-labelledby': 'customized-button',
          onMouseLeave: handleClose,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {option.menuOptions.map((menuItem) => (
          <MenuItem
            onClick={(e) => handleClose(e, menuItem.link)}
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
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
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
