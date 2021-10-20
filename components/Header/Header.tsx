import { Stack, Box } from "@chakra-ui/react"
import Image from 'next/image'
import logo from '../../public/logo.svg'
import MenuItem from './MenuItem'
import Cart from '../Cart/Cart'
import ProfileBubble from '../ProfileBubble/ProfileBubble'

const Header: React.FC = props => {
  return (
    <Stack direction='column' height='100%' justifyContent='space-between' width='94px' paddingY='47px' background='white'>
      <Box display='flex' justifyContent='center'>
        <Image src={logo} alt='App logo' />
      </Box>
      <Box>
        <Stack>
          <MenuItem itemName='items' isActive/>
          <MenuItem itemName='history' isActive={false} />
          <MenuItem itemName='statistics' isActive={false} />
        </Stack>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
        <Cart cartItems='5' />
        <ProfileBubble />
      </Box>
    </Stack>
  )
}

export default Header