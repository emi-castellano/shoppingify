import { useSelector, useDispatch } from "react-redux"
import { Box, Tooltip, Button } from '@chakra-ui/react'
import { supabase } from '../../lib/initSupabase'
import { removeUserAfterLogout } from '../../reducers/userReducer'

const ProfileBubble: React.FC = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  
  const logOut = () => {
    if (user.id) {
      supabase.auth.signOut()
      dispatch(removeUserAfterLogout())
    }
  }

  return <>
    {!user.profileThumbnail
      ? <Box marginTop='3' h='40px' w='40px' borderRadius='50%' backgroundColor='gray.100' />
      : <>
        <Tooltip label={user.fullName} placement='right-end'>
          <Box marginTop='3' h='40px' w='40px' borderRadius='50%' backgroundImage={`url('${user.profileThumbnail}')`} backgroundPosition='center' backgroundRepeat='no-repeat' backgroundSize='cover' />
        </Tooltip>
      </>
    }
    <Button onClick={logOut} marginTop='3' size='sm' variant='link'>Log out</Button>
  </>
}

export default ProfileBubble