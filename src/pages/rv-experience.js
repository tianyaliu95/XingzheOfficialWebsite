import { useState, useEffect, useRef } from 'react'

import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'
import ImageSlider from '@/components/ImageSlider'

import rvContent from '@/content/rv/rv-experience.json'

export default function RVExperience ({ content }) {
  const jaycoRef = useRef(null)
  const deesonCRef = useRef(null)
  const deesonFRef = useRef(null)
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
        image='/assets/wallpaper2.jpg'
        imagePosition='50% 62%'
      />

      <div className='flex flex-col mx-auto container px-20 py-2'>

        <IntroBanner />

        <div className='flex flex-row justify-center my-6'>
          <RVType name='美国Jayco豪华房车' img='/assets/rv/jayco_2.jpg' onClick={() => startScrolling(jaycoRef)} />
          <RVType name='澳洲Deeson情侣房车' img='/assets/rv/deeson1_1.png' onClick={() => startScrolling(deesonCRef)} />
          <RVType name='澳洲Deeson家庭房车' img='/assets/rv/deeson2_1.jpg' onClick={() => startScrolling(deesonFRef)} />
          <RVType name='美国山野特房车' img='/assets/rv/syt_1.jpg' onClick={() => startScrolling(sytRef)} />
        </div>

        <div ref={jaycoRef}>
          <RVDetail
            images={rvContent?.jayco?.images}
            title='美国Jayco豪华房车'
            details={rvContent?.jayco?.details}
            imageOnLeft
          />
        </div>

        <div ref={deesonCRef}>
          <RVDetail
            images={rvContent?.deeson_couple?.images}
            title='澳洲Deeson情侣房车'
            details={rvContent?.deeson_couple?.details}
          />
        </div>

        <div ref={deesonFRef}>
          <RVDetail
            images={rvContent?.deeson_family?.images}
            title='澳洲Deeson家庭房车'
            details={rvContent?.deeson_family?.details}
            imageOnLeft
          />
        </div>

        <div ref={sytRef}>
          <RVDetail
            images={rvContent?.syt?.images}
            title='美国山野特房车'
            details={rvContent?.syt?.details}
          />
        </div>

        <Cabin />

      </div>
    </Page>

  )
}

function IntroBanner () {
  return (
    <div className='flex justify-center my-4'>
      Placeholder for 关于房车的简介
    </div>
  )
}

function RVType ({ name, img, onClick }) {
  return (
    <div className='flex flex-col mx-2'>
      <img src={img} className='object-cover w-64 h-48 rounded-md cursor-pointer transform hover:scale-110 duration-500' onClick={onClick} />
      <div className='flex justify-center mt-3 text-grays-600 font-semibold'>{name}</div>
    </div>
  )
}

function RVDetail ({ images, title = '', details, imageOnLeft }) {
  return (
    <>
      <div className='flex flex-row my-10'>

        {/* {imageOnLeft && <img src={images} className='object-cover w-1/2 pr-4' />} */}
        <div className='w-1/2'><ImageSlider images={images} /></div>

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

        {/* {!imageOnLeft && <img src={images} className='object-cover w-1/2 pl-4' />} */}
      </div>
      <hr className='border border-gray-200' />
    </>
  )
}

function Cabin () {
  return (
    <div>
      Placeholder for 木屋。没看到心仪的房车，尝试一下全新的木屋住宿体验？
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
