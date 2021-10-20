import { Box, Text } from '@chakra-ui/react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import ItemAttributeStack from './ItemAttributeStack'

const ItemDetail = () => {
  return <Box backgroundColor='white' paddingX='40px' h='calc(100vh - 130px)'>
    <Box display='flex' alignItems='center' mb='20px' paddingTop='20px' cursor='pointer'>
      <FaLongArrowAltLeft color='orange' />
      <Text ml='7px' color='orange'>back</Text>
    </Box>
    <Box
      backgroundImage="url('avocado.jpeg')"
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
      backgroundPosition='center'
      borderRadius='lg'
      h='220px'
      w='100%' />
    <Box mt='20px'>
      <ItemAttributeStack attribute='name' value='Avocado' />
      <ItemAttributeStack attribute='category' value='Fruit and vegetables' />
      <ItemAttributeStack attribute='description' value='Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.' />
    </Box>
  </Box>
}

export default ItemDetail