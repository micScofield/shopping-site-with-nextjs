import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import classes from 'src/common/components/navigation-bar/navigation.module.scss'
import NavTab from 'src/common/components/navigation-bar/NavTab'

// supports only one on hover modal

function NavigationBar({ Logo, links, children }) {
  return (
    <div className={classes.navigation}>
      {Logo && (
        <Link href="/">
          <Logo />
        </Link>
      )}

      <div className={classes.navLinksContainer}>
        {links.length !== 0 &&
          links.map((link) => {
            if (link.show) {
              return (
                <Fragment key={link.id}>
                  <NavTab navTab={link}>{children}</NavTab>
                </Fragment>
              )
            }
            return null
          })}
      </div>

      {/* Meant to be a conditional modal. Only one supported */}
      {children && children.length !== 0 && children[children.length - 1]}
    </div>
  )
}

NavigationBar.propTypes = {
  Logo: PropTypes.any,
  links: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.array,
}

export default NavigationBar
