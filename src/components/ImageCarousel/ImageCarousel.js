import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function ImageCarousel ({ images, className }) {
  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={className}>
      <Carousel>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} className='object-cover' />
            {/* <p className='legend'>Legend 1</p> */}
          </div>
        ))}
      </Carousel>
    </div>

  )
}
