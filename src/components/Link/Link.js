import NextLink from 'next/link'

export default function Link ({
  children,
  to,
  onClick = () => {}
}) {
  return (
    <div onClick={onClick}>
      <NextLink
        href={to || ''}
      >
        {children}
      </NextLink>
    </div>
  )
}
