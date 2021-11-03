import { Box, Text } from '@chakra-ui/react'
import ShoppingList from '../ShoppingList/ShoppingList'
import NoItems from '../ShoppingList/NoItems'
import SidebarFooter from './SidebarFooter'
import AddProductForm from '../AddProductForm/AddProductForm'
import ItemDetail from '../ItemDetail/ItemDetail'

const Sidebar = () => {
  return <Box w='20%'>
    {/* <NoItems /> */}
    {/* <ItemDetail /> */}
    <AddProductForm />
    <SidebarFooter />
  </Box>
}

export default Sidebar  