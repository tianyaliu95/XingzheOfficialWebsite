import { useState, useEffect, useRef } from 'react'

import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'
import ImageSlider from '@/components/ImageSlider'
import Text from '@/components/Text'

import rvContent from '@/content/rv/rv-experience.json'

export default function Activities ({ content }) {
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

      <div className='flex flex-col mx-auto container px-20 py-2'>

        <IntroBanner />
        <Divider text='房车款式' widthOfEachHalf='40%' />

        <div className='flex flex-row justify-center my-6'>
          <RVType name='美国Jayco豪华房车' img='/assets/rv/jayco_2.jpg' onClick={() => startScrolling(jaycoRef)} />
          <RVType name='澳洲Deeson情侣/家庭房车' img='/assets/rv/deeson1_1.png' onClick={() => startScrolling(deesonRef)} />
          <RVType name='行者情侣房车' img='/assets/rv/xingzhe_1.jpg' onClick={() => startScrolling(xingzheRef)} />
          <RVType name='美国山野特房车' img='/assets/rv/syt_1.jpg' onClick={() => startScrolling(sytRef)} />
        </div>

        <Divider text='' widthOfEachHalf='50%' />

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
          />
        </div>

        <Cabin />

      </div>
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
    <div className='flex items-center justify-between my-4'>
      <hr className='bg-grays-500' style={{ width: widthOfEachHalf }} />
      <span className='text-grays-600 text-2xl'>{text}</span>
      <hr className='bg-grays-500' style={{ width: widthOfEachHalf }} />
    </div>
  )
}

function RVType ({ name, img, onClick }) {
  return (
    <div className='flex flex-col mx-2' title={name}>
      <img src={img} className='object-cover w-64 h-48 rounded-sm cursor-pointer transform hover:scale-110 hover:opacity-75 duration-500' onClick={onClick} />
      <div className='flex justify-center mt-3 text-grays-600 font-semibold'>{name}</div>
    </div>
  )
}

function RVDetail ({ images, title = '', details, imageOnLeft }) {
  return (
    <>
      <div className='flex flex-row my-10'>

        {/* TODO - Replace by image carousel */}
        {imageOnLeft && <ImageSlider images={images} className='w-1/2 pr-4' />}

        <div className='flex flex-col w-1/2 py-6'>
          <h3 className='flex py-4 justify-center text-xl font-bold'>{title}</h3>
          <div className='flex flex-col px-10 py-8 justify-center'>
            {details.map((detail, index) => (
              <div key={index} className='my-1'>
                <span className='font-bold text-grays-600 text-lg mr-2'>{`${detail.name}: `}</span>
                <span>{detail.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {!imageOnLeft && <ImageSlider images={images} className='object-cover w-1/2 pl-4' />}
      </div>

      <div className='flex justify-center'>
        <hr className='bg-grays-500 w-1/2' />
      </div>
    </>
  )
}

function Cabin () {
  return (
    <div className='mx-2 my-6'>
      <Text text={rvContent.cabin.intro} className='my-4' />
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
