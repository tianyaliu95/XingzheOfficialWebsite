import Head from 'next/head'

import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
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
      <ScrollToTop />
      <Footer />
    </>
  )
}

function PageHead () {
  const title = '行者房车'
  const description = '南京行者房车营地'

  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='robots' content='index,follow' />
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta http-equiv='Content-Security-Policy' content='upgrade-insecure-requests' />
    </Head>
  )
}
