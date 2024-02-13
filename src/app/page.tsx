import Image from 'next/image'
import {cookies} from 'next/headers'
import {createClient} from '@/utils/server'
import Link from 'next/link'

export default async function Home() {
  const cookieStore = cookies()
  const supabase = await createClient(cookieStore)
  const {data} = await supabase.from('lesson').select('*')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {data?.map(lesson => (
          <li key={lesson.id} className="flex flex-col items-center">
            <Link href={`${lesson.id}`}>
              <h1 className="text-4xl font-bold">{lesson.title}</h1>
              <p className="text-lg">{lesson.description}</p>
            </Link>
            {/* <Image
            src={lesson.image}
            alt={lesson.title}
            width={300}
            height={200}
          /> */}
          </li>
        ))}
      </ul>
    </main>
  )
}
