export default function Header ({ shouldHaveBgColor }) {
  return (
    <>
      <StickyNav shouldHaveBgColor={shouldHaveBgColor} />
    </>
  )
}

function StickyNav ({ shouldHaveBgColor }) {
  const logo = shouldHaveBgColor ? '/assets/logo-black.svg' : '/assets/logo-white.svg'

  return (
    <div className={`flex items-center h-32 px-5 ${shouldHaveBgColor ? 'bt-white' : ''}`}>
      <img src={logo} className='object-cover w-56' />
      <div className='mx-6 flex h-full justify-start items-center'>
        <NavBar shouldHaveBgColor={shouldHaveBgColor} />
      </div>
    </div>
  )
}

function NavBar ({ shouldHaveBgColor }) {
  const menu = [
    {
      label: '走进营地',
      href: '/'
    },
    {
      label: '最新活动',
      href: '/'
    },
    {
      label: '联系我们',
      href: '/'
    }
  ]

  return (
    <>
      {menu.map((option, i) => (
        <span key={i} className={`px-8 py-6 cursor-pointer ${shouldHaveBgColor ? 'text-black' : 'text-white'}`}>
          {option.label}
        </span>
      ))}
    </>
  )
}
