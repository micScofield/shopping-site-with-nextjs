import AppBar from 'src/common/mui/AppBar'
import BackToTop from 'src/layout/back-to-top/BackToTop'
import Header from 'src/layout/header/Header'
import HeaderMenuOnly from './header/HeaderMenuOnly'
import HeaderVanila from './header/HeaderVanila'
import HeaderVanilaNonHover from './header/HeaderVanilaNonHover'
import HeaderVanilaNonHoverSticky from './header/HeaderVanilaNonHoverSticky'
import TestSticky from './test/TestSticky'
import HeaderVanilaNonHoverStickyAndAbsolute from './header/HeaderVanilaNonHoverStickyAndAbsolute'

function Layout({ children }) {
  // Take states outside incase we need value and selectedIndex in some other component for ex. footer

  return (
    <div>
      {/* <AppBar /> */}

      {/* <div style={{ marginTop: '4rem' }} /> */}

      {/* <AppBar2 /> */}

      {/* <Header
        setValue={setValue}
        setSelectedIndex={setSelectedIndex}
        value={value}
        selectedIndex={selectedIndex}
        routes={routes}
      /> */}

      {/* Has language picker */}
      {/* <Header /> */}

      {/* <HeaderMenuOnly /> */}

      {/* <HeaderVanila /> */}

      {/* <HeaderVanilaNonHover /> */}

      {/* <HeaderVanilaNonHoverSticky /> */}
      <HeaderVanilaNonHoverStickyAndAbsolute />

      {/* <TestSticky /> */}

      {/* Pushing app down by a few rems */}
      <div style={{ marginBottom: '5rem' }} />

      {/* ID: back-to-top-anchor is for the ^ icon placed on the bottom of the screen. See BackToTop component  */}
      <div id="back-to-top-anchor" />

      {children}

      <BackToTop />
    </div>
  )
}

export default Layout
