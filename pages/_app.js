import { store, persistor } from 'store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js'

import { stripePromise } from 'utils/stripe/stripe.utils'
import { InternetConnectionStatusProvider } from 'contexts/internetConnectivity.context'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate
				loading={<div>Loading state from local storage...</div>}
				persistor={persistor}
			>
				<InternetConnectionStatusProvider>
					<Elements stripe={stripePromise}>
						<Component {...pageProps} />
					</Elements>
				</InternetConnectionStatusProvider>
			</PersistGate>
		</Provider>
	)
}

export default MyApp
