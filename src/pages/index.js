import Head from 'next/head'
import Blog from './blog'

export default function Home() {
  return (
    <>
      <Head>
        <title>Front-blog</title>
        <meta name="description" content="Front-blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blog />
    </>
  )
}
