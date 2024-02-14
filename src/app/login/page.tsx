import {login, signup} from '@/actions/login'
import {createServer} from '@/utils/server'
import {cookies} from 'next/headers'

const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/'
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`
  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url
}

export async function signInWithGithub() {
  'use server'
  const supabase = createServer()

  const {data, error} = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `http://localhost:3000/auth/callback`,
    },
  })

  console.log('data Github', data)
}

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-screen-sm mx-auto">
        <form className="flex flex-col gap-3 mb-4">
          <label htmlFor="email">
            Email:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              required
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              required
            />
          </label>
          <div className="flex gap-3">
            <button formAction={login} className="bg-slate-400 p-3 rounded">
              Log in
            </button>
            <button formAction={signup} className="bg-slate-500 p-3 rounded">
              Sign up
            </button>
          </div>
        </form>
        <div>
          <form action={signInWithGithub}>
            <button
              className="p-3 bg-blue-500 hover:bg-secondary rounded-md text-white font-bold w-full"
              type="submit"
            >
              Sign In with Github
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
