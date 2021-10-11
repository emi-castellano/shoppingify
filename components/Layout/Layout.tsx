import Header from '../Header/Header'
import { Flex, Spacer, Center, Box, Text } from "@chakra-ui/react"

const Layout: React.FC = ({ children }) => {
  return (
    <Flex height='100%'>
      <Header />
      <main >{children}</main>
      <span>Sidebar</span>
    </Flex>
  )
}

export default Layout