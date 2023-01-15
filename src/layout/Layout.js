import AppBar from 'src/common/mui/AppBar'
import BackToTop from 'src/layout/back-to-top/BackToTop'
import Header from 'src/layout/header/Header'
import HeaderMenuOnly from './header/HeaderMenuOnly'
import HeaderVanila from './header/HeaderVanila'

function Layout({ children }) {
  // Take states outside incase we need value and selectedIndex in some other component for ex. footer

  return (
    <div>
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

      {/* <Header
        setValue={setValue}
        setSelectedIndex={setSelectedIndex}
        value={value}
        selectedIndex={selectedIndex}
        routes={routes}
      /> */}

      {/* <AppBar /> */}

      <Header />

      {/* <HeaderMenuOnly /> */}

      <HeaderVanila />

      {/* ID: back-to-top-anchor is for the ^ icon placed on the bottom of the screen. See BackToTop component  */}
      <div id="back-to-top-anchor" />

      {children}

      <BackToTop />
    </div>
  )
}

export default Layout
