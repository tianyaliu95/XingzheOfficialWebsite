import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'

export default function Camping ({ content }) {
  return (
    <Page>
      <ImageBlock
        CTA={{ label: '露营', href: '' }}
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
