import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import theme from '../styles/theme'
import "@fontsource/quicksand/400.css"
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (<ChakraProvider resetCSS theme={theme}>
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </Auth.UserContextProvider>
  </ChakraProvider>)
}
export default MyApp