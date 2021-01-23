import { useState, useEffect, useRef } from 'react'

import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'

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
            images='/assets/rv/jayco_2.jpg'
            title='美国Jayco豪华房车'
            details='lalalalal'
            imageOnLeft
          />
        </div>

        <div ref={deesonCRef}>
          <RVDetail
            images='/assets/rv/deeson1_1.png'
            title='澳洲Deeson情侣房车'
            details='lalalalal'
          />
        </div>

        <div ref={deesonFRef}>
          <RVDetail
            images='/assets/rv/deeson2_1.jpg'
            title='澳洲Deeson家庭房车'
            details='lalalalal'
            imageOnLeft
          />
        </div>

        <div ref={sytRef}>
          <RVDetail
            images='/assets/rv/syt_2.jpg'
            title='美国山野特房车'
            details='lalalalal'
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

function RVDetail ({ images, title, details, imageOnLeft }) {
  return (
    <div className='flex flex-row my-6'>

      {imageOnLeft && <img src={images} className='object-cover w-1/2 pr-4' />}

      <div className='flex flex-col w-1/2'>
        <h3 className='flex justify-center text-xl font-bold'>{title}</h3>
        <p>{details}</p>
      </div>

      {!imageOnLeft && <img src={images} className='object-cover w-1/2 pl-4' />}
    </div>
  )
}

function Cabin () {
  return (
    <div>
      Placeholder for 木屋。没找到喜欢的，尝试一下全新的木屋？
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
