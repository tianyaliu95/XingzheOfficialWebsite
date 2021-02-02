import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'
import Text from '@/components/Text'
import Link from '@/components/Link'
import EmailSubscription from '@/components/EmailSubscription'

import activitiesContent from '@/content/activities/activities.json'

export default function Activities ({ content }) {
  return (
    <Page>
      <ImageBlock
        CTA={{ label: '娱乐活动', href: '' }}
        image='/assets/wallpaper8.jpg'
        imagePosition='50% 55%'
      />

      <div className='flex flex-col mx-auto container px-20 py-2'>

        <IntroBanner />

        <div className='flex flex-wrap justify-center my-6'>
          {activitiesContent?.activities?.map((activity, index) => (
            <div
              key={index}
              className='flex w-1/3 pr-0.5 pb-0.5'
            >
              <Activity name={activity?.name} img={activity?.image} />
            </div>
          ))}
        </div>

        <OutroBanner />

      </div>
      <EmailSubscription height='h-72' />
    </Page>

  )
}

function IntroBanner () {
  return (
    <div className='flex items-center justify-between my-4'>
      <hr className='border-t border-grays-400' style={{ width: '25%' }} />
      <Text text={activitiesContent.intro.p1} className='mx-12 my-4 leading-9 text-lg w-3/5 text-center' />
      <hr className='border-t border-grays-400' style={{ width: '25%' }} />
    </div>
  )
}

function Activity ({ name, img }) {
  return (
    <div className='flex w-full transform hover:scale-110 duration-300 z-10 hover:z-20'>
      <ImageBlock
        CTA={{ label: name, href: '' }}
        image={img || '/assets/wallpaper.jpg'}
        imagePosition='50% 55%'
        customClassNames='w-full h-72'
        buttonClassNames='font-bold tracking-wide text-white text-3xl px-6 py-2 rounded-full bg-grays-300 bg-opacity-75'
      />
    </div>
  )
}

function OutroBanner () {
  return (
    <div className='flex items-center justify-between mt-4 mb-16'>
      <hr className='border-t border-grays-400' style={{ width: '10%' }} />

      <div className='flex flex-row my-4 leading-9 text-lg'>
        <Text text={activitiesContent.outro.p1} />
        <Link to='/contact-us'>
          <span className='leading-6 text-2xl text-link underline font-bold cursor-pointer'>联系我们~</span>
        </Link>
        <Text text={activitiesContent.outro.p2} />
      </div>

      <hr className='border-t border-grays-400' style={{ width: '10%' }} />
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
