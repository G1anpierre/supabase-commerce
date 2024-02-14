'use client'
import {createClient} from '@/utils/client'
import React from 'react'

export const LoginWithGitHub = () => {
  const supabase = createClient()
  const handleLoginWithGithub = async () => {
    const {error} = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
    if (error) {
      console.error('Error:', error)
      return
    }
  }
  return (
    <button
      className="p-3 bg-green-500 hover:bg-secondary rounded-md text-white font-bold w-full"
      onClick={handleLoginWithGithub}
    >
      Sign In with Github
    </button>
  )
}
