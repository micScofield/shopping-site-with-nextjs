import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../src/styles/theme'
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
export const decorators = [withMuiTheme]

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
