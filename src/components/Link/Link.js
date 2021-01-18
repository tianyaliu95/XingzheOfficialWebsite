import NextLink from 'next/link'

export default function Link ({
  children,
  to
}) {
  return (
    <NextLink
      href={to}
    >
      {children}
    </NextLink>
  )
}
