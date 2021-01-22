import styles from './ImageSlider.module.css'

export default function ImageSlider ({ images }) {
  if (!images) {
    return null
  }

  return (
    <div className={styles.slider}>
      {images.map((img, i) => {
        return (
          <img key={`image_${i}`} src={img} className='h-88' />
        )
      })}
    </div>
  )
}
