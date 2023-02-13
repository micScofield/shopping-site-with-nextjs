import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import theme from 'src/styles/theme'
import { muiTheme } from 'storybook-addon-material-ui5'
import * as NextImage from 'next/image'
// import { setupWorker, rest } from 'msw'
// import { initialize, mswDecorator } from 'msw-storybook-addon'

// Initialize MSW
// initialize()

// De-optimise next/image to avoid image not found / blur palceholder errors
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
    />
  ),
})

// Add global theme to component stories
const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
)

// Provide theme, MSW addon decorator (if mocking is required) globally
// export const decorators = [withMuiTheme, mswDecorator]
export const decorators = [muiTheme([withMuiTheme])]

// Custom Breakpoints
const BREAKPOINTS_INT = {
  xs: 0,
  sm: 375,
  md: 720,
  lg: 1024,
  xl: 1440,
}

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ]
  })
)

// Default params
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

// mock service worker example config
// if (typeof global.process === 'undefined') {
//   const worker = setupWorker(
//     rest.get('https://jsonplaceholder.typicode.com/users/1'),
//     (req, res, ctx) => {
//       return res(ctx.json({ name: 'Sanyam' }))
//     }
//   )

//   worker.start()
// }
