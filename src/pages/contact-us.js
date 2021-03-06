import { setCacheStaleWhileRevalidate } from '@/serverless/cdn'

import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'
import Text from '@/components/Text'

import contactUsContent from '@/content/contactUs/contactUs.json'

export default function ContactUs ({ content }) {
  return (
    <Page>
      <ImageBlock
        CTA={{ label: '联系我们', href: '' }}
        image='/assets/wallpaper2.jpg'
        imagePosition='50% 62%'
      />

      <div className='flex flex-col mx-auto container px-4 lg:px-20 mt-4'>
        {contactUsContent.map((section, index) => {
          if (index === contactUsContent.length - 1) return // skip the last section
          return (
            <div key={index} className='my-2 lg:my-4'>
              <span className='flex justify-start p-2 text-xl lg:text-2xl font-bold'>{section?.label}</span>
              <Text className='p-2' text={section?.content} />
            </div>
          )
        })}

        <div className='flex flex-col lg:flex-row my-4'>
          <div className='w-full lg:w-1/2'>
            <span className='flex justify-start p-2 text-xl lg:text-2xl font-bold'>{contactUsContent[contactUsContent.length - 1]?.label}</span>
            <Text className='mt-4 p-2' text={contactUsContent[contactUsContent.length - 1]?.content} />
            <div className='w-full h-auto flex ml-4 my-6'><img className='flex justify-start' src='/assets/QRCode.png' /></div>
          </div>

          {/* 高德地图 */}
          <iframe className='w-full lg:w-1/2 h-96 mt-8 lg:mt-20 lg:mr-6' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' src='https://surl.amap.com/oD5EF71x4GU' />

        </div>
      </div>
    </Page>
  )
}

export async function getServerSideProps ({ req, res, query }) {
  setCacheStaleWhileRevalidate(res)

  const content = {
    name: 'Tianya'
  }

  return {
    props: {
      content
    }
  }
}
