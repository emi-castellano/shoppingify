import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Auth as SupabaseAuth } from '@supabase/ui'
import { Box, Text } from '@chakra-ui/react'
import { supabase } from '../lib/initSupabase'
import { setUserAfterLogin } from '../reducers/userReducer'

import supabaseLogo from '../public/supabase.svg'
import type { NextPage } from 'next'

const Auth: NextPage = () => {
  const { user } = SupabaseAuth.useUser()
  const [authView, setAuthView] = useState('sign_in')
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') setAuthView('forgotten_password')
      if (event === 'USER_UPDATED') setTimeout(() => setAuthView('sign_in'), 1000)

      // Set the session cookie on the server side
      fetch('/api/auth', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify({ event, session }),
      }).then((res) => res.json())
    })

    return () => {
      authListener && authListener.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (user) {
      dispatch(setUserAfterLogin(user))
      router.push('/') // Redirect to home page
    }
  }, [user, dispatch, router])

  return <Box display='flex' alignItems='center' justifyContent='center' height='100vh'>
    <Box maxW='600' w='100%' bg='white' boxShadow='md' padding='10'>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Image src={supabaseLogo} alt='Supabase logo' height='70' width='50' />
        <Text>Welcome to Supabase Auth</Text>
      </Box>
      <SupabaseAuth
        supabaseClient={supabase}
        providers={['google']}
        // @ts-ignore 
        view={authView}
        socialLayout="horizontal"
        socialButtonSize="xlarge"
      />
    </Box>
  </Box>
}

export default Auth