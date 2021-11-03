import { useState } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import TextInput from '../Inputs/TextInput'

const AddProductForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')

  return <Box background='white' h='calc(100vh - 130px)' paddingX='40px'>
    <form>
      <Text paddingY='35px' fontSize='2xl'>Add a new product</Text>
      <Stack spacing={3}>
        <TextInput label='Name' value={name} placeholder='Enter a name' onChange={(v) => setName(v)} />
        <TextInput label='Description' value={description} placeholder='Enter a description' onChange={(v) => setDescription(v)} />
        {/* <TextInput label='Description' value={description} placeholder='Enter a description' onChange={setDescription} /> */}
        {/* <TextInput label='Description' value={description} placeholder='Enter a description' onChange={setDescription} /> */}
      </Stack>
    </form>
  </Box>
}

export default AddProductForm