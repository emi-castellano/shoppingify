
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Auth } from '@supabase/ui'
import ProductsGrid from '../components/ProductsGrid/ProductsGrid'
import { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { user, session } = Auth.useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user && !session) router.push('/auth')
  }, [user, session, router])

  return <Layout title='Products'>
    <ProductsGrid />
  </Layout>
}

export default Home
