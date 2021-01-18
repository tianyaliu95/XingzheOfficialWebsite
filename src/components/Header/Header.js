import { useState } from 'react'

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
    <div className={`flex items-center h-24 px-5 ${shouldHaveBgColor ? 'bt-white' : ''}`}>
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
  const menu = [
    {
      label: '走进营地',
      dropdowns: [
        {
          label: '营地概况',
          href: '/about'
        },
        {
          label: '房车体验',
          href: '/rv-experience'
        },
        {
          label: '露营',
          href: '/camping'
        }
      ]
    },
    {
      label: '最新活动',
      dropdowns: [
        {
          label: '夏令营',
          href: '/summer-camps'
        },
        {
          label: '冬令营',
          href: '/winter-camps'
        },
        {
          label: '亲子活动',
          href: '/family-events'
        },
        {
          label: '公司团建',
          href: '/company-events'
        }
      ]
    },
    {
      label: '联系我们',
      href: '/contact-us'
    }
  ]

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
  const { label, dropdowns } = item

  const [isHovered, setHovered] = useState(false)

  const showMenu = () => {
    console.log('mouse on')
    setHovered(true)
  }

  const hideMenu = () => {
    console.log('mouse left')
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
        <span className={`py-2 ${isHovered ? 'duration-500 ease-in-out border-b border-primary' : ''}`}>{label}</span>
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
      className='absolute bg-white mt-18 px-8 py-4'
    >
      {items.map((item, i) => {
        return (
          <li
            key={i}
            className='flex justify-center py-3 text-grays-500 font-bold hover:text-primary'
          >
            <Link to={item.href || '/'}>{item.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
