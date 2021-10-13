import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import theme from '../styles/theme'
import { store } from '../store/configureStore'
import { Provider } from 'react-redux'
import "@fontsource/quicksand/400.css"
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (<ChakraProvider resetCSS theme={theme}>
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Auth.UserContextProvider>
  </ChakraProvider>)
}
export default MyApp