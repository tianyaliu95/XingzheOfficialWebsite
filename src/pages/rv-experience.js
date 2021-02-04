import { useState, useEffect, useRef } from 'react'

import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'
import ImageSlider from '@/components/ImageSlider'
import Text from '@/components/Text'
import EmailSubscription from '@/components/EmailSubscription'

import rvContent from '@/content/rv/rv-experience.json'

export default function RVExperience ({ content }) {
  const jaycoRef = useRef(null)
  const deesonRef = useRef(null)
  const xingzheRef = useRef(null)
  const sytRef = useRef(null)

  const [canScroll, setCanScroll] = useState(false)
  const [targetRef, setTargetRef] = useState(null)

  useEffect(() => {
    if (canScroll) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' })
      setCanScroll(false)
    }
  }, [canScroll])

  const startScrolling = (target) => {
    setTargetRef(target)
    setCanScroll(true)
  }

  return (
    <Page>
      <ImageBlock
        CTA={{ label: '房车体验', href: '' }}
        image='/assets/wallpaper6.jpg'
        imagePosition='50% 22%'
      />

      <div className='flex flex-col mx-auto container px-4 lg:px-20 pt-2 pb-6'>

        <IntroBanner />
        <Divider text='房车款式' widthOfEachHalf='40%' />

        <div className='flex flex-col lg:flex-row justify-center my-6'>
          <RVType name='美国Jayco豪华房车' img='/assets/rv/jayco_2.jpg' onClick={() => startScrolling(jaycoRef)} />
          <RVType name='澳洲Deeson情侣/家庭房车' img='/assets/rv/deeson1_1.png' onClick={() => startScrolling(deesonRef)} />
          <RVType name='行者情侣房车' img='/assets/rv/xingzhe_1.jpg' onClick={() => startScrolling(xingzheRef)} />
          <RVType name='美国山野特房车' img='/assets/rv/syt_1.jpg' onClick={() => startScrolling(sytRef)} />
        </div>

        <hr className='bg-grays-500 w-full my-4' />
        <div className='lg:hidden'>
          <Divider text='房车详情' widthOfEachHalf='40%' />
          <div className='flex justify-center'><span className='mt-1 text-grays-600 text-base text-center'>（左右滑动查看更多图片）</span></div>
        </div>

        <div ref={jaycoRef}>
          <RVDetail
            images={rvContent?.jayco?.images}
            title='美国Jayco豪华房车'
            details={rvContent?.jayco?.details}
            imageOnLeft
          />
        </div>

        <div ref={deesonRef}>
          <RVDetail
            images={rvContent?.deeson_couple?.images}
            title='澳洲Deeson情侣房车'
            details={rvContent?.deeson_couple?.details}
          />
          <RVDetail
            images={rvContent?.deeson_family?.images}
            title='澳洲Deeson家庭房车'
            details={rvContent?.deeson_family?.details}
            imageOnLeft
          />
        </div>

        <div ref={xingzheRef}>
          <RVDetail
            images={rvContent?.xingzhe?.images}
            title='行者情侣房车'
            details={rvContent?.xingzhe?.details}
          />
        </div>

        <div ref={sytRef}>
          <RVDetail
            images={rvContent?.syt?.images}
            title='美国山野特房车'
            details={rvContent?.syt?.details}
            imageOnLeft
            noDivider
          />
        </div>

        <Cabin />

      </div>
      <EmailSubscription height='h-64' />
    </Page>

  )
}

function IntroBanner () {
  return (
    <div className='flex flex-col justify-center mx-4 my-4'>
      <Text text={rvContent.intro.p1} className='my-4' />
      <Text text={rvContent.intro.p2} className='' />
    </div>
  )
}

function Divider ({ text, widthOfEachHalf }) {
  return (
    <div className='flex items-center justify-center lg:justify-between my-4'>
      <hr className='hidden lg:flex bg-grays-500' style={{ width: widthOfEachHalf }} />
      <span className='text-grays-600 text-2xl'>{text}</span>
      <hr className='hidden lg:flex bg-grays-500' style={{ width: widthOfEachHalf }} />
    </div>
  )
}

function RVType ({ name, img, onClick }) {
  return (
    <div className='flex flex-col lg:mx-2' title={name}>
      <div className='flex justify-center'>
        <img src={img} className='object-cover justify-center w-full lg:w-64 h-48 rounded-sm cursor-pointer transform hover:scale-110 lg:hover:opacity-75 duration-500' onClick={onClick} />
      </div>
      <div className='flex justify-center mt-2 lg:mt-3 mb-6 lg:mb-0 text-grays-600 font-semibold'>{name}</div>
    </div>
  )
}

function RVDetail ({ images, title = '', details, imageOnLeft, noDivider }) {
  return (
    <>
      <div className='flex flex-col lg:flex-row mt-2 mb-6 lg:my-10'>

        {/* TODO - Replace by image carousel */}
        {imageOnLeft && <ImageSlider images={images} className='object-cover w-full lg:w-1/2 lg:pr-4' />}
        {/* Image always on top for mobile */}
        {!imageOnLeft && <ImageSlider images={images} className='lg:hidden object-cover w-full' />}

        <div className='flex flex-col w-full lg:w-1/2 lg:py-6'>
          <h3 className='flex py-3 lg:py-4 justify-center text-lg lg:text-xl font-bold'>{title}</h3>
          <div className='flex flex-col px-4 lg:px-10 py-2 lg:py-4 justify-center'>
            {details.map((detail, index) => (
              <div key={index} className='my-1'>
                <span className='font-bold text-grays-600 text-base lg:text-lg mr-2'>{`${detail.name}: `}</span>
                <span>{detail.detail}</span>
              </div>
            ))}
            <div className='flex justify-center'>
              <a
                className='cursor-pointer underline text-link text-xl font-bold mt-5 tracking-wider opacity-100 transform hover:opacity-75 duration-300'
                href='https://hotels.corporatetravel.ctrip.com/hotels/detailPage?hotelId=5771043'
                target='_blank'
                rel='noopener noreferrer'
              >
                立即前往携程预订
              </a>
            </div>
          </div>
        </div>

        {!imageOnLeft && <ImageSlider images={images} className='hidden lg:flex object-cover w-1/2 pl-4' />}
      </div>

      {!noDivider &&
        <div className='flex justify-center'>
          <hr className='bg-grays-500 w-full lg:w-1/2' />
        </div>}
    </>
  )
}

function Cabin () {
  return (
    <div className='mx-2 mb-6'>
      <Text text={rvContent.cabin.intro} className='hidden lg:flex my-4 px-4 py-12 justify-center lg:text-lg bg-grays-100 text-center' />

      <hr className='bg-grays-500 w-full lg:hidden' />

      <RVDetail
        images={rvContent?.cabin?.small?.images}
        title='桃叶精品木屋 (小)'
        details={rvContent?.cabin?.small?.details}
      />
      <RVDetail
        images={rvContent?.cabin?.large?.images}
        title='桃叶精品木屋 (大)'
        details={rvContent?.cabin?.large?.details}
        imageOnLeft
        noDivider
      />
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
