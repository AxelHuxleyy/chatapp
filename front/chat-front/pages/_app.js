import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo'
import { store } from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
