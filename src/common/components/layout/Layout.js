import { InternetConnectionStatusProvider } from 'src/contexts/internetConnectivity.context'

function Layout({ children }) {
  return (
    <InternetConnectionStatusProvider>
      {children}
    </InternetConnectionStatusProvider>
  )
}

export default Layout
