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
      <div className='flex flex-col mx-auto container px-20 mt-4'>
        {contactUsContent.map((section, index) => {
          return (
            <div key={index} className='my-4'>
              <span className='flex justify-start p-2 text-2xl font-bold'>{section.label}</span>
              <Text className='p-2' text={section.content} />
            </div>
          )
        })}
        <div className='mt-4 p-2 font-bold text-lg'>更多详情欢迎扫下方二维码来咨询~</div>
        <div className='w-full h-auto flex mb-16'><img className='mx-auto' src='/assets/QRCode.png' /></div>
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
