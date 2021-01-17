import styles from './Button.module.css'

export default function Button ({ label, href, className }) {
  return (
    <button className='cursor-pointer'>
      <a
        href={href || '/'}
        className={className || styles.button}
      >
        {label}
      </a>
    </button>
  )
}
