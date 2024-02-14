import {login, signInWithGithub, signup} from '@/actions/login'
import {LoginWithGitHub} from '@/components/LoginWithGitHub'

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
          <LoginWithGitHub />
        </div>
      </div>
    </div>
  )
}
