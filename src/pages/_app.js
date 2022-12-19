import { store, persistor } from 'src/store/index'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js'

import { stripePromise } from 'src/common/utils/stripe/stripe.utils'
import { InternetConnectionStatusProvider } from 'src/contexts/internetConnectivity.context'
import DarkSpinner from 'src/common/components/spinner/dark/DarkSpinner'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    //     <InternetConnectionStatusProvider>
    //     <Elements stripe={stripePromise}>
    //        <Head>
    //          <title>Shop Up</title>
    //          <meta name="description" content="Shop Up" />
    //          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    //        </Head>
    //       <Component {...pageProps} />
    //     </Elements>
    //     {/* </InternetConnectionStatusProvider> */}
    //   </PersistGate>
    // </Provider>
    <Provider store={store}>
      <Head>
        <title>Shop Up</title>
        <meta name="description" content="Shop Up" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

/*
Make sure Head component is present on all pages if you want to customise title and description. Else, this will be the generic one for all the pages
*/
