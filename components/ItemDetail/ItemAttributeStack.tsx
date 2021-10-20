import { Box, Text } from '@chakra-ui/react'

const ItemAttributeStack = ({ attribute, value }) => {
  return <Box mb='30px'>
    <Text fontSize='12px' color='lightGray'>{attribute}</Text>
    <Text fontSize='18px' color='black' mt='11px'>{value}</Text>
  </Box>
}

export default ItemAttributeStack