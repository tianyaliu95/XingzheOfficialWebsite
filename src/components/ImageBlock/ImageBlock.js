import Button from '@/components/Button'

import styles from './ImageBlock.module.css'

export default function ImageBlock ({ onClick, CTA, image, imagePosition, isFullScreen, customClassNames, buttonClassNames }) {
  // The component can only have either a valid href destination OR an onClick function OR neither. NOT BOTH.
  const { label = '', href = '' } = CTA || {}

  return (
    <div
      className={`${styles.container} ${isFullScreen ? 'min-h-screen' : 'h-64'} ${customClassNames || ''}`}
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: imagePosition || '50% 50%'
      }}
    >
      {(href || onClick) ? (
        <Button label={label} href={href} onClick={onClick} className={buttonClassNames} />
      ) : (
        // buttonClassNames will overwrite the entire pre-set css
        label && <h1 className={`${buttonClassNames || 'text-white text-3.5xl py-2 px-12 border-t-2 border-b-2'}`}>{label}</h1> // show nothing when no CTA/label
      )}
    </div>
  )
}
