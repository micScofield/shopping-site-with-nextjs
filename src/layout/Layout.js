import AppBar from 'src/mui/AppBar/AppBar'
import AppBar2 from 'src/mui/AppBar/AppBar2'
import BackToTop from 'src/layout/back-to-top/BackToTop'
import { useState } from 'react'
import { routes } from 'src/mui/AppBar/routes'
import Header from 'src/mui/AppBar/AppBar3'
// import TestAppBar from './TestAppBar'

function Layout({ children }) {
  // Taking following states outside incase we need value and selectedIndex in some other component for ex. footer
  const [value, setValue] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div style={{ padding: '2rem' }}>
      {/* <AppBar
        setValue={setValue}
        setSelectedIndex={setSelectedIndex}
        value={value}
        selectedIndex={selectedIndex}
      /> */}

      {/* <div style={{ marginTop: '4rem' }} /> */}

      {/* <AppBar2
        setValue={setValue}
        setSelectedIndex={setSelectedIndex}
        value={value}
        selectedIndex={selectedIndex}
        routes={routes}
      /> */}

      <Header
        setValue={setValue}
        setSelectedIndex={setSelectedIndex}
        value={value}
        selectedIndex={selectedIndex}
        routes={routes}
      />

      {/* <div style={{ marginTop: '4rem' }} />
      <TestAppBar /> */}

      {/* ID: back-to-top-anchor is for the ^ icon placed on the bottom of the screen. See BackToTop component  */}
      <div style={{ marginTop: '4rem' }} id="back-to-top-anchor" />

      {children}

      <BackToTop />
    </div>
  )
}

export default Layout
