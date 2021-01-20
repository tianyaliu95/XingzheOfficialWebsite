import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'

export default function RVExperience ({ content }) {
  return (
    <Page>
      <ImageBlock
        CTA={{ label: '房车体验', href: '' }}
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
