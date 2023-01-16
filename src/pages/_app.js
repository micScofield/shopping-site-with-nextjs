import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Fonts from 'scripts/seo/fonts'
import { getCurrentUser } from 'src/common/utils/firebase/firebase.utils'
import { InternetConnectionStatusProvider } from 'src/contexts/internetConnectivity.context'
import Layout from 'src/layout/Layout'
import { persistor, store } from 'src/store/index'
import { setCurrentUser } from 'src/store/slices/user.slice'
import createEmotionCache from 'src/styles/createEmotionCache'
import 'src/styles/globals.css'
import theme from 'src/styles/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  // Managing auth status of the user
  useEffect(() => {
    console.log('Effect Fired')
    getCurrentUser()
      .then((user) => {
        if (!user) {
          // dispatch an action setting auth status to false
          console.log('No user found. Redirect to login if required.')
          setCurrentUser(null)
          return null
        }

        console.log(`User: ${user.displayName || user.email}`)
        // dispatch an action to save user data to the store
        setCurrentUser({
          accessToken: user ? user.accessToken : null,
          id: user ? user.uid : null,
          displayName: user ? user.displayName : 'Guest',
          email: user ? user.email : null,
        })
        return null
      })
      .catch((err) => {
        console.log('Failed to get current user', err)
        // dispatch an action setting auth status to false
        setCurrentUser(null)
      })
  }, [])

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      console.log('Removing server side injected styles', jssStyles)
      jssStyles.parentElement.removeChild(jssStyles)
    }

    // Load google fonts post render (making fonts non-blocking for faster page loads)
    Fonts()
  }, [])

  // Remove console calls in production
  // if (process.env.NODE_ENV !== 'development') {
  //   console.log = () => {}
  //   console.debug = () => {}
  //   console.info = () => {}
  //   console.warn = () => {}
  // }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* Loading prop won't work above as we are anyways returning the children (not breaking the SSR flow) and the reason for the following syntax to render children - https://github.com/vercel/next.js/issues/8240#issuecomment-647699316 */}
        {() => (
          <InternetConnectionStatusProvider>
            <CacheProvider value={emotionCache}>
              <Head>
                <title>Shop Up</title>
                <meta
                  name="description"
                  content="Generic description on _app.js. 160 chars, should contain keywords, express value/specs, call to action (for ex. visit today, signup right away)"
                />
                <meta
                  name="viewport"
                  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
              </Head>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ThemeProvider>
            </CacheProvider>
          </InternetConnectionStatusProvider>
        )}
      </PersistGate>
    </Provider>
  )
}

export default appWithTranslation(MyApp)

/*
Make sure Head component is present on all pages if you want to customise title and description. Else, this will be the generic one for all the pages
*/

// server side function won't work in _app.js

// Adding prop-types can be skipped here to reduce bundle size (first load JS)
