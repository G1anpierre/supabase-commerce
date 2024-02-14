// import {supabase} from '@/utils/supabase'
import React from 'react'
import {createServer} from '@/utils/server'
import Link from 'next/link'

export async function signOut() {
  'use server'
  const supabase = createServer()

  const {error} = await supabase.auth.signOut()
  console.log(error)
}

export const Nav = async () => {
  const supabase = createServer()
  const {data, error} = await supabase.auth.getUser()

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
          <Link href="/login">Sign In</Link>
        )}
      </div>
    </div>
  )
}
