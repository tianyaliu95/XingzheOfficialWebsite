import Link from '@/components/Link'

import styles from './Button.module.css'

export default function Button ({ label, href, onClick, className }) {
  // Button should only have either a href or an onClick function. NOT BOTH.
  // If has both, the href would be ignored.

  // preset CSS styling can be overwritten by paramter className

  return (
    <>
      {onClick ? (
        <button
          className={`${styles.button} ${className}`}
          onClick={onClick}
        >
          {label}
        </button>
      ) : (
        <Link to={href || '/'}>
          <button
            className={`${styles.button} ${className}`}
          >
            {label}
          </button>
        </Link>
      )}
    </>
  )
}
