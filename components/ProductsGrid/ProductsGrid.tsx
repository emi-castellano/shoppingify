import { Box, Text, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import ProductCategory from './ProductCategory'

const ProductsGrid = () => {
  return <Box px='80px' py='35px'>
    <Box display='flex' flexDirection='row' justifyContent='space-between' mb='55px'>
      <Text fontSize='24' fontWeight='500'><Text as='span' color='orange' fontWeight='700'>Shoppingify</Text> allows you take your <br/> shopping list wherever you go</Text>
      <Box boxShadow='md' bg='white' w='275px' h='50px' borderRadius='lg'>
        <InputGroup h='100%'>
          <InputLeftElement pointerEvents='none' h='100%'>
            <FaSearch color="gray.700" />
          </InputLeftElement>
          <Input type="text" placeholder="search item" variant='unstyled' />
        </InputGroup>
      </Box>
    </Box>
    <ProductCategory />
  </Box>
}

export default ProductsGrid