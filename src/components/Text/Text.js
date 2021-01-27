export default function Text ({ text = '', className = '' }) {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: `${text}` }}
      className={`${className} leading-8 text-grays-600`}
    />
  )
}
