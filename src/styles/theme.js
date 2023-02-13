import { createTheme } from '@mui/material/styles'

export const COLOR = {
  BLACK: '#191816',
  DARK_GRAY: '#3D3B38',
  MID_GRAY: '#6C6C6C',
  LIGHT_GRAY: '#D0CDC6',
  BAKER_BEACH_GRAY: '#e0d9c5',
  BAKER_BEACH_WHITE: '#f9f1db',
  OUTCAST: '#7d796e',
  LIGHT_BACKGROUND: '#fcf8ed',
  NEAR_WHITE: '#FEFCF8',
}

const SERVICE_COLOR = {
  SUCCESS: {
    PRIMARY: '#377158',
    SECONDARY: '#377158',
  },
  WARNING: {
    PRIMARY: '#817400',
    SECONDARY: '#FFFFF1',
  },
  ERROR: {
    PRIMARY: '#A41F31',
    SECONDARY: '#F2E4E4',
  },
  INFORMATION: {
    PRIMARY: '#817400',
    SECONDARY: '#F5FAFF',
  },
  DISABLED: {
    PRIMARY: '#6C6C6C',
    SECONDARY: '#DBDBDB',
    TERTIARY: '#F3F3F3',
  },
}

const PRIMARY_COLOR = {
  LIGHT: '#7bab46',
  MAIN: '#cd4f30',
  DARK: '#1f4d25',
}

export const SECONDARY_COLOR = {
  LIGHT: {
    40: '#7bab46',
    60: '#7bab46',
    80: '#7bab46',
  },
  MAIN: {
    40: '#cd4f30',
    60: '#cd4f30',
    80: '#cd4f30',
  },
  DARK: {
    40: '#1f4d25',
    60: '#1f4d25',
    80: '#1f4d25',
  },
}

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
      fontWeight: 600,
      // lineHeight: 'normal', // depends on user agent. should use custom values
      // lineHeight: '150%',
      fontSize: '2.5rem',
      letterSpacing: '-0.02em',
    },
  },
  palette: {
    primary: {
      light: PRIMARY_COLOR.LIGHT,
      main: PRIMARY_COLOR.MAIN,
      dark: PRIMARY_COLOR.DARK,
    },
    secondary: {
      light: SECONDARY_COLOR.LIGHT[80],
      main: SECONDARY_COLOR.MAIN[80],
      dark: SECONDARY_COLOR.DARK[80],
    },
    success: {
      light: SERVICE_COLOR.SUCCESS.SECONDARY,
      main: SERVICE_COLOR.SUCCESS.PRIMARY,
      dark: SERVICE_COLOR.SUCCESS.PRIMARY,
    },
    error: {
      light: SERVICE_COLOR.ERROR.SECONDARY,
      main: SERVICE_COLOR.ERROR.PRIMARY,
      dark: SERVICE_COLOR.ERROR.PRIMARY,
    },
    warning: {
      light: SERVICE_COLOR.WARNING.SECONDARY,
      main: SERVICE_COLOR.WARNING.PRIMARY,
      dark: SERVICE_COLOR.WARNING.PRIMARY,
    },
    info: {
      light: SERVICE_COLOR.INFORMATION.SECONDARY,
      main: SERVICE_COLOR.INFORMATION.PRIMARY,
      dark: SERVICE_COLOR.INFORMATION.PRIMARY,
    },
    disabled: {
      light: SERVICE_COLOR.DISABLED.TERTIARY,
      main: SERVICE_COLOR.DISABLED.SECONDARY,
      dark: SERVICE_COLOR.DISABLED.PRIMARY,
    },
    presidio: {
      color: COLOR,
      text: {
        primary: COLOR.BLACK,
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 720,
      lg: 1024,
      xl: 1440,
    },
  },
})

// example of responsive typography tags
theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.up('sm')]: {
    fontSize: '4rem',
  },
}

export default theme
