import Header from '../Header/Header'
import Head from 'next/head'
import { Flex, Box } from "@chakra-ui/react"
import Sidebar from '../Sidebar/Sidebar'

type LayoutProps = {
  children: React.ReactChildren[],
  pageTitle: string
}

const Layout = (props: LayoutProps) => {
  return (
    <Flex height='100%'>
      <Head>
        <title>{props.pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Box as='main' w='80%'>{props.children}</Box>
      <Sidebar />
    </Flex>
  )
}

export default Layout