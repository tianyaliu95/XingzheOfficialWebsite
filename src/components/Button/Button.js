import Link from '@/components/Link'

import styles from './Button.module.css'

export default function Button ({ label, href, className }) {
  return (
    <Link to={href || '/'}>
      <button
        className={className || styles.button}
      >
        {label}
      </button>
    </Link>
  )
}
