import React from 'react'
import {cookies} from 'next/headers'
import {createClient} from '@/utils/server'
// import {supabase} from '../../utils/supabase'

const SingleProduct = async ({params}: {params: {id: string}}) => {
  const cookieStore = cookies()

  const supabase = await createClient(cookieStore)
  const {data} = await supabase
    .from('lesson')
    .select('*')
    .eq('id', params.id)
    .single()

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </div>
  )
}

export default SingleProduct
