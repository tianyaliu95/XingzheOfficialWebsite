import Page from '@/components/Page'
import ImageBanner from '@/components/ImageBanner'

export default function ContactUs ({ content }) {
  return (
    <Page>
      <ImageBanner
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
