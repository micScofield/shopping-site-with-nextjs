import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'orange',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&:hover': {
            // color: 'red',
          },
          '&.Mui-selected': {
            opacity: 1,
            // backgroundColor: 'lightpink',
            '&:hover': {
              // backgroundColor: 'orange',
              // color: 'pink',
            },
          },
        },
      },
    },
  },
  typography: {
    // fontFamily: `"Roboto", sans-serif`,
    fontFamily: `"Poppins", sans-serif`,
    // Custom css classname example below -
    estimate: {
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h1: {
      fontFamily: `"Roboto", sans-serif`,
    },
  },
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#fff',
    },
  },
})
export default theme
