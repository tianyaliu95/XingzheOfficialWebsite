import { useState, useEffect } from 'react'

import styles from './ScrollToTop.module.css'

export default function ScrollToTop () {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
  })

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <>
      {showScroll &&
        <div className={`${styles.scrollTop}`} onClick={scrollTop} title='回到顶部' />}
    </>
  )
}
