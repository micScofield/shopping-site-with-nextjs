import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import theme from 'src/styles/theme'

export default function withMUITheme(story) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {story()}
    </ThemeProvider>
  )
}
