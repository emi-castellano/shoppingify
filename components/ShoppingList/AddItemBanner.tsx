import { Box, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'
import bottleImage from '../../public/source.svg'

const AddItemBanner = () => {
  return <Box backgroundColor='bordeau' borderRadius='lg' display='flex' h='130px' marginTop='40px' marginX='30px'>
    <Box position='relative' top='-15px'>
      <Image src={bottleImage} alt='Add item image' />
    </Box>
    <Box marginLeft='30px' display='flex' flexDirection='column' alignItems='flex-start' justifyContent='center'>
      <Text fontWeight='700' color='white'>Didn't find what you need?</Text>
      <Button marginTop='10px' fontSize='14px' bg='white' variant='primary' borderRadius='lg'>Add item</Button>
    </Box>    
  </Box>
}

export default AddItemBanner