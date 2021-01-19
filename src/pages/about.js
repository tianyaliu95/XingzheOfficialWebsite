import Page from '@/components/Page'
import ImageBanner from '@/components/ImageBanner'

export default function About ({ content }) {
  return (
    <Page>
      <ImageBanner
        CTA={{ label: '关于我们', href: '/about' }}
        imagePosition='50% 60%'
        image='/assets/wallpaper2.jpg'
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
