import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import classes from './test.module.scss'

function TestAppBar() {
  const navItems = [
    {
      name: 'TestA',
      link: '/shop',
      hasChild: false,
      isLogo: true,
      logoPath: '/assets/crown.svg',
    },
    {
      name: 'TestC',
      link: '/signin',
      hasChild: true,
      childItems: [
        { name: 'TestA', link: '/shop', hasChild: false },
        { name: 'TestB', link: '/signin', hasChild: false },
        { name: 'TestC', link: '/signin', hasChild: false },
        { name: 'TestD', link: '/signin', hasChild: false },
        {
          name: 'TestE',
          link: '/shop',
          hasChild: true,
          childItems: [
            { name: 'TestE - A', link: '/' },
            { name: 'TestE - A', link: '/' },
            { name: 'TestE - A', link: '/shop' },
            { name: 'TestE - A', link: '/shop' },
          ],
        },
      ],
    },
    { name: 'TestB', link: '/signin', hasChild: false },
  ]

  const clickHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className={classes.navContainer}>
      {navItems.map((nav) => (
        <div key={nav.name} className={classes.navItemContainer}>
          <div className={classes.navItem}>
            {nav.isLogo ? (
              <div>
                <Image src={nav.logoPath} layout="fill" />
              </div>
            ) : (
              <div>
                {nav.name}
                {nav.hasChild ? <span> &gt;</span> : ''}
              </div>
            )}
          </div>
          {nav.hasChild && (
            <div className={classes.dropdownContent}>
              {nav.childItems.map((child) => (
                <div className={classes.dropdownItem}>
                  <Link href={child.link}>
                    <span>
                      {child.name}
                      {child.hasChild ? <span>&gt;</span> : ''}
                    </span>
                  </Link>
                  {child.hasChild && (
                    <div className={classes.nestedDropdownContent}>
                      {child.childItems.map((childItem) => (
                        <div className={classes.nestedDropdownItem}>
                          <Link href={childItem.link}>
                            <span onClick={() => clickHandler()}>
                              {childItem.name}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default TestAppBar
