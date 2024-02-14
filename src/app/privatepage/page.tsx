import {createClient} from '@/utils/server'
import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'
import React from 'react'

const PrivatePage = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const {data, error} = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/')
  }
  return <div>PrivatePage</div>
}

export default PrivatePage
