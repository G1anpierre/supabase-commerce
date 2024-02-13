// import {supabase} from '@/utils/supabase'
import {redirect} from 'next/navigation'
import React from 'react'
import {cookies} from 'next/headers'
import {createClient} from '@/utils/server'

export async function signInWithGithub() {
  'use server'
  const cookieStore = cookies()
  const supabase = await createClient(cookieStore)

  const {data, error} = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })

  console.log('data Github', data)
}

export async function signOut() {
  'use server'
  const cookieStore = cookies()
  const supabase = await createClient(cookieStore)

  const {error} = await supabase.auth.signOut()
  console.log(error)
}

export const Nav = async () => {
  const cookieStore = cookies()
  const supabase = await createClient(cookieStore)
  const {data, error} = await supabase.auth.getUser()

  console.log('data', data)

  return (
    <div className="p-4 flex justify-between">
      <h1 className="text-4xl font-bold">Supabase Commerce</h1>
      <div>
        {data.user ? (
          <form action={signOut}>
            <button className="text-xl font-bold" type="submit">
              Sign Out
            </button>
          </form>
        ) : (
          <form action={signInWithGithub}>
            <button className="text-xl font-bold" type="submit">
              Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
