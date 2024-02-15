import { createServer } from '@/utils/server';
import {NextResponse} from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
  })
export const POST = async (request: Request) => {

    const { record: {id, email }} = await request.json()
    const customer = await stripe.customers.create({
      email,
    })
    const supabase = createServer()
    await supabase.from('profile').update({
      stripe_customer: customer.id,
    }).eq('id', id)
    
    return NextResponse.json({customer})

}