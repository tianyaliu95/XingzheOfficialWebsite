import { useState, useEffect } from 'react'

import navBarItems from '@/content/navBar/navBarItems.json'

import Link from '@/components/Link'

// import styles from './Header.module.css'

export default function Header ({ shouldHaveBgColor }) {
  return (
    <>
      <DesktopNavBar shouldHaveBgColor={shouldHaveBgColor} />
      <MobileNavBar />
    </>
  )
}

// Desktop Nav Bar
function DesktopNavBar ({ shouldHaveBgColor }) {
  const logo = shouldHaveBgColor ? '/assets/logo-black.svg' : '/assets/logo-white.svg'

  return (
    <div className={`hidden lg:flex items-center h-24 px-5 ${shouldHaveBgColor ? 'bg-white' : ''}`}>
      <Link to='/'>
        <img src={logo} className='object-cover w-48 h-auto cursor-pointer' />
      </Link>
      <div className='mx-6 flex h-full justify-start items-center'>
        <NavBar shouldHaveBgColor={shouldHaveBgColor} menu={navBarItems} />
      </div>
    </div>
  )
}

// Mobile Nav Bar
function MobileNavBar () {
  const menu = [
    {
      label: '首页',
      href: '/'
    },
    ...navBarItems
  ]

  const hamburgerIcon = '/assets/hamburger.svg'
  const mobileLogo = '/assets/logo_mobile.svg'

  const [isMenuOpen, setMenuOpen] = useState(false)

  // Disable scroll on page while isMenuOpen
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
    } else {
      document.body.style.overflow = 'inherit'
      document.body.style.position = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const dropdownAnimation = isMenuOpen
    ? 'translate-y-0'
    : '-translate-y-full'

  return (
    <div className='flex flex-col lg:hidden sticky top-0 z-30 scrolling-touch'>
      <div className='flex flex-row items-center h-12 bg-grays-100 border-b border-grays-200 z-50'>
        <img
          src={hamburgerIcon}
          className='flex h-6 ml-4 mr-6'
          onClick={toggleMenu}
        />
        <Link to='/'>
          <img src={mobileLogo} className='flex h-7' />
        </Link>
      </div>

      <div className={`absolute mt-12 w-full h-auto  bg-grays-100 lg:bg-white border-b border-grays-200 lg:border-none z-40 overflow-auto transform duration-300 ${dropdownAnimation}`}>
        <NavBar menu={menu} mobileOnClickCTA={toggleMenu} />
      </div>
    </div>
  )
}

function NavBar ({ shouldHaveBgColor, menu, mobileOnClickCTA = () => {} }) {
  return (
    <ul className='flex flex-col lg:flex-row py-4 lg:py-0'>
      {menu.map((item, i) => (
        <li
          key={i}
          className={`${shouldHaveBgColor ? 'text-black' : 'text-white'}`}
        >
          <NavBarItem item={item} mobileOnClickCTA={mobileOnClickCTA} />
        </li>
      ))}
    </ul>
  )
}

// Each Level 1 CTA
function NavBarItem ({ item, mobileOnClickCTA = () => {} }) {
  // Either have a href or a dropdown list
  const { label, href = '', dropdowns } = item

  const [isHovered, setHovered] = useState(false)

  const showMenu = () => {
    setHovered(true)
  }

  const hideMenu = () => {
    setHovered(false)
  }

  const toggleMenu = () => {
    setHovered(!isHovered)
  }

  return (
    <div
      className={`flex flex-col lg:flex-row ${dropdowns ? '' : 'cursor-pointer'}`}
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
      // onFocus={toggleMenu}
      onClick={toggleMenu}
    >
      <div className='flex justify-center lg:px-8 py-3 lg:py-6 text-xl lg:text-base text-grays-600 lg:text-primary font-bold'>
        <span className={`py-2 ${isHovered ? 'lg:duration-500 lg:ease-in-out lg:border-b lg:border-primary' : ''}`}>
          {dropdowns
            ? <span>{label}</span>
            : <Link to={href} onClick={mobileOnClickCTA}>{label}</Link>}
        </span>
      </div>
      <Dropdown items={dropdowns} shouldExpand={isHovered} mobileOnClickCTA={mobileOnClickCTA} />
    </div>
  )
}

function Dropdown ({ items, shouldExpand, mobileOnClickCTA = () => {} }) {
  if (!shouldExpand || !items) {
    return null
  }

  return (
    <ul
      className='flex flex-col lg:absolute mx-auto lg:mx-0 bg-grays-100 lg:bg-white lg:mt-18 lg:py-4'
    >
      {items.map((item, i) => {
        return (
          <li
            key={i}
            className='flex justify-center px-8 py-3 text-grays-500 text-lg lg:text-base font-bold hover:text-primary transform duration-300 ease-in-out'
          >
            <Link to={item.href || '/'} onClick={mobileOnClickCTA}>{item.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
