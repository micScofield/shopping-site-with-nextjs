export const routes = [
  {
    type: 'logo',
    link: '/',
    path: '/assets/crown.svg',
  },
  {
    type: 'typography',
    link: '/',
    name: 'Crown Clothing',
    grow: true,
  },
  {
    type: 'standard',
    routes: [
      {
        name: 'Shop',
        link: '/shop',
        hasMenuList: true,
        menuOptions: [
          {
            name: 'Custom Software Development',
            link: '/',
          },
          {
            name: 'Custom Software Development',
            link: '/',
          },
          {
            name: 'Custom Software Development',
            link: '/',
          },
        ],
        // value: 0,
        // activeIndex: 0,
        // ariaOwns: anchorEl ? 'simple-menu' : undefined,
        // ariaPopup: anchorEl ? 'true' : undefined,
        // mouseOver: (event) => handleClick(event),
      },
      {
        name: 'Test',
        link: '/test',
        hasMenuList: true,
        menuOptions: [
          {
            name: 'iOS/Android App Development',
            link: '/test',
          },
          {
            name: 'iOS/Android App Development',
            link: '/test',
          },
        ],
        // value: 1,
        // activeIndex: 1,
        // ariaOwns: anchorEl ? 'simple-menu' : undefined,
        // ariaPopup: anchorEl ? 'true' : undefined,
        // mouseOver: (event) => handleClick(event),
      },
    ],
  },
  {
    type: 'action',
    name: 'Sign In',
    link: '/signin',
  },
  {
    type: 'icon',
    path: '/assets/shopping-bag.svg',
    onClick: () => {},
    alt: 'Shopping Bag',
  },
]
