
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { Auth } from '@supabase/ui'
import { Box, Text } from '@chakra-ui/react'
import { supabase } from '../lib/initSupabase'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import type { NextPage } from 'next'
import { supabaseFetcher } from '../lib/supabaseFetcher'
import supabaseLogo from '../public/supabase.svg'

const Home: NextPage = () => {
  const { user, session } = Auth.useUser()
  const { data, error } = useSWR(session ? ['/api/getUser', session.access_token] : null, supabaseFetcher)
  const [authView, setAuthView] = useState('sign_in')
  
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') setAuthView('forgotten_password')
      if (event === 'USER_UPDATED') setTimeout(() => setAuthView('sign_in'), 1000)
      
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

  if (!user) return <Box display='flex' alignItems='center' justifyContent='center' height='100vh'>
    <Box maxW='600' w='100%' bg='white' boxShadow='md' padding='10'>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Image src={supabaseLogo} alt='Supabase logo' height='70' width='50' />
        <Text>Welcome to Supabase Auth</Text>
      </Box>
      <Auth
        supabaseClient={supabase}
        providers={['google']}
        // @ts-ignore 
        view={authView}
        socialLayout="horizontal"
        socialButtonSize="xlarge"
      />
    </Box>
  </Box>

  return <Layout>
    Welcome to the home page
    {user && <>
      <Text>You are signed in as {user.email}</Text>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>}
  </Layout>

}

export default Home
