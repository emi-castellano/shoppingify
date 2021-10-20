import { Box, Text, Grid } from '@chakra-ui/react'
import ProductItem from './ProductItem'

const ProductCategory = () => {
  return <Box>
    <Text fontWeight='500' fontSize='18px' mb='18px'>Fruit and vegetables</Text>
    <Grid templateColumns='repeat(5, 1fr)' gap={5}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Grid>
  </Box>
}

export default ProductCategory