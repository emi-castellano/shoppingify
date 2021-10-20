import { Box, Text } from '@chakra-ui/react'
import ShoppingList from '../ShoppingList/ShoppingList'
import NoItems from '../ShoppingList/NoItems'
import SidebarFooter from './SidebarFooter'
import ItemDetail from '../ItemDetail/ItemDetail'

const Sidebar = () => {
  return <Box  background='lightOrange' w='20%'>
    {/* <NoItems /> */}
    <ItemDetail />
    <SidebarFooter />
  </Box>
}

export default Sidebar  