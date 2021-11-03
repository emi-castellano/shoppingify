import { Box, Input, Text } from '@chakra-ui/react'

const TextInput = ({ value, label, onChange, placeholder }) => {
  return <Box marginBottom='18px'>
    <Text fontWeight='600' marginBottom='8px' fontSize='14px' color='gray.600'>{label}</Text>
    <Input height='60px' fontSize='14px' borderColor='gray.400' placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
  </Box>
}

export default TextInput