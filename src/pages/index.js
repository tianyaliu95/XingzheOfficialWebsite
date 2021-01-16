import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home ({ content }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div>Hi, {content.name}</div>
      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  )
}

export async function getServerSideProps ({ req, res, query }) {
  const content = {
    name: 'Tianya'
  }

  return {
    props: {
      content
    }
  }
}
