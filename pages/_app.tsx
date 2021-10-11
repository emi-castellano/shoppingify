import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import "@fontsource/quicksand/400.css"
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (<ChakraProvider resetCSS theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>)
}
export default MyApp