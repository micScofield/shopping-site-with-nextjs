import { useRouter } from 'next/router'
import React from 'react'
import { ICONS } from 'src/common/constants'

function NavigationItem(props) {
  const router = useRouter()

  const {
    linkItem: { text, route, show, isIcon, iconComponent },
    iconProps,
  } = props

  const getIconComponent = (icon) => {
    if (!icon) return null

    if (icon === ICONS.LOGO) return iconProps.LOGO

    if (icon === ICONS.SHOPPING_BAG) return iconProps.SHOPPING_BAG

    return null
  }

  const Icon = isIcon ? getIconComponent(iconComponent) : null

  return (
    <div
      className="border-gray mx-4 border-2 hover:cursor-pointer"
      onClick={() => router.push(route)}
    >
      {isIcon
        ? Icon && (
            <span className="text-3xl">
              <Icon />
            </span>
          )
        : text && <span>{text}</span>}
    </div>
  )
}

export default NavigationItem
