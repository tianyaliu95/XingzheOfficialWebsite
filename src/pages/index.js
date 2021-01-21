import { useRef } from 'react'

import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home ({ content }) {
  const ref = useRef(null)

  const scrollToTarget = () => {
    console.log('scrolling...')
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Page>

      <ImageBlock
        onClick={scrollToTarget}
        CTA={{ label: '开始探索', href: '' }}
        image='/assets/wallpaper.jpg'
        isFullScreen
      />

      <div
        ref={ref}
        className='flex flex-row my-6 mx-4'
      >
        <ImageBlock
          CTA={{ label: '房车体验', href: '/rv-experience' }}
          image='/assets/wallpaper2.jpg'
          customClassNames='w-1/3'
          buttonClassNames=''
        />
        <ImageBlock
          CTA={{ label: '露营', href: '/camping' }}
          image='/assets/wallpaper.jpg'
          customClassNames='w-1/3 mx-2'
        />
        <ImageBlock
          CTA={{ label: '亲子活动', href: '/events/family-events' }}
          image='/assets/wallpaper3.jpg'
          customClassNames='w-1/3'
        />
      </div>

      <ScrollToTop />

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
