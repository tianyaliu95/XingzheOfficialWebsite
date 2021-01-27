import styles from './ImageSlider.module.css'

export default function ImageSlider ({ images, className = '' }) {
  if (!images) {
    return null
  }

  return (
    <div className={`${styles.slider} ${className}`}>
      {images.map((img, i) => {
        return (
          <img key={`image_${i}`} src={img} className='h-88 object-cover' />
        )
      })}
    </div>
  )
}
