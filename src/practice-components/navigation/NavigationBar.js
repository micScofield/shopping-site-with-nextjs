import React from 'react'
import NavigationItem from './NavigationItem'

function NavigationBar(props) {
  const { links, iconProps } = props

  return (
    links &&
    links.length !== 0 && (
      <div className="border-gray flex items-center justify-between border-2 p-4">
        {links[0] && links[0].length !== 0 && (
          <div className="border-gray flex items-center justify-center border-2">
            {links[0].map((linkItem) => (
              <NavigationItem
                linkItem={linkItem}
                key={linkItem.route}
                iconProps={iconProps}
              />
            ))}
          </div>
        )}
        {links[1] && links[1].length !== 0 && (
          <div className="border-gray flex items-center justify-items-center border-2">
            {links[1].map((linkItem) => (
              <NavigationItem
                linkItem={linkItem}
                key={linkItem.route}
                iconProps={iconProps}
              />
            ))}
          </div>
        )}
      </div>
    )
  )
}

export default NavigationBar
