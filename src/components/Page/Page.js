import Head from 'next/head'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Page ({ children, screenBackground }) {
  return (
    <>
      <div className={screenBackground}>
        <PageHead />
        <Header shouldHaveBgColor={!screenBackground} />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

function PageHead () {
  return (
    <Head>
      <title>行者房车</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
