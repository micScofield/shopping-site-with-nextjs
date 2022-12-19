import { store, persistor } from 'src/store/index'
import { Provider } from 'react-redux'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from 'src/common/utils/stripe/stripe.utils'
import DarkSpinner from 'src/common/components/spinner/dark/DarkSpinner'
import Layout from 'src/common/components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={DarkSpinner}>
        {/* Reason for the following syntax to render children - https://github.com/vercel/next.js/issues/8240#issuecomment-647699316 */}
        {() => (
          <Layout>
            <Elements stripe={stripePromise}>
              <Head>
                <title>Shop Up</title>
                <meta name="description" content="Shop Up" />
                <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
                />
              </Head>
              <Component {...pageProps} />
            </Elements>
          </Layout>
        )}
      </PersistGate>
    </Provider>
  )
}

export default MyApp

/*
Make sure Head component is present on all pages if you want to customise title and description. Else, this will be the generic one for all the pages
*/
