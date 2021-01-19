import Button from '@/components/Button'

import styles from './ImageBanner.module.css'

export default function ImageBanner ({ CTA, image, imagePosition, isFullScreen }) {
  const { label = '', href = '' } = CTA

  return (
    <div
      className={`${styles.container} ${isFullScreen ? 'min-h-screen' : 'h-64'}`}
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: imagePosition || '50% 50%'
      }}
    >
      <Button label={label} to={href} />
    </div>
  )
}
