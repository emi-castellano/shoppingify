import { Box, Text } from '@chakra-ui/react'
import AddItemBanner from './AddItemBanner'
import Image from 'next/image'
import noItemsImage from '../../public/cart-draw.svg'

const NoItems = () => {
  return <Box h='calc(100vh - 130px)' position='relative' display='flex' flexDirection='column' alignItems='center'>
    <AddItemBanner />
    <Box display='flex' alignItems='center' h='100%'>
      <Text fontWeight='700'>No Items</Text>
    </Box>
    <Box position='absolute' bottom='-20px'>
      <Image src={noItemsImage} alt='No items image' />
    </Box>
  </Box>
}

export default NoItems