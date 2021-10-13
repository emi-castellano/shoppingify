
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Auth } from '@supabase/ui'
import { Text, Button } from '@chakra-ui/react'
import { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import type { NextPage } from 'next'
import { supabase } from '../lib/initSupabase'
import { removeUserAfterLogout } from '../reducers/userReducer'

const Home: NextPage = () => {
  const { user, session } = Auth.useUser()
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user && !session) router.push('/auth')
  }, [user, session, router])

  const logOut = () => {
    supabase.auth.signOut()
    dispatch(removeUserAfterLogout())
  }

  return <Layout>
    Welcome to the home page
    {user && <>
      <Text>You are signed in as {user.email}</Text>
    </>}
    <Button onClick={logOut}>Log out</Button>
  </Layout>

}

export default Home
