import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import classes from 'src/common/components/navigation-bar/navigation.module.scss'

function NavTab({ navTab, children }) {
  const { route, text, onClick, isIcon } = navTab

  if (isIcon)
    return (
      <Link className={classes.navLink} onClick={onClick}>
        {children[0]}
      </Link>
    )

  if (text === 'Sign Out')
    return (
      <Link className={classes.navLink} onClick={onClick}>
        {text}
      </Link>
    )

  return (
    <Link className={classes.navLink} href={`${route}`}>
      {text}
    </Link>
  )
}

NavTab.propTypes = {
  navTab: PropTypes.shape({
    route: PropTypes.string,
    text: PropTypes.string,
  }),
  children: PropTypes.array,
}

export default NavTab
