import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: `"Roboto", sans-serif`,
    tab: {
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
      color: 'white',
    },
    estimate: {
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
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
