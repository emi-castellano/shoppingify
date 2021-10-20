import { Box, Text, IconButton } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'

const ProductItem = () => {
  return <Box boxShadow='md' borderRadius='lg' bg='white' w='100%' position='relative'>
    <IconButton
      position='absolute'
      right='5px'
      top='5px'
      variant='iconButton'
      aria-label='Shopping cart'
      isRound
      icon={<FaPlus fontSize='16px' />}
    />
    <Box 
      backgroundImage="url('avocado.jpeg')"
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
      backgroundPosition='center'
      borderTopLeftRadius='lg'
      borderTopRightRadius='lg'
      h='150px'
      w='100%'
    />
    <Box minHeight='50px' padding='10px'>
      <Text noOfLines={2}>Product name and it has two lines to see how the wrap works on my project</Text>
    </Box>
  </Box>
}

export default ProductItem