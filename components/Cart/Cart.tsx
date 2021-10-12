import { IconButton, Box, Text } from "@chakra-ui/react"
import { FaShoppingCart } from 'react-icons/fa'

type CartProps = {
  cartItems: string,
  children?: JSX.Element
}

const Cart = (props: CartProps) => {
  return <Box position='relative'>
    <IconButton
      variant='iconButton'
      aria-label='Shopping cart'
      isRound
      icon={<FaShoppingCart />}
    />
    <Box
      position='absolute'
      bg='red'
      borderRadius='4px'
      width='15px'
      display='flex'
      justifyContent='center'
      top='-5px'
      right='-3px'
    >
      <Text fontSize='xs' color='white'>5</Text>
    </Box>
  </Box>
}

export default Cart