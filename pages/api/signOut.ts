import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../lib/initSupabase'

// export const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
//   const tokenHeaders = req?.headers?.token
//   const token = typeof tokenHeaders === 'string'
//     ? tokenHeaders
//     : Array.isArray(tokenHeaders)
//       ? tokenHeaders[0]
//       : ''

//   const { data: user, error } = await supabase.auth.api.getUser(token)

//   if (error) return res.status(401).json({ error: error.message })
//   return res.status(200).json(user)
// }

// export default async function logoutUser(req: NextApiRequest, res: NextApiResponse) {
//   const { error } = await supabase.auth.signOut()

//   if (error) return res.status(401).json({ error: error.message })
//   return res.status(200).json({ body: "User has been logged out" })
// }