import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'

import aboutContent from '@/content/about/about.json'

export default function About ({ content }) {
  return (
    <Page>
      <ImageBlock
        CTA={{ label: '关于我们', href: '' }}
        imagePosition='50% 77%'
        image='/assets/wallpaper3.jpg'
      />
      <div className='flex flex-col mx-auto container'>
        {aboutContent.map((section, index) => {
          return (
            <div key={index} className='my-4'>
              <span className='flex justify-start p-2 text-2xl font-bold'>{section.label}</span>
              <p className='text-grays-600 p-2'>{section.content}</p>
            </div>
          )
        })}
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
