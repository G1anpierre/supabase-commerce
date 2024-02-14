import {createServer} from '@/utils/server'
import {redirect} from 'next/navigation'
import React from 'react'

const PrivatePage = async () => {
  const supabase = createServer()
  const {data, error} = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/')
  }
  return <div>PrivatePage</div>
}

export default PrivatePage
