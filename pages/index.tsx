import { HomeMainSection } from '@/components'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Junkker Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <HomeMainSection />
      </div>
    </>
  )
}
