import { useState } from 'react'

import navBarItems from '@/content/navBar/navBarItems.json'

import Link from '@/components/Link'

// import styles from './Header.module.css'

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
    <div className={`flex items-center h-24 px-5 ${shouldHaveBgColor ? 'bg-white' : ''}`}>
      <Link to='/'>
        <img src={logo} className='object-cover w-48 h-auto cursor-pointer' />
      </Link>
      <div className='mx-6 flex h-full justify-start items-center'>
        <NavBar shouldHaveBgColor={shouldHaveBgColor} />
      </div>
    </div>
  )
}

function NavBar ({ shouldHaveBgColor }) {
  const menu = navBarItems

  return (
    <ul className='flex'>
      {menu.map((item, i) => (
        <li
          key={i}
          className={`${shouldHaveBgColor ? 'text-black' : 'text-white'}`}
        >
          <NavBarItem item={item} />
        </li>
      ))}
    </ul>
  )
}

function NavBarItem ({ item }) {
  // Either have a href or a dropdown list
  const { label, href = '', dropdowns } = item

  const [isHovered, setHovered] = useState(false)

  const showMenu = () => {
    setHovered(true)
  }

  const hideMenu = () => {
    setHovered(false)
  }

  return (
    <div
      className='flex cursor-pointer'
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
      onFocus={showMenu}
    >
      <a className='px-8 py-6 text-primary font-bold'>
        <span className={`py-2 ${isHovered ? 'duration-500 ease-in-out border-b border-primary' : ''}`}>
          <Link to={href}>{label}</Link>
        </span>
      </a>
      <Dropdown items={dropdowns} shouldExpand={isHovered} />
    </div>
  )
}

function Dropdown ({ items, shouldExpand }) {
  if (!shouldExpand || !items) {
    return null
  }

  return (
    <ul
      className='absolute bg-white mt-18 py-4'
    >
      {items.map((item, i) => {
        return (
          <li
            key={i}
            className='flex justify-center px-8 py-3 text-grays-500 font-bold hover:text-primary duration-300 ease-in-out'
          >
            <Link to={item.href || '/'}>{item.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
