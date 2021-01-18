import Page from '@/components/Page'
import Button from '@/components/Button'

import styles from '../../styles/Home.module.css'

export default function About ({ content }) {
  return (
    <Page>
      <div className={styles.container}>
        <main className={styles.main}>
          <Button label='关于我们' to='/' />
        </main>
      </div>
    </Page>

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
