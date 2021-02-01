import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'
import EmailSubscription from '@/components/EmailSubscription'

export default function SummerCamps ({ content }) {
  return (
    <Page>
      <ImageBlock
        CTA={{ label: '夏令营', href: '' }}
        image='/assets/wallpaper.jpg'
      />

      <div className='flex flex-col mx-auto container px-20 pt-2 pb-16'>
        <Placeholder />
        <div className='flex justify-center'>
          <EmailSubscription height='h-88' />
        </div>

      </div>

    </Page>
  )
}

function Placeholder () {
  return (
    <div className='flex items-center justify-between my-4'>
      <hr className='border-t border-grays-400' style={{ width: '33%' }} />
      <p className='mx-12 my-4 leading-9 text-xl w-3/5 text-center'>
        由于疫情原因，夏令营活动遗憾取消。欢迎在下方留下您的邮箱，我们会在活动上线第一时间通知您！
      </p>
      <hr className='border-t border-grays-400' style={{ width: '33%' }} />
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
