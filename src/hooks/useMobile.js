import useMedia from 'use-media'

export default function useMobile () {
  const isMobile = useMedia({ maxWidth: '1023px' })
  return isMobile
}
