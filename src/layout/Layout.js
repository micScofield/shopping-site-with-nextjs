import AppBar from 'src/mui/AppBar/AppBar'

function Layout({ children }) {
  return (
    <div style={{ padding: '2rem' }}>
      <AppBar />
      <div style={{ marginTop: '4rem' }} />
      {children}
    </div>
  )
}

export default Layout

// Some ref code
/*
import { links } from 'src/practice-components/navigation/NavLinks'
import NavigationBar from 'src/practice-components/navigation/NavigationBar'

import Logo from 'src/assets/crown.svg'
import ShoppingBag from 'src/assets/shopping-bag.svg'

function Layout({ children }) {
  // const navigationIcons = {
  //   LOGO: Logo,
  //   SHOPPING_BAG: ShoppingBag,
  // }
  return (
    <div className="p-6">
      {<NavigationBar links={links} iconProps={navigationIcons} />}
      {children}
      {Footer Here}
    </div>
  )
}

export default Layout
*/
