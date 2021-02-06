import { useRef } from 'react'

import Page from '@/components/Page'
import Text from '@/components/Text'
import ImageBlock from '@/components/ImageBlock'
import EmailSubscription from '@/components/EmailSubscription'

import contactUsContent from '@/content/contactUs/contactUs.json'

const primaryStyles = 'text-lg lg:text-2xl text-primary font-bold'
const secondaryStyles = 'text-primary lg:text-lg font-bold'

export default function Home ({ activities }) {
  const ref = useRef(null)

  const scrollToTarget = () => {
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

      <div ref={ref}>
        <Intro />
      </div>

      <div
        // ref={ref}
        className='flex flex-col lg:flex-row my-1 lg:my-4 mx-2 lg:mx-4'
      >
        <ImageBlock
          CTA={{ label: '关于我们', href: '/about' }}
          image='/assets/wallpaper2.jpg'
          customClassNames='my-1 lg:my-0 lg:w-1/3'
        />
        <ImageBlock
          CTA={{ label: '房车体验', href: '/rv-experience' }}
          image='/assets/wallpaper6.jpg'
          customClassNames='my-1 lg:my-0 lg:w-1/3 lg:mx-2'
        />
        <ImageBlock
          CTA={{ label: '娱乐活动', href: '/activities' }}
          image='/assets/wallpaper8.jpg'
          customClassNames='my-1 lg:my-0 lg:w-1/3'
        />
      </div>

      <Activities activities={activities} />

      <EmailSubscription height='h-80' />

      <Contact />

      <ImageBlock
        image='/assets/image_footer.jpg'
        isFullScreen
      />
    </Page>

  )
}

function Intro () {
  return (
    <div className='flex flex-col'>
      <hr className='flex lg:hidden bg-grays-500 mt-8 mx-6' />
      <div className='mt-6 mb-4 mx-6 lg:mx-10 leading-8 text-grays-600'>
        <span className={primaryStyles}>江苏行者房车有限公司</span>
        <span className='inline'>（行者房车营地）建立于2015年，位于南京城东紫金山东南山麓五棵松湖畔。作为钟山风景区配套服务设施的一部分，我们致力于向广大市民推广家庭房车体验及露营文化。我们全年开放的各类<span className={secondaryStyles}> 户外活动、特色家庭房车体验 </span>及<span className={secondaryStyles}> 露营活动 </span>吸引着来自全国各地的游客。 我们提供<span className={secondaryStyles}> 房车租赁，房车露营体验，房车销售及房车推广 </span>等一系列房车相关服务。此外营地还提供公司团建、沙龙、生日派对、草坪婚礼等服务，让您放松身心尽情享受与家人朋友的快乐时光。</span>
      </div>
    </div>
  )
}

function Activities ({ activities }) {
  return (
    <div className='flex flex-col'>
      <div className='py-6 mx-6 lg:mx-10 leading-8 text-grays-600'>
        <span className='inline'>除了房车体验之外，营地还提供各式各样的房车周边<span className={secondaryStyles}> 娱乐项目 </span>及<span className={secondaryStyles}> 场地活动 </span>，更可以为您订制您理想中的活动哦！行者营地建在茂密葱郁的森林中，环境优美、空气清新，可以做到让您以及您的朋友家人们真正意义上的体验 “融入自然”，感受大自然的拥抱，尽情享受营地之旅 。</span>

        <div className='flex flex-row flex-no-wrap overflow-x-auto mt-4 mb-2 lg:px-2 py-4'>
          {activities?.map((activity, index) => (
            <div
              key={index}
              className='flex w-full lg:w-1/4 lg:pr-0.5 pb-0.5'
            >
              <Activity name={activity?.name} img={activity?.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Activity ({ name, img }) {
  return (
    <div className='flex w-64 lg:transform lg:hover:scale-110 lg:duration-300 z-10 hover:z-20'>
      <ImageBlock
        CTA={{ label: name, href: '/activities' }}
        image={img || '/assets/wallpaper.jpg'}
        imagePosition='50% 55%'
        customClassNames='w-full'
        buttonClassNames='font-bold tracking-wide text-white text-xl lg:text-3xl px-6 py-2 border-none rounded-full bg-grays-300 bg-opacity-75'
      />
    </div>
  )
}

function Contact () {
  return (
    <div className='flex flex-col lg:flex-row mx-auto container px-4 lg:px-20'>
      {/* 高德地图 */}
      <iframe className='hidden lg:flex w-full lg:w-1/2 h-96 mt-2 lg:mt-12 lg:mr-6' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' src='https://surl.amap.com/oD5EF71x4GU' />

      <div className='w-full lg:w-1/2 flex flex-col justify-center text-center'>
        <Text className='mt-4 lg:mt-0 p-2' text={contactUsContent[contactUsContent.length - 1]?.content} />
        <div className='w-full h-auto flex justify-center my-4'><img className='flex' src='/assets/QRCode.png' /></div>
      </div>
    </div>
  )
}

export async function getServerSideProps ({ req, res, query }) {
  const content = {
    name: 'Tianya'
  }

  const activities = [
    {
      name: '水上乐园',
      image: '/assets/about/service_1.jpg'
    },
    {
      name: '真人CS',
      image: '/assets/about/service_10.jpg'
    },
    {
      name: '烧烤',
      image: '/assets/activities/bbq.jpg'
    },
    {
      name: '露营',
      image: '/assets/about/service_2.jpg'
    },
    {
      name: '山地自行车',
      image: '/assets/about/service_4.jpg'
    },
    {
      name: '生日宴',
      image: '/assets/activities/birthday.jpg'
    },
    {
      name: '室外婚礼',
      image: '/assets/about/service_3.jpg'
    },
    {
      name: '垂钓',
      image: '/assets/activities/fishing.jpg'
    },
    {
      name: '蹦床',
      image: '/assets/about/service_8.jpg'
    },
    {
      name: '木雕',
      image: '/assets/activities/wood.jpg'
    }
  ]

  return {
    props: {
      content,
      activities
    }
  }
}
