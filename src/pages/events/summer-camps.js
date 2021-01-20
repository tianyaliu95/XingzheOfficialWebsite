import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'

export default function SummerCamps ({ content }) {
  return (
    <Page>
      <ImageBlock
        CTA={{ label: '开始探索', href: '/about' }}
        image='/assets/wallpaper.jpg'
      />
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
