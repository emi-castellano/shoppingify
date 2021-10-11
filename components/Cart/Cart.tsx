import { IconButton } from "@chakra-ui/react"
import { FaShoppingCart } from 'react-icons/fa'

type CartProps = {
  cartItems: string,
  children?: JSX.Element
}

const Cart = (props: CartProps) => {
  return <>
    <IconButton
      colorScheme='orange'
      aria-label='Shopping cart'
      isRound
      icon={<FaShoppingCart />}
    />
    <span>5</span>
  </>
}

export default Cart